import './pages/Pages.css';
import React, { useState } from "react";
import LoginButton from "./components/LoginButton";
  
const App = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

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
            <LoginButton username={username} password={password} ></LoginButton>
            <p></p>
        </div>
    );

}
  
export default App;   

