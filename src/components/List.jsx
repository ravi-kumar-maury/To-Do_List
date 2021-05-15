import React from "react";

function List(item) {
  console.log(item.val);
  return <li>{item.val}</li>;
}

export default List;
