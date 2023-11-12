import React from 'react';
import { Card } from 'react-bootstrap';
import { Bar, Pie, Doughnut } from 'react-chartjs-2';

function BookeeperReport() {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Income',
        data: [12, 19, 3, 5, 2],
        fill: false,
        borderColor: 'rgb(255, 255, 255)', // White color for income
        tension: 0.1,
      },
      {
        label: 'Expense',
        data: [8, 15, 7, 10, 5],
        fill: false,
        borderColor: 'rgb(255, 255, 0)', // Yellow color for expense
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
    <div style={{ backgroundColor: '#0E2954', width: '100%', color: 'white', textAlign: 'center' , height:'1000px'}}>
      <h4>Transaction</h4>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Card style={{ backgroundColor: '#28a745', marginBottom: '20px', width: '60%' }}>
          <h3>Income and Expense</h3>
          <Bar data={data} />
        </Card>
        <div style={{ display: 'flex', justifyContent: 'space-around', width: '60%'}}>
          <Card style={{ width: '50%', }}>
            <h3>Expense Distribution</h3>
            <Pie data={pieData} />
          </Card>
          <Card style={{ width: '50%', marginLeft: '50px' }}>
            <h3>Profit and Loss</h3>
            <Doughnut data={doughnutData} />
          </Card>
        </div>
      </div>
    </div>
  );
}

export default BookeeperReport;
