import React from "react";

function useFetch() {
  const [items, setItems] = React.useState([]);
  const fetchData = async () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    try {
      const response = await fetch(
        "endpoint/readAll.php",
        requestOptions
      );

      const res = await response.json();
      setItems(res.data);
    } catch (e) {}
  };
  return {
    items,
    setItems,
    fetchData,
  };
}

export default useFetch;
