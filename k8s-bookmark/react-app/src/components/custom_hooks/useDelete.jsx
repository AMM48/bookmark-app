function useDelete(items, setItems) {
  const handleDelete = async (itemToDelete) => {
    const requestOptions = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: itemToDelete.id,
      }),
      redirect: "follow",
    };

    try {
      const response = await fetch(
        "endpoint/delete.php",
        requestOptions
      );
      const res = await response.json();
      if (res.success) {
        setItems(items.filter((item) => item.id !== itemToDelete.id));
      } else {
        alert(res.message);
      }
    } catch (e) {
      alert("Oopsie Something Happened Who Knows What");
    }
  };

  return {
    handleDelete,
  };
}

export default useDelete;
