import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Card } from 'react-bootstrap';
import { Chart, CategoryScale, LinearScale, LineController, PointElement, LineElement } from 'chart.js/auto';
import { db } from '../components/screens/config/Firebase';
import { getDocs, collection } from 'firebase/firestore';

function getGreeting() {
    const currentHour = new Date().getHours();
    
    if (currentHour >= 5 && currentHour < 12) {
        return 'Good Morning';
    } else if (currentHour >= 12 && currentHour < 18) {
        return 'Good Afternoon';
    } else {
        return 'Good Evening';
    }
}

function Reports() {
    // Register the necessary scales and controller
    Chart.register(CategoryScale, LinearScale, LineController, PointElement, LineElement);

    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        async function fetchTransactions() {
            try {
                const querySnapshot = await getDocs(collection(db, "transactions"));
                const transactionsData = [];
                querySnapshot.forEach((doc) => {
                    transactionsData.push({
                        ...doc.data(),
                        id: doc.id,
                    });
                });
                setTransactions(transactionsData);
            } catch (error) {
                console.log("Error getting documents: ", error);
            }
        }

        fetchTransactions();
    }, []);

    const data = {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [
            {
                label: 'Transactions',
                data: transactions.map(transaction => transaction.amount),
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1,
            },
        ],
    };

    const greeting = getGreeting();

    // Calculate total balance
    const totalIncome = transactions
        .filter(transaction => transaction.category === 'income')
        .reduce((acc, transaction) => acc + parseFloat(transaction.amount), 0);

    const totalExpense = transactions
        .filter(transaction => transaction.category === 'expense')
        .reduce((acc, transaction) => acc + parseFloat(transaction.amount), 0);

    const totalBalance = totalIncome - totalExpense;

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <div style={{ marginRight: '50px' }}>
                <div style={{marginLeft: '100px'}}>
                <h2 style={{ color: '#fff' }}>Transaction Trends</h2>
                <Card style={{ width: 550, height: 300,}}>
                    <Line data={data} />
                </Card>
                </div>
            </div>

            <Card style={{ width: 250, height: 300, marginTop: '40px', backgroundColor: 'green', textAlign: 'left' }}>
                <Card.Body>
                    <small style={{ textAlign: 'left', color: '#fff' }}>{greeting}</small>
                    <h5 style={{ textAlign: 'left', color: '#fff', marginTop: '2px' }}>Elsa Khoza
                        <span style={{ margin: '10px', backgroundColor: '#0E2954', borderRadius: '5px', color: 'green' }}>ZebWise</span>
                    </h5>
                </Card.Body>
                <Card.Body style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                    <p style={{ textAlign: 'left', color: '#fff' }}>Your balance is<br></br> R {totalBalance.toFixed(2)} <span style={{ margin: '30px' }}>@elsa3</span></p>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Reports;
