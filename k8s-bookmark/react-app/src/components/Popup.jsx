import React from "react";
function Popup({ newItem, setNewItem, handleSave, handleCancel }) {
  return (
    <div className="edit-popup">
      <h3>Edit Bookmark</h3>
      <input
        type="text"
        placeholder="Name"
        value={newItem.title}
        onChange={(e) => setNewItem({ ...newItem, title: e.target.value })}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSave();
          }
        }}
      />
      <input
        id="url-input"
        type="text"
        placeholder="Url"
        value={newItem.link}
        onChange={(e) => setNewItem({ ...newItem, link: e.target.value })}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSave();
          }
        }}
      />
      <button className="popBtn" id="saveBtn" onClick={handleSave}>
        Save
      </button>
      <button className="popBtn" id="cancelBtn" onClick={handleCancel}>
        Cancel
      </button>
    </div>
  );
}

export default Popup;
