import "./App.css";
import List from "./components/List.jsx";
import Form from "./components/Form.jsx";
import useFetch from "./components/custom_hooks/useFetch.jsx";
import React from "react";
function App() {
  const { items, setItems, fetchData } = useFetch();
  return (
    <>
      <div className="container">
        <h1>Bookmarking App</h1>
        <List fetchData={fetchData} items={items} setItems={setItems} />
        <Form fetchData={fetchData} />
      </div>
    </>
  );
}

export default App;
