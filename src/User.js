import React from "react";
import "./App.css";

function User(){
    return (
      <div>
        <h1>Online Shopping</h1>
        <div>
          <ul className="menu-bar">
            <li><a href="#">Home</a></li>
            <li><a href="#">Category</a></li>
            <li><a href="#">Product List</a></li>
            <li><a href="#">Contact us</a></li>
          </ul>
        </div>
      </div>
    );
}

//EXPORT THE FUNCTION AS PER THE REACT REQUIREMENT

export default User;