import React from "react";

function useAdd(fetchData) {
  const [name, setName] = React.useState("");
  const [url, setUrl] = React.useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleUrlChange = (event) => {
    setUrl(event.target.value);
  };

  const handleSubmit = async (event) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({
      title: name,
      link: url,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    try {
      const response = await fetch(
        "endpoint/create.php",
        requestOptions
      );
      const res = await response.json();
      if (res.success) {
        setName("");
        setUrl("");
        fetchData();
      }
    } catch (e) {
      alert("Oopsie Somehthing Happened Who Knows What");
    }
  };
  return {
    handleNameChange,
    handleUrlChange,
    handleSubmit,
    name,
    url,
  };
}

export default useAdd;
