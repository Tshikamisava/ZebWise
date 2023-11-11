// 'App.js'
import './App.css';
import GeneratePayment from './components/screens/GeneratePayment';
import SignUp from './components/screens/SignUp';
// import Verification from './components/screens/Verification';
import TransactionHistory from './components/screens/TransactionHistory';
// import Dashboard from './components/screens/Dashboard';
// // import Home from './components/screens/Home';
// import BookKeeper from './components/screens/BookKeeper'; 
//import CreateAccount from './components/screens/CreateAccount'; 

import React from 'react';
<<<<<<< HEAD
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SideNav from './components/screens/SideNav.jsx';
import Verification from './components/Screens/Verification';
import TransactionHistory from './components/Screens/TransactionHistory';
import Dashboard from './components/screens/Dashboard';
import Home from './components/Screens/Home';
import Bookkeeper from './components/Screens/BookKeeper';
import CreateAccount from './components/Screens/CreateAccount';

function App() {
  return (
    <Router>
      
        <SideNav />
        <Routes style={{ flex: 1 }}>
          <Route path="/" element={<Home />} />
          <Route path="/create-account" element={<CreateAccount />} />
          <Route path="/verification" element={<Verification />} />
          <Route path="/transaction-history" element={<TransactionHistory />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/bookkeeper" element={<Bookkeeper />} />
        </Routes>
      
    </Router>
=======

function App() {
  const [content, setContent] = React.useState('Home Page');

  return (
    <div className="App">
      <TransactionHistory />
        {/* <GeneratePayment />  */}
      {/* <SignUp /> */}
      {/* <TransactionHistory /> */}
      {/* <Verification /> */}
      {/* <Dashboard /> */}
      {/* <Home /> */}
      {/* <BookKeeper /> */}
      {/* <CreateAccount /> */}
    </div>
>>>>>>> 32b7051fef27a276bb62b146c97d19afed89d555
  );
}

export default App;