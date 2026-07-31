const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const PRICE_IDS = {
  "karbon-hoodie":     "price_1TzI4A2RTpeJpzWZocI2r4cb",
  "kloud-hoodie":      "price_1TzI4A2RTpeJpzWZocI2r4cb",
  "karbon-tee":        "price_1TzIRd2RTpeJpzWZ3acRyNvB",
  "kloud-tee":         "price_1TzIRd2RTpeJpzWZ3acRyNvB",
  "karbon-sweatpants": "price_1TzISd2RTpeJpzWZzHfusVpy",
  "kloud-sweatpants":  "price_1TzISd2RTpeJpzWZzHfusVpy",
};
const EXPRESS_SHIPPING_PENCE = 1099;

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") return { statusCode: 405, body: "Method Not Allowed" };
  try {
    const { basket, shipMethod } = JSON.parse(event.body || "{}");
    if (! Array.isArray(basket) || basket.length === 0)
      return { statusCode: 400, body: JSON.stringify({ error: "Basket is empty." }) };

    const line_items = basket.map((item) => {
      const price = PRICE_IDS[item.key];
      if (!price) throw new Error("Unknown product: " + item.key);
      return { price, quantity: Math.max(1, Math.min(10, item.qty || 1)) };
    });

    const itemSummary = basket.map((i) => `${i.key} ×${i.qty} (size ${i.size})`).join(" | ");
    const isExpress = shipMethod === "Express";
    const shipping_options = [{
      shipping_rate_data: {
        type: "fixed_amount",
        fixed_amount: { amount: isExpress ? EXPRESS_SHIPPING_PENCE : 0, currency: "gbp" },
        display_name: isExpress ? "Express — made to order, ~10 days" : "Standard — made to order, ~30 days",
        delivery_estimate: isExpress
          ? { minimum: { unit: "business_day", value: 7 }, maximum: { unit: "business_day", value: 12 } }
          : { minimum: { unit: "business_day", value: 20 }, maximum: { unit: "business_day", value: 30 } },
      },
    }];

    const origin = event.headers.origin || event.headers.referer || "https://deluxe-monstera-a7abf6.netlify.app";

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items,
      shipping_options,
      shipping_address_collection: { allowed_countries: [] },
      phone_number_collection: { enabled: true },
      metadata: { items: itemSummary, delivery: shipMethod || "Standard", brand: "KALMERA APPAREL" },
      success_url: `${origin}/?paid=1`,
      cancel_url: `${origin}/?canceled=1`,
    });

    return { statusCode: 200, headers: { "Content-Type": "application/json" }, body: JSON.stringify({ url: session.url }) };
  } catch (err) {
    return { statusCode: 500, headers: { "Content-Type": "application/json" }, body: JSON.stringify({ error: err.message || "Checkout failed." }) };
  }
};

