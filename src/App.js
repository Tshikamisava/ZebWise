import './App.css';
import GeneratePayment from './components/screens/GeneratePayment';
// import Verification from './components/Screens/Verification';
import TransactionHistory from './components/screens/TransactionHistory';
import React from "react";  

function App() {
  const [content, setContent] = React.useState("Home Page");

  return (
    <div className="App">
      <GeneratePayment />
      {/* <TransactionHistory /> */}
      {/* <Verification />	 */}
      
    </div>
  );
}

export default App;
