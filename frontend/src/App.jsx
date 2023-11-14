import { useState } from "react";
import axios from "axios";
function App() {
  const [data, setData] = useState("");
  function handleClick(event) {
    event.preventDefault();
    axios
      .get("/Data")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }
  return (
    <>
      <button onClick={handleClick}>GET Request</button>
      <h1>{data}</h1>
    </>
  );
}

export default App;
