// let stripeKey = "pk_test_51MFGxxGsyHFe5lQADpu8EQF9BKy1N7wdpsmYQhwFGtv6ovbZ93uDWb6cTW92Dsr50q2p0zyjOI01O6VDYjthwf5K00zyktNRfo"

import {Elements, PaymentElement, useStripe, useElements, LinkAuthenticationElement} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import axios from "axios"
import { useEffect, useState } from 'react';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_live_51NuEF9BBuUCXkx9Pgx0WDJqL12fuWA4X5fkVu1HssRxDRm2GUIkFvUvCZEfvfu5dSAxM8SQdk5MbplnfrxY405MW00hw3HGvPn');

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: `${window.location.origin}/dashboard`,
      },
    });

    // This point will only be reached if there is an immediate error when
    // confirming the payment. Otherwise, your customer will be redirected to
    // your `return_url`. For some payment methods like iDEAL, your customer will
    // be redirected to an intermediate site first to authorize the payment, then
    // redirected to the `return_url`.
    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message);
    } else {
      setMessage("An unexpected error occured.");
    }

    setIsLoading(false);
  }

  return (
    <center>
    <form id="payment-form" onSubmit={handleSubmit} style={{width: '50%'}}>
      <LinkAuthenticationElement id="link-authentication-element"
        // Access the email value like so:
        // onChange={(event) => {
        //  setEmail(event.value.email);
        // }}
        //
        // Prefill the email field like so:
        // options={{defaultValues: {email: 'foo@bar.com'}}}
        />
      <PaymentElement id="payment-element" />
      <button disabled={isLoading || !stripe || !elements} id="submit">
        <span id="button-text">
          {isLoading ? <div className="spinner" id="spinner"></div> : "Pay now"}
        </span>
      </button>
      {/* Show any error or success messages */}
      {message && <div id="payment-message">{message}</div>}
    </form>
    </center>
  )
};

export default function index() {
  const [secret, setSecret] = useState('');
  
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get('/api/payment');
        console.log(res?.data);
        setSecret(res?.data?.clientSecret);
      } catch (error) {
        console.error(error);
      }
    }
    
    fetchData();
  }, []);
  
  const options = {
    // passing the client secret obtained from the server
    clientSecret: secret,
  };

  return (
    <>
    {secret && (
    <Elements stripe={stripePromise} options={options}>
      <CheckoutForm />
    </Elements>
    )}
    </>
  );
};