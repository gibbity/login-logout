import React from "react";
import {useNavigate } from "react-router-dom";
import "./Button.css";
import { useDispatch, useSelector } from 'react-redux';

const LoginButton = (props) => {
    const navigate = useNavigate();
    let isVerified = false;
    const dispatch = useDispatch()
    const user = useSelector(state => state.user)
    //console.log(user)
    const credentials = {
      correctUsername: "user123",
      correctPassword: "pass456"
    }

    function whenButtonPressed() {
        if ((props.username == credentials.correctUsername) & (props.password == credentials.correctPassword)) {
            isVerified = true;}
        console.log({isVerified});
        if (isVerified==true) {
            navigate("/successful");
            dispatch({ type: 'LOGIN', payload: props.username});
        }
        else {
            navigate("/unsuccessful");
        }
    }

    return (
        <div>
            <button onClick={whenButtonPressed}>Login</button>
        </div>
        );
    }

export default LoginButton;
