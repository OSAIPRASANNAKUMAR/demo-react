import "./App.css";
import { Details } from "./components/Details";
import End from "./components/End";
import Welcome from "./components/Welcome";
import Wish from "./components/Wish";
import Validation from "./components/Validation"; 
import Login from "./components/Login";
function App() {
  const Id = "Gx21";
  const marks = 87;

  return (
    <div className="App">
      {/* <Welcome />

      <Wish name="Sai Prasanna Kumar" />

      <div className="Data">
        <h1>
          Name : <Details />
        </h1>
        <h1>Id : {Id}</h1>
        <h2>Percentage : {(marks * 100) / 100}%</h2>
      </div>

      <Validation /> 

      <End /> */}
      <Login/>
    </div>
  );
}

export default App;
