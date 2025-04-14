import React, { useState} from 'react';
import ExpenseTable from './components/ExpenseTable';
import ExpenseForm from './components/ExpenseForm';
import SearchBar from './components/SearchBar';
import './App.css';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const addExpense = (newExpense) => {
    setExpenses([...expenses, { ...newExpense, id: Date.now() }]);};
  const filteredExpenses = expenses.filter(
    (expense) =>
      expense.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      expense.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app-container">
      <h1>Expense Tracker</h1>
      <p>Start taking control of your finances and life. Record,categorize and analyze your spending</p>
      <div className="columns">
        <div className="column-form">
          <ExpenseForm addExpense={addExpense} />
        </div>
        <div className="column-content">
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <ExpenseTable expenses={filteredExpenses} />
        </div>
      </div>
    </div>);}

export default App;