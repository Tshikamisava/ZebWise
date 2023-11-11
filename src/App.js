
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SideNav from './components/screens/SideNav';
import Verification from './components/screens/Verification';
import TransactionHistory from './components/screens/TransactionHistory';
import Home from './components/screens/Home';
import Bookkeeper from './components/screens/BookKeeper';
import CreateAccount from './components/screens/CreateAccount';
import Reports from './components/Reports';
import Ecommerce from './components/Ecommerce';
import GeneratePayment from './components/screens/GeneratePayment';
import BookeeperReport from './components/BookeeperReport';



function App() {
  
  
  return (
    <Router>
      <div style={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
        <SideNav />
        <Routes style={{ flex: 1 }}>
          <Route path="/" element={<Home />} />
          <Route path="/create-account" element={<CreateAccount />} />
          <Route path="/verification" element={<Verification />} />
          <Route path="/transaction-history" element={<TransactionHistory />} />
          <Route path="/dashboard" element={<Reports />} />
          <Route path="/bookkeeper" element={<BookeeperReport />} />
          <Route path="/ecommerce" element={<Ecommerce />} />
          <Route path="/payments" element={<GeneratePayment/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
