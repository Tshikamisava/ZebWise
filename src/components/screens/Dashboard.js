import React, { useState } from 'react';
import ClickableCards from '../Cards';
import Reports from '../Reports';

function Dashboard() {
  
  return (
    <div className="container">
        <h2 style={{ color: '#fff' }}>Dashboard</h2>
        <ClickableCards />
        <Reports />

      
      
    </div>
  );
}

export default Dashboard;
