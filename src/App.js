import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SideNav from './components/screens/SideNav';
import Verification from './components/screens/Verification';
import TransactionHistory from './components/screens/TransactionHistory';
import Dashboard from './components/screens/Dashboard';
import Home from './components/screens/Home';
import Bookkeeper from './components/screens/BookKeeper';
import CreateAccount from './components/screens/CreateAccount';
import GeneratePayment from './components/screens/GeneratePayment';
import './App.css';


function App() {
 
 
  return (
    <Router>
      <div style={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
        <SideNav />
        <Routes style={{ flex: 1 }}>
          <Route path="/" element={<Home />} />
          <Route path="/create-account" element={<CreateAccount />} />
          <Route path="/verification" element={<Verification />} />
          <Route path='General Ledger' element={<GeneratePayment/>}/>
          <Route path="/transaction-history" element={<TransactionHistory />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/bookkeeper" element={<Bookkeeper />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;