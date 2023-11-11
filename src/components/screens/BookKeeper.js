import React, { useState } from 'react';

const Bookkeeper = () => {
  const [transactions, setTransactions] = useState([]);
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  const addTransaction = () => {
    if (description.trim() !== '' && amount.trim() !== '') {
      const newTransaction = {
        id: Date.now(),
        description: description,
        amount: parseFloat(amount),
      };

      setTransactions([...transactions, newTransaction]);
      setDescription('');
      setAmount('');
    }
  };

  return (
    <div n style={{backgroundColor: '#0E2954',width:'100%',color:'white',justifyContent:'center', alignItems:'center'}}>
      <h2>Bookkeeper</h2>
      <div>
        <label>
          Description:
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <label>
          Amount:
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </label>
        <button onClick={addTransaction}>Add Transaction</button>
      </div>
      <div>
        <h3>Transactions</h3>
        <ul>
          {transactions.map((transaction) => (
            <li key={transaction.id}>
              {transaction.description} - R{transaction.amount.toFixed(2)}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Bookkeeper;
