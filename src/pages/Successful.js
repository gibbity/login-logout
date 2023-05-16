import React from "react"
import {Link } from "react-router-dom";
import "./Pages.css";

const Successful = (props) => {
  return (
    <div>
      <h1>Welcome! You have sccessfully logged in</h1>
      <Link to="/"><button>
              Log out
            </button>
            </Link>
    </div>
  )
};

export default Successful;
