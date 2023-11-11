<<<<<<< HEAD
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SideNav from './components/screens/SideNav';

const Home = () => <div>Home Page</div>;
const CreateAccount = () => <div>Create Account Content</div>;

function App() {
  return (
    <Router>
      <div>
        <SideNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-account" element={<CreateAccount />} />
          {/* Add other routes */}
        </Routes>
      </div>
    </Router>
=======
import './App.css';
import Verification from './components/Screens/Verification';

function App() {
  return (
    <div className="App">
      <Verification />	
      
    </div>
>>>>>>> 9faeaa879183a7305dbf876ecfb4b66dafa6622a
  );
}

export default App;
