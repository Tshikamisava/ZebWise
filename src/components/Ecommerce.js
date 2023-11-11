import React from 'react';
import { PayPalButton } from 'react-paypal-button-v2';

function Ecommerce() {
  const paypalOptions = {
    clientId: 'YOUR_PAYPAL_CLIENT_ID',
    intent: 'capture', // or 'authorize'
    currency: 'USD',
  };

  const onSuccess = (details, data) => {
    console.log('Transaction completed by ' + details.payer.name.given_name);
    // Implement logic for a successful transaction (e.g., update order status, send confirmation email)
  };

  const onCancel = (data) => {
    console.log('Transaction was canceled by the user');
  };

  const onError = (err) => {
    console.error('There was an error processing the transaction', err);
  };

  return (
    <div>
      <h1>eCommerce</h1>
      <p>Your product description or other eCommerce content here.</p>
      <PayPalButton
        options={paypalOptions}
        onSuccess={onSuccess}
        onCancel={onCancel}
        onError={onError}
      />
    </div>
  );
}

export default Ecommerce;
