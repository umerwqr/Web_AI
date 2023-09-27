import Stripe from "stripe";
const stripe = new Stripe('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');

export default async (req, res) => {
  switch(req.method){
    case "GET":
      await createPayment(req, res)
      break;
  }
}

const createPayment = async (req, res) => {
try {
    const paymentIntent = await stripe.paymentIntents.create({
      currency: 'EUR',
      amount: 1999,
      automatic_payment_methods: { enabled: true }
    });

    // Send publishable key and PaymentIntent details to client
    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (e) {
    return res.status(400).send({
      error: {
        message: e.message,
      },
    });
  }
};