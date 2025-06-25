import React, { useState } from "react";

const CashFlow = () => {
  const [transactions, setTransactions] = useState([
    { id: 1, date: "2025-05-01", description: "Product Sale - Shampoo", amount: 120, type: "income" },
    { id: 2, date: "2025-05-03", description: "Delivery Fee", amount: -30, type: "expense" },
    { id: 3, date: "2025-05-06", description: "Product Sale - Lotion", amount: 200, type: "income" },
  ]);

  const [formData, setFormData] = useState({
    date: "",
    description: "",
    amount: "",
    type: "income",
  });

  const totalIncome = transactions.filter(t => t.type === "income").reduce((acc, t) => acc + t.amount, 0);
  const totalExpense = transactions.filter(t => t.type === "expense").reduce((acc, t) => acc + Math.abs(t.amount), 0);
  const netBalance = totalIncome - totalExpense;

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleAddTransaction = () => {
    const newTransaction = {
      id: Date.now(),
      date: formData.date,
      description: formData.description,
      amount: formData.type === "income" ? parseFloat(formData.amount) : -Math.abs(parseFloat(formData.amount)),
      type: formData.type,
    };
    setTransactions(prev => [newTransaction, ...prev]);
    setFormData({ date: "", description: "", amount: "", type: "income" });
  };

  const handleDelete = id => {
    setTransactions(prev => prev.filter(t => t.id !== id));
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Cash Flow Management</h2>

      {/* Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-green-100 text-green-800 p-4 rounded shadow">
          <h3 className="text-lg font-bold">Total Income</h3>
          <p className="text-xl">GHS {totalIncome}</p>
        </div>
        <div className="bg-red-100 text-red-800 p-4 rounded shadow">
          <h3 className="text-lg font-bold">Total Expenses</h3>
          <p className="text-xl">GHS {totalExpense}</p>
        </div>
        <div className="bg-blue-100 text-blue-800 p-4 rounded shadow">
          <h3 className="text-lg font-bold">Net Balance</h3>
          <p className="text-xl">GHS {netBalance}</p>
        </div>
      </div>

      {/* Add Transaction Form */}
      <div className="bg-white rounded shadow p-4 mb-6">
        <h3 className="font-bold text-lg mb-3">Add Transaction</h3>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
          <input type="date" name="date" value={formData.date} onChange={handleChange} className="border p-2 rounded" />
          <input type="text" name="description" placeholder="Description" value={formData.description} onChange={handleChange} className="border p-2 rounded" />
          <input type="number" name="amount" placeholder="Amount" value={formData.amount} onChange={handleChange} className="border p-2 rounded" />
          <select name="type" value={formData.type} onChange={handleChange} className="border p-2 rounded">
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
          <button onClick={handleAddTransaction} className="bg-green-600 text-white rounded px-4 py-2 hover:bg-green-700">
            Add
          </button>
        </div>
      </div>

      {/* Transaction List */}
      <div className="overflow-x-auto bg-white rounded shadow">
        <table className="w-full text-sm text-left text-gray-600">
          <thead className="text-xs uppercase bg-gray-100 text-gray-700">
            <tr>
              <th className="px-6 py-4">Date</th>
              <th className="px-6 py-4">Description</th>
              <th className="px-6 py-4">Amount</th>
              <th className="px-6 py-4">Type</th>
              <th className="px-6 py-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map(t => (
              <tr key={t.id} className="border-b hover:bg-gray-50">
                <td className="px-6 py-3">{t.date}</td>
                <td className="px-6 py-3">{t.description}</td>
                <td className={`px-6 py-3 font-medium ${t.type === "income" ? "text-green-600" : "text-red-600"}`}>
                  GHS {Math.abs(t.amount)}
                </td>
                <td className="px-6 py-3 capitalize">{t.type}</td>
                <td className="px-6 py-3">
                  <button onClick={() => handleDelete(t.id)} className="text-red-600 hover:underline text-sm">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {transactions.length === 0 && (
              <tr>
                <td colSpan="5" className="px-6 py-4 text-center text-gray-500">No transactions recorded yet.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CashFlow;
