import './App.css';
import GeneratePayment from './components/screens/GeneratePayment';
import SignUp from './components/screens/SignUp';
// import Verification from './components/Screens/Verification';
import TransactionHistory from './components/screens/TransactionHistory';

import React from "react";  

function App() {
  const [content, setContent] = React.useState("Home Page");

  return (
    <div className="App">
      <SignUp />
      <GeneratePayment />
      {/* <TransactionHistory /> */}
      {/* <Verification />	 */}
      
    </div>
  );
}

export default App;
