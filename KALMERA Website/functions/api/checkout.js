const PRICE_IDS = {
  "karbon-hoodie":     "price_1TzI4A2RTpeJpzWZocI2r4cb",
  "kloud-hoodie":      "price_1TzI4A2RTpeJpzWZocI2r4cb",
  "karbon-tee":        "price_1TzIRd2RTpeJpzWZ3acRyNvB",
  "kloud-tee":         "price_1TzIRd2RTpeJpzWZ3acRyNvB",
  "karbon-sweatpants": "price_1TzISd2RTpeJpzWZzHfusVpy",
  "kloud-sweatpants":  "price_1TzISd2RTpeJpzWZzHfusVpy",
};
const EXPRESS_SHIPPING_PENCE = 1099;
const SHIP_COUNTRIES = ["GB","IE","US","CA","AU","NZ","FR","DE","ES","IT","NL","BE","AT","PT","SE","NO","DK","FI","CH","PL","CZ","GR","IS","LU","JP","SG","HK","AE","ZA"];

export async function onRequestPost(context) {
  const { request, env } = context;
  const json = (obj, status = 200) => new Response(JSON.stringify(obj), { status, headers: { "Content-Type": "application/json" } });
  if (!env.STRIPE_SECRET_KEY) return json({ error: "Server missing Stripe key." }, 500);
  try {
    const { basket, shipMethod } = await request.json();
    if (!Array.isArray(basket) || basket.length === 0) return json({ error: "Basket is empty." }, 400);
    const origin = new URL(request.url).origin;
    const isExpress = shipMethod === "Express";
    const itemSummary = basket.map((i) => `${i.key} x${i.qty} (size ${i.size})`).join(" | ");
    const params = new URLSearchParams();
    params.append("mode", "payment");
    params.append("success_url", `${origin}/?paid=1`);
    params.append("cancel_url", `${origin}/?canceled=1`);
    params.append("phone_number_collection[enabled]", "true");
    basket.forEach((item, i) => {
      const price = PRICE_IDS[item.key];
      if (!price) throw new Error("Unknown product key: " + item.key);
      params.append(`line_items[${i}][price]`, price);
      params.append(`line_items[${i}][quantity]`, String(Math.max(1, Math.min(10, item.qty || 1))));
    });
    SHIP_COUNTRIES.forEach((c, i) => params.append(`shipping_address_collection[allowed_countries][${i}]`, c));
    params.append("shipping_options[0][shipping_rate_data][type]", "fixed_amount");
    params.append("shipping_options[0][shipping_rate_data][fixed_amount][amount]", String(isExpress ? EXPRESS_SHIPPING_PENCE : 0));
    params.append("shipping_options[0][shipping_rate_data][fixed_amount][currency]", "gbp");
    params.append("shipping_options[0][shipping_rate_data][display_name]", isExpress ? "Express - ~10 days" : "Standard - ~30 days");
    params.append("metadata[items]", itemSummary);
    params.append("metadata[delivery]", shipMethod || "Standard");
    params.append("metadata[brand]", "KALMERA APPAREL");
    const res = await fetch("https://api.stripe.com/v1/checkout/sessions", {
      method: "POST",
      headers: { "Authorization": "Bearer " + env.STRIPE_SECRET_KEY, "Content-Type": "application/x-www-form-urlencoded" },
      body: params.toString(),
    });
    const data = await res.json();
    if (!res.ok) return json({ error: (data.error && data.error.message) || "Stripe error" }, 500);
    return json({ url: data.url });
  } catch (err) {
    return json({ error: (err && err.message) || "Checkout failed." }, 500);
  }
}

