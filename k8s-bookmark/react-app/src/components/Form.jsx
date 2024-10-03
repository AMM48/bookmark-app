import React from "react";
import useAdd from "./custom_hooks/useAdd.jsx";

function Form({ fetchData }) {
  const { handleNameChange, handleSubmit, handleUrlChange, name, url } =
    useAdd(fetchData);

  return (
    <div className="form">
      <h2>Bookmark a Website</h2>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        value={name}
        name="name"
        onChange={handleNameChange}
        placeholder="Enter Website Name"
      />

      <label htmlFor="url">URL</label>
      <input
        type="text"
        id="URL"
        name="URL"
        value={url}
        placeholder="Enter Website URL"
        onChange={handleUrlChange}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSubmit();
          }
        }}
      />

      <button className="add" onClick={handleSubmit}>
        Add
      </button>
    </div>
  );
}

export default Form;
