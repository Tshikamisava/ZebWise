import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SideNav from './components/Screens/SideNav';
import Verification from './components/Screens/Verification';
import TransactionHistory from './components/Screens/TransactionHistory';
import CreateAccount from './components/Screens/CreateAccount';
import Reports from './components/Reports';
import Ecommerce from './components/Ecommerce';
import GeneratePayment from './components/Screens/GeneratePayment';
import BookeeperReport from './components/BookeeperReport';



function App() {
 
  return (
    <Router>
      <div style={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
        <SideNav />
        <Routes style={{ flex: 1 }}>
        <Route path="/ecommerce" element={<Ecommerce />} />
           <Route path="/" element={<CreateAccount />} />
          <Route path="/verification" element={<Verification />} />
          <Route path='General Ledger' element={<GeneratePayment/>}/>
          <Route path="/transaction-history" element={<TransactionHistory />} />
          <Route path="/dashboard" element={<Reports />} />
          <Route path="/bookkeeper" element={<BookeeperReport/>} /> 
          
          <Route path="/payments" element={<GeneratePayment/>} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;