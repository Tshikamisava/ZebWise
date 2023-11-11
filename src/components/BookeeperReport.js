import React from 'react';
import { Bar, Pie, Doughnut } from 'react-chartjs-2';

function BookeeperReport() {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Income',
        data: [12, 19, 3, 5, 2],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
      {
        label: 'Expense',
        data: [8, 15, 7, 10, 5],
        fill: false,
        borderColor: 'rgb(255, 99, 132)',
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
    labels: ['Profit', 'Loss', 'Net Profit'],
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

  return (
    <div className='comp'>
      <h2>Financial Reports</h2>
      <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '20px' }}>
        <div style={{ width: '30%' }}>
          <h3>Income and Expense</h3>
          <Bar data={data} />
        </div>
        <div style={{ width: '30%' }}>
          <h3>Expense Distribution</h3>
          <Pie data={pieData} />
        </div>
        <div style={{ width: '30%' }}>
          <h3>Profit and Loss</h3>
          <Doughnut data={doughnutData} />
        </div>
      </div>
    </div>
  );
}

export default BookeeperReport;






