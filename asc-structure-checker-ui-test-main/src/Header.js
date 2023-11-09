import React from "react";
import ascLogo from "./Assets/asc_light_badge.png";
import sidebarOpen from "./Assets/sidebarOpen.png";
import{useHistory} from "react-router-dom";
function Header(props) {

    let history = useHistory();

    

    let userStatus;
    if (props.user) {
        userStatus = (<div id="userStatus">
        <p>Hello <b>{props.user + ' '} </b><a onClick = {() => {props.logOffUser()}}>(log out)</a></p>
        <p><b>{props.credits}</b> credits available</p>
        <p><b>{props.airac}</b> current</p>
    </div>)
    } else {
        userStatus = (<div id="userStatus">
    <p>Hello, guest</p>
    
    <p><b><a onClick = {() => {history.push("/Login")}}>Log in</a></b></p>
    
    <p><b><a onClick = {() => {history.push("/Signup")}} >Sign up</a></b></p>
</div>)
    // The history.push("/Signup") call redirects to the /Signup url and also keeps track of the last page the user was in, this will be helpful for 
    // later integration of page movement inside a loged in account. 
    }
    
    return (
    <div className="header">
        <div id="sidebarSelectSpace">
            <img src={sidebarOpen} alt='sidebar_toggle' height={'30%'}
            onClick = {() => {props.consumeCredits(1)}}/>
        </div>
        <div id="logoSpace">
            <img src={ascLogo} alt='logo_light' height={'100%'}/>
        </div>
        <div id="blankHeaderSpace">
        </div>
        {userStatus}
    </div>)

};

export default Header;