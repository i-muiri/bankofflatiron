//import logo from './logo.svg';
import "./App.css";
import React, { useEffect, useState } from "react";
import Transactions from "./components/Transactions";
import NewTransactionForm from "./components/NewTransactionForm";
import SearchForm from "./components/SearchForm";

function App() {

  const [search, setSearch] = useState("");
  const [transactions, setTransactions] = useState([]);
  useEffect(() => {
    fetch("https://json-server-azure.vercel.app/transactions?q=" + search, {
      method: "GET",
      headers: {'X-Master-Key': '$2b$10$eJ73IDPh2ntsp49oJozVXuHHP6sfrJl3mefYn3XhQbYkvDeGVhETu',
                'X-Master-Host': 'api.jsonbin.io'},
  })
      .then((response) => response.json())
      .then((data) => setTransactions(data))
      .catch((err) => console.log(err));
  }, [search]);

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
    fetch("https://json-server-azure.vercel.app/transactions", serverOptions)
      .then((response) => response.json())
      .then((newItem) => console.log(newItem));
  }

  function handleSearch(e) {
      setSearch(e.target.value);
  }

  return (
    <div>
      <div>
        <h1> Bank of Flatiron</h1>
      </div>
      <SearchForm handleSearch={handleSearch} />
      <NewTransactionForm onSubmission={handleUpdate} />
      <Transactions transactions={transactions} />
    </div>
  );
}

export default App;
