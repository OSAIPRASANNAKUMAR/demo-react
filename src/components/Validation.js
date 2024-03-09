import React, { useState } from "react";
import TableData from "./tableData";

function Validation() {
  
  const users = [
    {
      username: "Sai",
      password: "Sai123",
    },
    {
      username: "admin2",
      password: "123456",
    },
  ];

  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showTable, setShowTable] = useState(false);
  const [showForm, setShowForm] = useState(false); 

  
  const handleSubmit = (event) => {
    event.preventDefault();
    
    const user = users.find(
      (user) => user.username === username && user.password === password
    );
    if (user) 
    {      
      setError("");
      setShowTable(true);
    } 
    else 
    {      
      setError("Invalid username or password");
      setShowTable(false);
    }
  };

  
  const handleClick = () => {
    setShowForm(!showForm);
  };

  return (
    <div>
      
      <button onClick={handleClick}>View Table</button>

     
      {showForm && (
        <div>
          
          <form onSubmit={handleSubmit}>
            <div className="input-text">
              <input
                type="text"
                value={username}
                placeholder="UserName"
                required
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="input-text">
              <input
                type="password"
                value={password}
                placeholder="Password"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="error">{error && <span>{error}</span>}</div>
            <div className="buttons">
              <button type="submit">Login</button>
            </div>
          </form>

         
          {showTable && (
            <table className="data-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Id</th>
                  <th>Salary</th>
                  <th>Age</th>
                  <th>Update</th>
                </tr>
              </thead>
              <tbody>
                <TableData Name="Sai" Id="Gx21" Sal={700000} Age={21} />
                <TableData Name="Pavan" Id="Gx22" Sal={600000} Age={22} />
                <TableData Name="Naveen" Id="Gx23" Sal={700000} Age={22} />
                <TableData Name="Dhanush" Id="Gx23" Sal={800000} Age={20} />
              </tbody>
            </table>
          )}
        </div>
      )}
    </div>
  );
}

export default Validation;
