import React from "react";
import logo from "./logo.svg";
import "./App.css";
import User from "./User";
function App() {
  const name = "Hello TestUser";
  const date = new Date();
  //name is variableName
  // Hello World is string "" or '' which stored inside the variable called name
  //you can not change the value
  //it was object so we converted into string toLocaleDateString inbuilt
  //xml JSX = JAVASCRIPT + xml
  // COMPONENT DIFFERENT FILE SO WHEN WE NEED TO CALL THE FUNCTION FROM THAT FILE
  //<User></User>
  return (
    <div className="App">
      <header className="App-header">
        {/* <p>Today's Date</p>
        <p>{date.toLocaleDateString()}</p> */}
        <User userName={name}></User>
      </header>
    </div>
  );
}

export default App;
