//import logo from './logo.svg';
import "./App.css";
import React, { useEffect, useState } from "react";
import Transactions from "./components/Transactions";
import NewTransactionForm from "./components/NewTransactionForm";
import SearchForm from "./components/SearchForm";

function App() {
  const [transactions, setTransactions] = useState([]);
  useEffect(() => {
    fetch("https://github.com/i-muiri/bankjson/blob/master/Data/db.json")
      .then((response) => response.json())
      .then((data) => setTransactions(data));
  }, []);

  console.log(transactions);
  function handleUpdate(newTransaction) {
    console.log(newTransaction);
    setTransactions((currentTransaction) => [
      ...currentTransaction,
      newTransaction,
    ]);

    const serverOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTransaction),
    };
    fetch("http://localhost:3000/transactions", serverOptions)
      .then((response) => response.json())
      .then((newItem) => console.log(newItem));
  }

  function handleonSearch(search) {
    setTransactions((transactions) =>
      transactions.filter((transaction) =>
        transaction.description.includes(search)
      )
    );
  }

  return (
    <div>
      <div>
        <h1> Bank of Flatiron</h1>
      </div>
      <SearchForm onSearch={handleonSearch} />
      <NewTransactionForm onSubmission={handleUpdate} />
      <Transactions transactions={transactions} />
    </div>
  );
}

export default App;
