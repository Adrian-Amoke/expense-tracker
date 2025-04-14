import React, { useState } from 'react';

function ExpenseForm({ addExpense }) {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !amount) return;
    
    addExpense({
      name: name.trim(),
      amount: parseFloat(amount).toFixed(2),
      description: description.trim() || 'N/A',
      category: category.trim() || 'Uncategorized',
      date: date || ''
    });

    setName('');
    setAmount('');
    setDescription('');
    setCategory('');
    setDate('');
  };

  return (
    <form onSubmit={handleSubmit} className="expense-form">
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
      <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Amount" step="0.01" min="0.01" required />
      <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
      <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Category" />
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} placeholder="Date" />
      <button type="submit">Add Expense</button>
    </form>
  );
}

export default ExpenseForm;
