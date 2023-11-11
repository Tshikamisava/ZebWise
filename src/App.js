import './App.css';
import Verification from './components/Screens/Verification';
import TransactionHistory from './components/Screens/TransactionHistory';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Verification />} />
          <Route path="/transaction-history" element={<TransactionHistory />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
