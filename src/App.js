import './App.css';
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
  );
}

export default App;