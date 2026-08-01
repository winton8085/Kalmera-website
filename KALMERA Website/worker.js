export default {
  async fetch(request, env) {
    // Enable CORS
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
        },
      });
    }

    if (request.method !== 'POST') {
      return new Response(JSON.stringify({ error: 'Method not allowed' }), {
        status: 405,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    try {
      const body = await request.json();
      const { basket } = body;

      if (!basket || !Array.isArray(basket)) {
        return new Response(JSON.stringify({ error: 'Invalid basket' }), {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        });
      }

      // Map product keys to Stripe price IDs
      const priceMap = {
        '01': 'price_1TzISd2RTpeJpzWZzHfusVpy', // KALMERA Drift — Sweatpants (£40)
        '02': 'price_1TzIRd2RTpeJpzWZ3acRyNvB', // KALMERA Base — Tee (£30)
        '03': 'price_1TzI4A2RTpeJpzWZocI2r4cb', // KALMERA Mass — Hoodie (£50)
      };

      // Convert basket to Stripe line items
      const lineItems = basket.map(item => {
        const priceId = priceMap[item.key];
        if (!priceId) {
          throw new Error(`Unknown product: ${item.key}`);
        }
        return {
          price: priceId,
          quantity: item.qty,
        };
      });

      // Create Stripe checkout session
      const stripeSecret = env.STRIPE_SECRET_KEY;
      const response = await fetch('https://api.stripe.com/v1/checkout/sessions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${stripeSecret}`,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          'success_url': `${new URL(request.url).origin}?checkout=success`,
          'cancel_url': `${new URL(request.url).origin}?checkout=cancel`,
          'line_items': JSON.stringify(lineItems),
          'mode': 'payment',
        }).toString(),
      });

      const session = await response.json();

      if (!response.ok) {
        return new Response(JSON.stringify({ error: session.error }), {
          status: response.status,
          headers: { 'Content-Type': 'application/json' },
        });
      }

      return new Response(JSON.stringify({ url: session.url }), {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      });
    } catch (error) {
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }
  },
};
