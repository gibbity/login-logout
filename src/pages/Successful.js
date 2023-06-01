import React from "react"
import {Link } from "react-router-dom";
import "./Pages.css";
import { useDispatch, useSelector } from 'react-redux';

const Successful = (props) => {
  const dispatch = useDispatch()

  function handleClick() {
    dispatch({ type: 'LOGOUT' })
  }

  return (
    <div>
      <h1>Welcome {useSelector(state => state.user)}! You have sccessfully logged in</h1>
      <Link to="/"><button onClick={handleClick}>
              Log out
            </button>
            </Link>
    </div>
  )
};

export default Successful;
