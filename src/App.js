import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SideNav from './components/Screens/SideNav';
import Verification from './components/Screens/Verification';
import TransactionHistory from './components/Screens/TransactionHistory';
import BookeeperReport from './components/BookeeperReport';

import Bookkeeper from './components/Screens/BookKeeper';
import CreateAccount from './components/Screens/CreateAccount';
import Reports from './components/Reports';
import Ecommerce from './components/Ecommerce';
import GeneratePayment from './components/Screens/GeneratePayment';



function App() {
  
  
  return (
    <Router>
      <div style={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
        <SideNav />
        <Routes style={{ flex: 1 }}>

          <Route path="/" element={<CreateAccount />} />
          <Route path="/verification" element={<Verification />} />
          <Route path="/transaction-history" element={<TransactionHistory />} />
          <Route path="/dashboard" element={<Reports />} />
          <Route path="/bookkeeper" element={<BookeeperReport/>} />
          <Route path="/ecommerce" element={<Ecommerce />} />
          <Route path="/payments" element={<GeneratePayment/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
