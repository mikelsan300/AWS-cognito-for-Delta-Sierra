import React, { useState, useContext } from "react";
import {AccountContext} from "./Account";


function Login (props)  {
  const [active, toggleActive] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { authenticate } = useContext(AccountContext);

  const onSubmit = (event) => {
    event.preventDefault();
    authenticate(email, password)
    .then(data => {
      console.log("Logged in!", data)
    })
    .catch(err=> {
      console.error("Failed to login", err);
    });

    
  };

  if(active){
  return (

<div id={"logIn"}>
<form onSubmit={onSubmit}>
    <div className={'logInSubdiv'}>
        <h4>Log In</h4>
    </div>
    <div className={'logInSubdiv'}>
    <input
    className = {"textInput"}
    placeholder = {"E-mail address"}
    value = {email}
    autoFill
    onChange = {(event) => setEmail(event.target.value)}
    ></input>
    </div>
    <div className={'logInSubdiv'}>
    <input
    className = {"textInput"}
    type = {"password"}
    placeholder = {"Password"}
    value={password}
    onChange={(event) => setPassword(event.target.value)}
    ></input>
    </div>
    <div className={'logInSubdiv'}>
    <button type="submit">Log In</button>
    </div>
</form>
</div>
  );
  } else{
      // Return a blank div.
      return(
        <div style={{display: "none"}}>
        </div>
    )
  };
};

export default Login;