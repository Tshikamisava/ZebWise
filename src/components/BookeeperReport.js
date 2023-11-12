import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { Bar, Pie, Doughnut } from 'react-chartjs-2';
import { db } from '../components/Screens/config/Firebase';
import { getDocs, collection } from 'firebase/firestore';

function BookeeperReport() {
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

  // Calculate total balance
  const totalIncome = transactions
    .filter(transaction => transaction.category === 'income')
    .reduce((acc, transaction) => acc + parseFloat(transaction.amount), 0);

  const totalExpense = transactions
    .filter(transaction => transaction.category === 'expense')
    .reduce((acc, transaction) => acc + parseFloat(transaction.amount), 0);

  const totalBalance = totalIncome - totalExpense;

  const data = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Income',
        data: [12, 19, 3, 5, 2],
        fill: false,
        backgroundColor: 'rgb(255, 255, 255)',
        borderColor: 'rgb(255, 255, 255)',
        tension: 0.1,
      },
      {
        label: 'Expense',
        data: [8, 15, 7, 10, 5],
        fill: false,
        backgroundColor: 'rgba(250, 20, 63, 0.99)',
        borderColor: 'rgb(255, 255, 0)',
        tension: 0.1,
      },
    ],
  };

  const pieData = {
    labels: ['Rent', 'Utilities', 'Supplies'],
    datasets: [
      {
        data: [30, 20, 50],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const doughnutData = {
    labels: ['Profit', 'Loss',],
    datasets: [
      {
        data: [6000, 2000],
        backgroundColor: [
          'rgba(75, 192, 192, 0.2)',
          'rgba(255, 99, 132, 0.2)',
        ],
        borderColor: [
          'rgba(75, 192, 192, 1)',
          'rgba(255, 99, 132, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
      tooltip: {
        mode: 'index',
        intersect: false,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Month',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Amount',
        },
      },
    },
  };

  return (
    <div style={{ backgroundColor: '#0E2954', width: '100%', color: 'white', display: 'flex', flexDirection: 'column', minHeight: '100vh', overflowY: 'auto', marginLeft:'200px' }}>
      <h4>Transactions</h4>
      <div style={{ display: 'flex', justifyContent: 'space-between', flex: 1 }}>
        <div style={{ flex: 2 }}>
          <Card style={{ backgroundColor: '#28a745', marginBottom: '20px', width: '100%' }}>
            <h3>Income and Expense</h3>
            <Bar data={data} options={options} />
          </Card>
          <div style={{ display: 'flex', justifyContent: 'space-around', width: '100%' }}>
            <Card style={{ width: '50%' }}>
              <h3>Expense Distribution</h3>
              <Pie data={pieData} />
            </Card>
            <Card style={{ width: '50%', marginLeft: '20px' }}>
              <h3>Profit and Loss</h3>
              <Doughnut data={doughnutData} />
            </Card>
          </div>
        </div>
        <div style={{ flex: 1, textAlign: 'left', padding: '20px' }}>
          <h3>Summary</h3>
          <p>Total Income: {totalIncome.toFixed(2)}</p>
          <p>Total Expense: {totalExpense.toFixed(2)}</p>
          <p>Net Profit: {totalBalance.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
}

export default BookeeperReport;
