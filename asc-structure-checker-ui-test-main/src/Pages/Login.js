import React, { useState } from "react";
import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";
import UserPool from "../UserPool";

function Login (props)  {
  const [active, toggleActive] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();

    const user = new CognitoUser({
      Username: email,
      Pool: UserPool,
    });

    const authDetails = new AuthenticationDetails({
      Username: email,
      Password: password,
    });

    user.authenticateUser(authDetails, {
      onSuccess: (data) => {
        console.log("onSuccess: ", data);
      },
      onFailure: (err) => {
        console.error("onFailure: ", err);
      },
      newPasswordRequired: (data) => {
        console.log("newPasswordRequired: ", data);
      },
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