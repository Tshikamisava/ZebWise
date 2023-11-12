import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUniversity } from '@fortawesome/free-solid-svg-icons'; // Bank icon

function Ecommerce() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', height: '100vh', paddingLeft: '400px' }}>
      <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', textAlign: 'center', color: 'grey' }}>
        <Link to="/" style={{ textDecoration: 'none', color: 'black', display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
          <span style={{ fontSize: '24px', marginRight: '15px' }}>{'<'}</span>
          <span style={{ fontSize: '20px' }}>Back</span>
        </Link>

        {/* Your Ecommerce component content goes here */}
        <h2>Send Money</h2>

        {/* Card for Send to @username */}
        <div style={{ backgroundColor: 'grey', padding: '10px', borderRadius: '8px', margin: '20px 0', color: 'white' }}>
          <strong>Send to</strong> @username
          <p>Send to any payd username <span style={{ fontSize: '24px', marginLeft: '10px' }}>{'>'}</span></p>
        </div>

        {/* Card for Mobile Money */}
        <div style={{ backgroundColor: 'grey', padding: '10px', borderRadius: '8px', margin: '20px 0', color: 'white' }}>
          <strong>Mobile</strong> Money
          <p>Send to Mobile Account <span style={{ fontSize: '24px', marginLeft: '10px' }}>{'>'}</span></p>
        </div>

        {/* Card for Send to Bank Account */}
        <div style={{ backgroundColor: 'grey', padding: '10px', borderRadius: '8px', margin: '20px 0', color: 'white' }}>
          <strong>Send to</strong> Bank Account
          <p>Send Money to Bank Account <span style={{ fontSize: '24px', marginLeft: '10px' }}>{'>'}</span></p>
          <FontAwesomeIcon icon={faUniversity} size="2x" />
        </div>

        {/* Add more items as needed */}
        {/* ... */}
      </div>
    </div>
  );
}

export default Ecommerce;
