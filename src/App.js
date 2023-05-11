import logo from "./logo.svg";
import "./App.css";

function App() {
  const name = "Hello World";
  const date = new Date();
  //name is variableName
  // Hello World is string "" or '' which stored inside the variable called name
  //you can not change the value
  return (
    <div className="App">
      <header className="App-header">
        <p className="text-color">{name}</p>
        {/* {curly braces} */}
        <p>Today's Date</p>
        <p>{date}</p>
      </header>
    </div>
  );
}

export default App;
