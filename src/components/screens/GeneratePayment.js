import React, { useRef , useState} from 'react';
import PaystackPop from '@paystack/inline-js';
import { db } from './config/Firebase';
import {  addDoc,collection, serverTimestamp } from 'firebase/firestore';

function GeneratePayment() {
  const [email, setEmail] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory]  = useState('');
  
  const [references, setReferences] = useState('');


  const handleConfirm = async () => {
    const transactionRef = collection(db, 'transactions');
    const payload = {
      email,
      amount,
      category: 'expense',
      references,
      timestamp: serverTimestamp(),
    };

    try {
        const docRef = await addDoc(transactionRef, payload);
        setAmount('')
        setEmail('')
        setReferences('')
    } catch (e) {
        console.error('Error adding document: ', e);
    }

  }

  const paywithpaysatck = (e) => {
    e.preventDefault();

    const paystack = new PaystackPop();

    paystack.newTransaction({
      key: "pk_test_1614fb1b435881450bf82e4c90488b8143bed936",
      email: email,
      amount: amount * 100,
      references: references,
      

      onSuccess(transaction) {

        let message = `Payment Complete! Reference ${transaction.reference}`;
        handleConfirm();
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
  // Style for the container div
  const containerStyle = {
    position: 'absolute',
    top: '50px',
    left: '380px',
    width: 'calc(60% - 20px)', // Make the container full width with padding
    height: 'calc(60% - 20px)', // Make the container full height with padding
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    border: '1px solid white', // Add border
    padding: '10px', 
    // Add padding to the container
  };

  // Style for the text
  const textStyle = {
    color: 'white',
    fontSize: '18px',
    
  };

  // Style for the bottom text container
  const bottomTextContainerStyle = {
    position: 'absolute',
    bottom: '10px',
  };

  // Style for the bottom text
  const bottomTextStyle = {
    color: 'white',
    fontSize: '18px',
  };

  // Style for the additional h6 text
  const h6Style = {
    color: 'white',
    fontSize: '14px', // Adjust the font size if needed
  };

  // Style for the input and copy button
  const inputContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    marginTop: '10px',
  };

  const inputStyle = {
    width: '500px',
    marginRight: '10px',
    borderRadius: '5px',
    border: '1px solid white', // Add border
    padding: '20px', // Adjust padding as needed
    height: '30px', // Set the height
  };

  const buttonStyle = {
    backgroundColor: 'green',
    color: 'white',
    border: 'none',
    padding: '5px',
    cursor: 'pointer',
    marginTop: '10px',
  };

  // Ref to the input element
  const inputRef = useRef();

  // Function to copy the text from the input to the clipboard
  const copyToClipboard = () => {
    inputRef.current.select();
    document.execCommand('copy');
  };

  return (
    <div style={{ marginRight: '50px'}}>
      <span style={textStyle}>Here's your payment page</span>
    <div style={containerStyle}>
       
      <form onSubmit={paywithpaysatck}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br /><br/>
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <br /><br/>
        <input
          type="references"
          placeholder="References"
          value={references}
          onChange={(e) => setReferences(e.target.value)}
        />
        <br/><br/>  
        <button type="submit">Pay with Paystack</button>
      </form>
      


      {/* Bottom text container */}
      <div style={bottomTextContainerStyle}>
        <p style={bottomTextStyle}>Generate Payment Link</p>
        <h6 style={h6Style}>
          Copy the link below and share it with your customers to get paid
        </h6>

        {/* Input and copy button */}
        <div style={inputContainerStyle}>
          <input
            ref={inputRef}
            type="text"
            value="https://web.mypayd.app/elsa3"
            style={inputStyle}
            readOnly
          />
          <button style={buttonStyle} onClick={copyToClipboard}>
            Copy
          </button>
        </div>
      </div>
    </div>
    </div>
  );
}

export default GeneratePayment;
