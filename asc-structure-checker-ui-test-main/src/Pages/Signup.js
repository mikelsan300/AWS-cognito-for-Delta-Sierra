 import React, {useState} from "react";
 import UserPool from "../UserPool";

/* Overview of changes by DS:
-> Active flag. I think it may be better (avoid re-rendering the whole app) if the div is toggled on and off, when disabled, it will just appear as a blank div.
-> Added verify password state and conditioned the onSubmit event on whether the two passwords match and are not empty.
-> Stylistic changes: collected the entire window in a div with absolute center(ish) positioning, a matching color template in the CSS file, placeholder text in boxes.
-> Changed password input boxes to the "password" type, which hides the actual characters. In Firefox, on submission, the browser correctly identifies the credentials and
   prompts the user if he would like to store them for next use.

*/

function Signup (props) {
    const [active, toggleActive] = useState(true); // For overlays, set up an active/not active flag.
     const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");
     const [passwordVerify, setPasswordVerify] = useState("");

     const onSubmit = (event) =>{
         event.preventDefault();
         if (password === passwordVerify && password !== "") {
         UserPool.signUp(email, password, [], null, (err, data) =>{
             if (err){
                 console.error();
             }
             console.log(data);
         });
        }
     };

     if (active) {
        return(
            <div id={"signUp"}>
                <form onSubmit={onSubmit}>
                    <div className={'signUpSubdiv'}>
                        <h4>Register</h4>
                    </div>
                    <div className={'signUpSubdiv'}>
                    <input
                    className = {"textInput"}
                    placeholder = {"E-mail address"}
                    value = {email}
                    autoFill
                    onChange = {(event) => setEmail(event.target.value)}
                    ></input>
                    </div>
                    <div className={'signUpSubdiv'}>
                    <input
                    className = {"textInput"}
                    type = {"password"}
                    placeholder = {"Password"}
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    ></input>
                    </div>
                    <div className={'signUpSubdiv'}>
                    <input
                    className = {"textInput"}
                    type = {"password"}
                    placeholder = {"Verify"}
                    value={passwordVerify}
                    onChange={(event) => setPasswordVerify(event.target.value)}
                    ></input>
                    </div>
                    <div className={'signUpSubdiv'}>
                    <button type="submit">Signup</button>
                    </div>
                </form>
            </div>
        );
     } else {
         // Return a blank div.
         return(
             <div style={{display: "none"}}>
             </div>
         )
     };
 };

 export default Signup;