// KALMERA — Stripe Checkout for Cloudflare Pages Functions
// Path: functions/api/checkout.js  → available at /api/checkout
//
// Cloudflare runs on the Workers runtime (Web APIs, not Node), so instead of the
// Node Stripe library we call Stripe's REST API directly with fetch. The secret key
// comes from the Cloudflare environment variable STRIPE_SECRET_KEY (set in the
// Cloudflare Pages dashboard → Settings → Environment variables). Never in this file.

const PRICE_IDS = {
  "karbon-hoodie":     "price_1TzI4A2RTpeJpzWZocI2r4cb", // Mass £50
  "kloud-hoodie":      "price_1TzI4A2RTpeJpzWZocI2r4cb",
  "karbon-tee":        "price_1TzIRd2RTpeJpzWZ3acRyNvB", // Base £30
  "kloud-tee":         "price_1TzIRd2RTpeJpzWZ3acRyNvB",
  "karbon-sweatpants": "price_1TzISd2RTpeJpzWZzHfusVpy", // Drift £40
  "kloud-sweatpants":  "price_1TzISd2RTpeJpzWZzHfusVpy",
};

const EXPRESS_SHIPPING_PENCE = 1099;
const SHIP_COUNTRIES = ["GB","IE","US","CA","AU","NZ","FR","DE","ES","IT","NL","BE","AT","PT","SE","NO","DK","FI","CH","PL","CZ","GR","IS","LU","JP","SG","HK","AE","ZA"];

// Cloudflare Pages Functions export an onRequestPost handler
export async function onRequestPost(context) {
  const { request, env } = context;
  const json = (obj, status = 200) =>
    new Response(JSON.stringify(obj), { status, headers: { "Content-Type": "application/json" } });

  if (!env.STRIPE_SECRET_KEY) {
    return json({ error: "Server missing Stripe key (STRIPE_SECRET_KEY not set)." }, 500);
  }

  try {
    const { basket, shipMethod } = await request.json();
    if (!Array.isArray(basket) || basket.length === 0) {
      return json({ error: "Basket is empty." }, 400);
    }

    const origin = new URL(request.url).origin;
    const isExpress = shipMethod === "Express";
    const itemSummary = basket.map((i) => `${i.key} x${i.qty} (size ${i.size})`).join(" | ");

    // Stripe's API wants form-encoded params with array/bracket notation.
    const params = new URLSearchParams();
    params.append("mode", "payment");
    params.append("success_url", `${origin}/?paid=1`);
    params.append("cancel_url", `${origin}/?canceled=1`);
    params.append("phone_number_collection[enabled]", "true");
    // shows the "Add promotion code" field on Stripe's payment page
    params.append("allow_promotion_codes", "true");

    // line items
    basket.forEach((item, i) => {
      const price = PRICE_IDS[item.key];
      if (!price) throw new Error("Unknown product key: " + item.key);
      params.append(`line_items[${i}][price]`, price);
      params.append(`line_items[${i}][quantity]`, String(Math.max(1, Math.min(10, item.qty || 1))));
    });

    // shipping address countries
    SHIP_COUNTRIES.forEach((c, i) => params.append(`shipping_address_collection[allowed_countries][${i}]`, c));

    // one shipping rate (Standard free / Express £10.99)
    params.append("shipping_options[0][shipping_rate_data][type]", "fixed_amount");
    params.append("shipping_options[0][shipping_rate_data][fixed_amount][amount]", String(isExpress ? EXPRESS_SHIPPING_PENCE : 0));
    params.append("shipping_options[0][shipping_rate_data][fixed_amount][currency]", "gbp");
    params.append("shipping_options[0][shipping_rate_data][display_name]", isExpress ? "Express - made to order, ~10 days" : "Standard - made to order, ~30 days");

    // metadata for fulfilment
    params.append("metadata[items]", itemSummary);
    params.append("metadata[delivery]", shipMethod || "Standard");
    params.append("metadata[brand]", "KALMERA APPAREL");

    const res = await fetch("https://api.stripe.com/v1/checkout/sessions", {
      method: "POST",
      headers: {
        "Authorization": "Bearer " + env.STRIPE_SECRET_KEY,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: params.toString(),
    });

    const data = await res.json();
    if (!res.ok) {
      // Stripe returned an error — surface the real reason
      return json({ error: (data.error && data.error.message) || "Stripe error" }, 500);
    }
    return json({ url: data.url });

  } catch (err) {
    return json({ error: (err && err.message) || "Checkout failed." }, 500);
  }
}
