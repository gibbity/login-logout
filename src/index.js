import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Successful from "./pages/Successful";
import Unsuccessful from "./pages/Unsuccessful";
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate
} from 'react-router-dom';
import handleLogin from './App'


const Routing = () => {
  return (
    <Router>

        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="successful">Successful</Link>
            </li>
            <li>
              <Link to="unsuccessful">Unsuccessful</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" index element= {<App />} />
          <Route path="/successful" 
          element= {handleLogin===true? <Navigate to="/successful" />: <Successful />} />
          <Route path="/unsuccessful" 
          element= {handleLogin===false? <Navigate to="/unsuccessful" />: <Unsuccessful />} />

        </Routes>
    </Router>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
