import React from "react";
import {useNavigate } from "react-router-dom";
import "./Button.css";

const LoginButton = (props) => {
    const navigate = useNavigate();
    const correctUsername = "user123"; //THE CORRECT USERNAME
    const correctPassword = "pass456"; //THE CORRECT PASSWORD
    let isVerified = false;

    function whenButtonPressed() {
        if ((props.username == correctUsername) & (props.password == correctPassword)) {
            isVerified = true;}
        console.log({isVerified});
        if (isVerified==true) {
            navigate("/successful");
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
