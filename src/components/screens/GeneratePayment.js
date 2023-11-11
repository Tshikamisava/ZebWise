import React, { useRef } from 'react';

function GeneratePayment() {
  // Style for the container div
  const containerStyle = {
    position: 'absolute',
    top: '10px',
    left: '10px',
    width: 'calc(100% - 20px)', // Make the container full width with padding
    height: 'calc(100% - 20px)', // Make the container full height with padding
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    border: '1px solid white', // Add border
    padding: '10px', // Add padding to the container
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
  };

  const inputStyle = {
    width: '500px',
    marginRight: '10px',
    borderRadius: '5px',
    border: '1px solid white', // Add border
    padding: '8px', // Adjust padding as needed
    height: '30px', // Set the height
  };

  const buttonStyle = {
    backgroundColor: 'green',
    color: 'white',
    border: 'none',
    padding: '5px',
    cursor: 'pointer',
  };

  // Ref to the input element
  const inputRef = useRef();

  // Function to copy the text from the input to the clipboard
  const copyToClipboard = () => {
    inputRef.current.select();
    document.execCommand('copy');
  };

  return (
    <div style={containerStyle}>
      <span style={textStyle}>Generate Payment Link</span>

      {/* Bottom text container */}
      <div style={bottomTextContainerStyle}>
        <p style={bottomTextStyle}>Here's your payment page</p>
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
  );
}

export default GeneratePayment;
