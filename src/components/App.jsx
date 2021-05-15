import React, { useState } from "react";
import List from "./List";
//import value from "./../value.js";
function App() {
  //var newArray = value;
  const [value, setValue] = useState("");
  const [items, setItem] = useState(["A item"]);
  var inputt = "";
  function handleChange(event) {
    inputt = event.target.value;
    setValue(inputt);

    //console.log(inputt)
  }
  function handleClick(event) {
    //setValue(inputt);
    //console.log(useState.val1)
    setItem((prevItem) => {
      return [...prevItem, value];
    });
    setValue("");
    //console.log(newArray)
    //value.push({ id: value.length + 1, val: val1 });

    //  var li = document.getElementById('list').append('li')
    //   console.log(li)
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={handleChange} value={value} />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul id="list">
          {" "}
          {items.map((item) => {
            return <li>{item}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
