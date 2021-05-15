import React, { useState } from "react";
import List from "./List";
import value from "./../value.js";
function App() {
  var newArray = value;
  const [val1, setValue] = useState(value);
  var inputt = "";
  function handleChange(event) {
    inputt = event.target.value;
    //setValue(inputt)

    //console.log(inputt)
  }
  function handleClick(event) {
    //setValue(inputt);
    //console.log(useState.val1)
    newArray = [{ id: newArray.length + 1, val: inputt }, ...newArray];
    setValue(newArray);
    //console.log(newArray)
    //value.push({ id: value.length + 1, val: val1 });

    //  var li = document.getElementById('list').append('li')
    //   console.log(li)
  }

  function returnList(item) {
    console.log(item);
    return <li key={item.id}>{item.val}</li>;
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={handleChange} />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul id="list">{val1.map(returnList)}</ul>
      </div>
    </div>
  );
}

export default App;
