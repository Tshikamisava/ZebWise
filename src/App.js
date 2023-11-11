import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SideNav from './components/Screens/SideNav';

const Home = () => <div>Home Page</div>;
const CreateAccount = () => <div>Create Account Content</div>;

function App() {
  return (
    <Router>
      
        
        <Routes>
          <Route path="/" element={<SideNav  />} />
          <Route path="/create-account" element={<CreateAccount />} />
         
        </Routes>
      
    </Router>
  );
}

export default App;
