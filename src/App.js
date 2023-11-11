import './App.css';
<<<<<<< HEAD
import BookeeperReport from './components/BookeeperReport';
// import SalesSummary from './components/BookeeperReport';
// import SalesReport from './components/BookeeperReport';
// import GeneratePayment from './components/screens/GeneratePayment';
// import SignUp from './components/screens/SignUp';
// import Verification from './components/screens/Verification';
// import TransactionHistory from './components/screens/TransactionHistory';
// import Dashboard from './components/screens/Dashboard';
// // import Home from './components/screens/Home';
// import BookKeeper from './components/screens/BookKeeper'; 
//import CreateAccount from './components/screens/CreateAccount'; 

import React from 'react';

function App() {
  // const [content, setContent] = React.useState('Home Page');

  return (
    <div className="App">
     <BookeeperReport />
        {/* <GeneratePayment />  */}
      {/* <SignUp /> */}
      {/* <TransactionHistory /> */}
      {/* <Verification /> */}
      {/* <Dashboard /> */}
      {/* <Home /> */}
      {/* <BookKeeper /> */}
      {/* <CreateAccount /> */}
    </div>
=======
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SideNav from './components/Screens/SideNav';
import Verification from './components/Screens/Verification';
import TransactionHistory from './components/Screens/TransactionHistory';
import Dashboard from './components/Screens/Dashboard';
import Home from './components/Screens/Home';
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
          <Route path="/" element={<Home />} />
          <Route path="/create-account" element={<CreateAccount />} />
          <Route path="/verification" element={<Verification />} />
          <Route path="/transaction-history" element={<TransactionHistory />} />
          <Route path="/dashboard" element={<Reports />} />
          <Route path="/bookkeeper" element={<Bookkeeper />} />
          <Route path="/ecommerce" element={<Ecommerce />} />
          <Route path="/payments" element={<GeneratePayment/>} />
        </Routes>
      </div>
    </Router>
>>>>>>> 47802773a19ac15443827235481f33d41819747f
  );
}

export default App;
