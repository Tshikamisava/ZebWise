import React from 'react';
import { BrowserRouter as Router, Routes, Route,Outlet } from 'react-router-dom';
import SideNav from './components/Screens/SideNav';
import Verification from './components/Screens/Verification';
import TransactionHistory from './components/Screens/TransactionHistory';
import Dashboard from './components/Screens/Dashboard';

const Home = () => <div>Home Page</div>;
const CreateAccount = () => <div>Create Account Content</div>;

function App() {
  const [content, setContent] = React.useState("Home Page");

  return (
    <Router>
    <SideNav setContent={setContent} />
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create-account" element={<CreateAccount />} />
      <Route path="/verification" element={<Verification />} />
      <Route path="/transaction-history" element={<TransactionHistory />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  </Router>
  );
}

export default App;
