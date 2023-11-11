import React, { useState } from 'react';
import PaystackPop from '@paystack/inline-js';

function Home() {
  const [email, setEmail] = useState('');
  const [amount, setAmount] = useState('');

  const paywithpaysatck = (e) => {
    e.preventDefault();

    const paystack = new PaystackPop();

    paystack.newTransaction({
      key: "pk_test_1614fb1b435881450bf82e4c90488b8143bed936",
      email: email,
      amount: amount * 100,

      onSuccess(transaction) {
        let message = `Payment Complete! Reference ${transaction.reference}`;
        alert(message);
      },
      onError(error) {
        // Handle the error properly
        console.error('Payment Error:', error);
        alert('Payment Error. Please try again.');
      },
      oncancel() {
        alert('Payment Cancelled');
      }
    });
  }

  return (
    <div style={{ backgroundColor: '#0E2954', width: '100%', color: 'white' }}>
      Home
      <form onSubmit={paywithpaysatck}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <br />
        <button type="submit">Pay with Paystack</button>
      </form>
    </div>
  );
}

export default Home;
