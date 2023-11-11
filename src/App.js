import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SideNav from './components/Screens/SideNav';
import Verification from './components/Screens/Verification';

import Dashboard from './components/Screens/Dashboard';
import Home from './components/Screens/Home';
import Bookkeeper from './components/Screens/BookKeeper';
import CreateAccount from './components/Screens/CreateAccount';

function App() {
  const [content, setContent] = React.useState("Home Page");

  return (
    <Router>
      <div style={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
        <SideNav />
        <Routes style={{ flex: 1 }}>
          <Route path="/" element={<Home />} />
          <Route path="/create-account" element={<CreateAccount />} />
          <Route path="/verification" element={<Verification />} />
          {/* <Route path="/transaction-history" element={<TransactionHistory />} /> */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/bookkeeper" element={<Bookkeeper />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
