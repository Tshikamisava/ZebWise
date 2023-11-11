import './App.css';
// import Verification from './components/Screens/Verification';
import TransactionHistory from './components/screens/TransactionHistory';

function App() {
  const [content, setContent] = React.useState("Home Page");

  return (
    <div className="App">
      <TransactionHistory />
      {/* <Verification />	 */}
      
    </div>
  );
}

export default App;
