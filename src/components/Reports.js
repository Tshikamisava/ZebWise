import React from 'react';
import { Line } from 'react-chartjs-2';
import { Card } from 'react-bootstrap';
import { Chart, CategoryScale, LinearScale, LineController, PointElement, LineElement } from 'chart.js/auto';

function Reports() {
    // Register the necessary scales and controller
    Chart.register(CategoryScale, LinearScale, LineController, PointElement, LineElement);

    const data = {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [
            {
                label: 'Transactions',
                data: [12, 19, 3, 5, 2],
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1,
            },
            {
                label: 'Total Expense',
                data: [8, 15, 7, 10, 5],
                fill: false,
                borderColor: 'rgb(255, 99, 132)',
                tension: 0.1,
            },
        ],
    };

    return (
        <div style={{ display: 'flex', marginTop: '40px' }}>
            <div style={{ marginRight: '50px' }}>
                <h2 style={{ color: '#fff' }}>Transaction Trends</h2>
                <Card style={{ width: 550, height: 300 }}>
                    <Line data={data} />
                </Card>
            </div>

            <Card style={{ width: 250, height: 300, marginTop: '40px', backgroundColor: 'green', textAlign: 'left' }}>
                <Card.Body>
                    <smaall style={{textAlign: 'left', color: '#fff'}}>Good Evening</smaall>
                    <h5 style={{ textAlign: 'left', color: '#fff', marginTop: '2px' }}>Elsa Khoza 
                    <span style={{margin: '10px', backgroundColor: '#0E2954', borderRadius: '5px', color: 'green'}}>ZebWise</span></h5>
                    
                    
                
                </Card.Body>
                <Card.Body style={{ marginBottom: '-150px', display: 'flex', }}>
                <p style={{ textAlign: 'left', color: '#fff', }}>Your balance is<br></br> R 12 000.00 <span style={{ margin: '30px'}}>@elsa3</span></p>
                
                </Card.Body> 
                
            </Card>
        </div>
    );
}

export default Reports;
