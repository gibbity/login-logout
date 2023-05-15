import React from 'react';
import ReactDOM from 'react-dom/client';

function LoginButton() {
  const whenButtonPressed = () => {
    alert("sign in successful/unsuccessful and go onto page");
  }

  return (
    <button onClick={whenButtonPressed}>Login</button>
  );
}

//const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(<LoginButton />);
export default LoginButton;