import React from "react";
import "./App.css";

function User(props) {
  //props are the parameters which is used to share the data from one comp to another
  return (
    <div>
      <h1>Online Shopping</h1>
      <div>
        <ul className="menu-bar">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Category</a>
          </li>
          <li>
            <a href="#">Product List</a>
          </li>
          <li>
            <a href="#">Contact us</a>
          </li>
          <li>{props.userName}</li>
        </ul>
      </div>
    </div>
  );
}

//EXPORT THE FUNCTION AS PER THE REACT REQUIREMENT

export default User;
