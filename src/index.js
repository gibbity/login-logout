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
} from 'react-router-dom';


const Routing = (verified) => {
  return (
    <Router>
        <Routes>
          <Route path="/" index element= {<App />} />
          <Route path="/successful" element ={<Successful />} />
          <Route path="/unsuccessful" element ={<Unsuccessful />} />

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
