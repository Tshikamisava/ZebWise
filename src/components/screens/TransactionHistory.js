import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faDownload, faMobileAlt } from '@fortawesome/free-solid-svg-icons';

function TransactionHistory() {
  return (
    <div>
      <style>
        {`
          body {
            background-color: #0E2954;
            color: white;
            padding: 20px; /* Add padding for better visibility */
          }
          .custom-h6 {
            background-color: #9932cc;
            padding: 10px; 
            border-radius: 5px; /* Optional: Add rounded corners */
          }
          .custom-h6 a {
            margin-left: 280px; 
          }
          /* Styles for the container */
          .container {
            border: 1px solid #fff;
            padding: 20px;
            border-radius: 10px;
            margin-top: 20px;
          }
          /* Styles for the search bar section */
          .search-bar {
            display: flex;
            align-items: center;
            margin-top: 20px;
            margin-left: 20px;
            border: 1px solid #fff;
            padding: 10px;
            border-radius: 5px;
          }
          .search-input {
            width: 200px;
            margin-right: 10px;
            padding: 5px;
          }
          .search-icon {
            margin-right: 5px;
          }
          .download-button {
            cursor: pointer;
            margin-left: auto;
          }
          .download-icon {
            margin-right: 5px;
          }
          /* Styles for the recent transaction section */
          .recent-transaction {
            font-weight: bold;
            margin-top: 20px;
          }
          .date-button {
            background-color: #fff;
            color: #0E2954;
            border: 1px solid #0E2954;
            padding: 5px 10px;
            cursor: pointer;
            margin-right: 10px;
            margin-top: 10px;
          }
          /* Styles for the transaction details section */
          .transaction-details {
            margin-top: 30px;
          }
          .transaction-details h6 {
            margin-bottom: 5px;
            display: flex;
            align-items: center;
          }
          .mobile-icon {
            color: #28a745; /* Green color */
            margin-right: 5px;
          }
          /* Styles for the Previous Page and Next Page buttons */
          .navigation-buttons {
            display: flex;
            justify-content: flex-end;
            margin-top: 10px;
            margin-right: 90px
          }
          .navigation-button {
            background-color: #28a745; /* Green color */
            color: #fff;
            border: none;
            padding: 5px 10px;
            cursor: pointer;
            margin-left: 10px;
          }
        `}
      </style>
      <div className="container">
        <h2 className="mt-3 text-white"> View Transaction History</h2>
        <br></br>
        <h6 className="custom-h6">
          Mypayd 2023. Your account is unverified. To have full functionality, please proceed to verify.
          <a href="#activate-account">Activate Account</a>
        </h6>
        
        {/* Search bar section */}
        <div className="search-bar">
          <div className="search-input">
            <input type="text" placeholder="Search event" className="form-control" />
          </div>
          <span className="search-icon">
            <FontAwesomeIcon icon={faSearch} />
          </span>
          <button className="btn btn-primary download-button">
            <FontAwesomeIcon icon={faDownload} className="download-icon" />
            Download
          </button>
        </div>
        
        {/* Recent Transaction section */}
        <div className="recent-transaction">
          <text>Recent Transactions</text>
          {/* Date button */}
          <button className="date-button">Friday 11 November 23</button>
        </div>
        
        {/* Transaction details */}
        <div className="transaction-details">
          <h6>
            <FontAwesomeIcon icon={faMobileAlt} className="mobile-icon" />
            Topup on Nov 11th 23
          </h6>
          <h6>3:11 am</h6>
        </div>
      </div>
      
      {/* Navigation buttons */}
      <div className="navigation-buttons">
        <button className="navigation-button">Previous Page</button>
        <button className="navigation-button">Next Page</button>
      </div>
    </div>
  );
}

export default TransactionHistory;
