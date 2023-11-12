import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUniversity, faDollarSign } from '@fortawesome/free-solid-svg-icons'; // Bank icon

function Ecommerce() {
  // State to manage modal visibility
  const [isModalOpen, setModalOpen] = useState(false);

  // State to store current modal content
  const [modalContent, setModalContent] = useState({
    title: '',
    body: '',
  });

  // State for notification
  const [notification, setNotification] = useState(null);

  // Function to open the modal
  const openModal = (title, body) => {
    setModalContent({ title, body });
    setModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setModalOpen(false);
  };

  // Function to show notification
  const showNotification = (message) => {
    setNotification(message);
    // Clear notification after a delay (e.g., 3000 milliseconds or 3 seconds)
    setTimeout(() => {
      setNotification(null);
    }, 3000);
  };

  // Function to handle saving changes
  const handleSaveChanges = () => {
    // Add logic for saving changes here
    // For demonstration purposes, showing a notification
    showNotification('payment successful!');
    // You can replace the above line with actual logic to save changes
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', height: '100vh', paddingLeft: '400px' }}>
      <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', textAlign: 'center', color: 'grey' }}>
        <Link to="/" style={{ textDecoration: 'none', color: 'black', display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
          <span style={{ fontSize: '24px', marginRight: '15px' }}>{'<'}</span>
          <span style={{ fontSize: '20px' }}>Back</span>
        </Link>

        {/* Your Ecommerce component content goes here */}
        <h2>Pay Bill</h2>

        {/* Card for Send to @username with Dollar Sign icon */}
        <div
          style={{ position: 'relative', backgroundColor: 'grey', padding: '10px', borderRadius: '8px', margin: '20px 0', cursor: 'pointer' }}
          onClick={() => openModal('Pay Rent', 'Monthly Rent Payment')}
        >
          <div style={{ position: 'absolute', top: 10, left: 10, color: 'white', fontSize: '18px', fontWeight: 'bold' }}>
            Pay Rent
          </div>
          <strong>Pay Rent</strong>
          <p>Monthly Rent Payment <span style={{ fontSize: '24px', marginLeft: '10px' }}>{'>'}</span></p>
          {/* Dollar sign in the first card */}
          <FontAwesomeIcon icon={faDollarSign} size="2x" style={{ marginRight: '5px' }} />
        </div>

        {/* Card for Mobile Money */}
        <div
          style={{ position: 'relative', backgroundColor: 'grey', padding: '10px', borderRadius: '8px', margin: '20px 0', cursor: 'pointer' }}
          onClick={() => openModal('Buy Electricity', 'For Prepaid Token')}
        >
          <div style={{ position: 'absolute', top: 10, left: 10, color: 'white', fontSize: '18px', fontWeight: 'bold' }}>
            Buy Electricity
          </div>
          <strong>Pay Rent</strong>
          <p>For Prepaid Token <span style={{ fontSize: '24px', marginLeft: '10px' }}>{'>'}</span></p>
          {/* Another bank icon in the second card */}
          <FontAwesomeIcon icon={faUniversity} size="2x" />
        </div>

        {/* Card for Send to Bank Account */}
        <div
          style={{ position: 'relative', backgroundColor: 'grey', padding: '10px', borderRadius: '8px', margin: '20px 0', cursor: 'pointer' }}
          onClick={() => openModal('Pay Utilities', 'Cover all Entertainment')}
        >
          <div style={{ position: 'absolute', top: 10, left: 10, color: 'white', fontSize: '18px', fontWeight: 'bold' }}>
            Pay Utilities
          </div>
          <strong>Pay Utilities</strong>
          <p>Cover all Entertainment <span style={{ fontSize: '24px', marginLeft: '10px' }}>{'>'}</span></p>
          <FontAwesomeIcon icon={faUniversity} size="2x" />
        </div>

        {/* Add more items as needed */}
        {/* ... */}

        {/* Modal */}
        <div className={`modal ${isModalOpen ? 'show' : ''}`} tabIndex="-1" role="dialog" style={{ display: isModalOpen ? 'block' : 'none' }}>
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{modalContent.title}</h5>
                <button type="button" className="close" onClick={closeModal} aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                {modalContent.title === 'Buy Electricity' && (
                  <div>
                    <p>Eskom Token Information:</p>
                    <label htmlFor="tokenPrice">Token Price:</label>
                    <input type="text" id="tokenPrice" placeholder="Enter Token Price" />
                    <label htmlFor="validUntil">Valid Until:</label>
                    <input type="text" id="validUntil" placeholder="Enter Valid Until" />
                    {/* Add more information as needed */}
                  </div>
                )}
                {modalContent.title === 'Pay Rent' && (
                  <div>
                    <p>Pay Rent Information:</p>
                    <label htmlFor="rentPrice">Price:</label>
                    <input type="text" id="rentPrice" placeholder="Enter Rent Price" /><br/>
                    <label htmlFor="roomNumber">Office Number:</label>
                    <input type="text" id="roomNumber" placeholder="Enter Office Number" />
                    {/* Add more information as needed */}
                  </div>
                )}
                {modalContent.title === 'Pay Utilities' && (
                  <div>
                    <p>Utilities Information:</p>
                    <label htmlFor="utilityPrice">Price:</label>
                    <input type="text" id="utilityPrice" placeholder="Enter Utility Price" />
                    <label htmlFor="additionalDetails">Additional Details:</label>
                    <input type="text" id="additionalDetails" placeholder="Enter Additional Details" />
                    {/* Add more information as needed */}
                  </div>
                )}
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary" onClick={() => { handleSaveChanges(); closeModal(); }}>
                  Proccess Payment
                </button>
                <button type="button" className="btn btn-secondary" onClick={closeModal}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* End Modal */}

        {/* Notification */}
        {notification && (
          <div style={{ position: 'fixed', bottom: 20, right: 20, backgroundColor: 'green', color: 'white', padding: '10px', borderRadius: '8px' }}>
            {notification}
          </div>
        )}
      </div>
    </div>
  );
}

export default Ecommerce;
