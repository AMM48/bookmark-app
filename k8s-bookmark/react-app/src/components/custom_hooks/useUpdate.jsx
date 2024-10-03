import React from "react";

function useUpdate(fetchData, newItem, setNewItem) {
  const [showEditPopup, setShowEditPopup] = React.useState(false);
  const handleEdit = (item) => {
    setNewItem(item);
    setShowEditPopup(true);
  };

  const handleSave = async () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      newTitle: newItem.title,
      newLink: newItem.link,
      id: newItem.id,
    });
    var requestOptions = {
      method: "PUT",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    try {
      const response = await fetch(
        "endpoint/update.php",
        requestOptions
      );
      const res = await response.json();
      if (res.success) {
        fetchData();
        setShowEditPopup(false);
      } else {
        alert(res.message);
      }
    } catch (e) {
      alert("Oopsie Something Happened Who Knows What");
    }
  };

  const handleCancel = () => {
    setShowEditPopup(false);
  };
  return {
    handleEdit,
    handleSave,
    handleCancel,
    showEditPopup,
  };
}

export default useUpdate;
