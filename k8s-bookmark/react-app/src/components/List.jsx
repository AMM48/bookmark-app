import React from "react";
import useUpdate from "./custom_hooks/useUpdate.jsx";
import useDelete from "./custom_hooks/useDelete.jsx";
import ListItem from "./ListItem.jsx";
import Popup from "./Popup.jsx";

function List({ fetchData, items, setItems }) {
  const [newItem, setNewItem] = React.useState({
    title: "",
    link: "",
  });
  const { showEditPopup, handleEdit, handleSave, handleCancel } = useUpdate(
    fetchData,
    newItem,
    setNewItem
  );
  const { handleDelete } = useDelete(items, setItems);

  const [searchName, setSearchName] = React.useState("");

  const handleSearch = (event) => {
    setSearchName(event.target.value);
  };

  const popupProps = {
    handleCancel,
    handleSave,
    newItem,
    setNewItem,
  };

  const listItemProps = {
    handleEdit,
    handleDelete,
    items,
    searchName,
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="list">
      <h2>Bookmark List</h2>
      <input
        type="search"
        placeholder="Enter Bookmark Name"
        onChange={handleSearch}
      />
      <ListItem {...listItemProps} />
      {showEditPopup && <Popup {...popupProps} />}
    </div>
  );
}

export default List;
