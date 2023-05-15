import './App.css';
import React, { useState } from "react";
import Successful from "./pages/Successful";
import Unsuccessful from "./pages/Unsuccessful";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate
} from 'react-router-dom';
  
const App = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    let verified = false;
  
    return (
        <div>
            <h1>Login</h1>
            <label>Username: 
              <input
                type="text" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </label>
            <p></p>
            <label>Password: 
              <input
                type="text" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <p></p>
            <button type="button" onClick={handleLogin}>Login</button>
        </div>
    );

    function handleLogin() {
      const correctUsername = "user123";
      const correctPassword = "pass456";
      if ((username == correctUsername) & (password == correctPassword)) {
        verified = true;}
      console.log(verified);
      ///<Route path="/successful" 
      ///element= {verified===true? <Navigate to="/successful" />: <Successful />} />;
      return verified;



  }
};
  
export default App;
