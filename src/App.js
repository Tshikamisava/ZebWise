
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
import Verification from './components/screens/Verification';

function App() {
  const [content, setContent] = React.useState('Home Page');

  return (
    <div className="App">
      <Verification/>
      {/* <TransactionHistory /> */}
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