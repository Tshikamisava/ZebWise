import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faDownload, faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { db } from './config/Firebase';
import { getDocs, collection } from 'firebase/firestore';
import jsPDF from 'jspdf';
import 'jspdf-autotable';



function TransactionHistory() {
    const [transactions, setTransactions] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const transactionsPerPage = 4;


    useEffect(() => {
        getTransactions();
    }, []);

    // Function to download transactions as PDF
    const downloadAsPDF = () => {
        // Create a new jsPDF instance
        const pdf = new jsPDF();

        // Add content to the PDF
        pdf.text('Transaction History', 20, 20);

        const headers = ['ID', 'Email', 'Amount', 'References', 'Time'];
        const data = currentTransactions.map((transaction, index) => [
            index + indexOfFirstTransaction + 1,
            transaction.email,
            transaction.amount,
            transaction.references,
            transaction.timestamp ? new Date(transaction.timestamp.seconds * 1000).toLocaleString() : '',
        ]);

        pdf.autoTable({
            head: [headers],
            body: data,
            startY: 30,
        });

        // Save the PDF
        pdf.save('Transaction History.pdf');
    };

    const getTransactions = async () => {

        try {
            const querySnapshot = await getDocs(collection(db, "transactions"));
            const transactions = [];
            querySnapshot.forEach((doc) => {

                transactions.push({
                    ...doc.data(),
                    id: doc.id,
                });
            })

            // Sort transactions by date in descending order
            transactions.sort((a, b) => b.timestamp?.seconds - a.timestamp?.seconds);
            setTransactions(transactions);
        } catch (error) {
            console.log("Error getting documents: ", error);
        }

    };

    //the index range for the current page
    const indexOfLastTransaction = currentPage * transactionsPerPage;
    const indexOfFirstTransaction = indexOfLastTransaction - transactionsPerPage;
    const currentTransactions = transactions.slice(indexOfFirstTransaction, indexOfLastTransaction);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (

        <div >
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
            margin-left: -750px;  
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
                        <input
                            type="text"
                            placeholder="Search event"
                            className="form-control"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        /> 

                    </div>
                    <span className="search-icon">
                        <FontAwesomeIcon icon={faSearch} />
                    </span>
                    <button className="btn btn-primary download-button" onClick={downloadAsPDF}>
                        <FontAwesomeIcon icon={faDownload} className="download-icon" />
                        Download as PDF
                    </button>
                </div>

                {/* Recent Transaction section */}
                <div className="recent-transaction">
                    <text>Recent Transactions</text>
                    {/* Date button */}
                    <button className="date-button">Friday 11 November 23</button>
                </div>
                
                {/* Transaction details */}
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Email</th>
                            <th>Amount</th>
                            <th>References</th>
                            <th>Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentTransactions.map((transaction, index) => (
                            <tr key={transaction.id}>
                                <td>{index + indexOfFirstTransaction + 1}</td>
                                <td>{transaction.email}</td>
                                <td>{transaction.amount}</td>
                                <td>{transaction.references}</td>
                                <td>{transaction.timestamp ? new Date(transaction.timestamp.seconds * 1000).toLocaleString() : ''}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <div className="text-center text-white mt-3">
                    Page {currentPage} of {Math.ceil(transactions.length / transactionsPerPage)}
                </div>
                 {/* Navigation buttons */}
                 <div className="navigation-buttons">
                    <button
                        className="navigation-button"
                        onClick={() => paginate(currentPage > 1 ? currentPage - 1 : currentPage)}
                    >
                        Previous Page
                    </button>
                    <button
                        className="navigation-button"
                        onClick={() => paginate(currentPage < Math.ceil(transactions.length / transactionsPerPage) ? currentPage + 1 : currentPage)}
                    >
                        Next Page
                    </button>
                </div>

               



            </div>



        </div>

    );
}

export default TransactionHistory;
