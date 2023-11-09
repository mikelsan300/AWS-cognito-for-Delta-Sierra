import React, { useState } from 'react';
import Layout from './Layout';
import './App.css';
import Signup from './Components/Signup';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Components/Login';
import { Account } from './Components/Account';


const io = require('socket.io-client');

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [credits, setCredits] = useState(null);
  const [airac, setAirac] = useState(null);
  const socket = io.connect('http://3.17.66.222:3000');
  console.log(socket);

  function consumeCredits(creditsConsumed) {
    let newCredits = credits - creditsConsumed;
    setCredits(newCredits);
  };

  function logOffUser() {
    setCurrentUser(null);
    setCredits(null);
    setAirac(null);

  };

  function logInUser() {
    /* 
    setCurrentUser('delta');
    setCredits(1000);
    setAirac('AIRAC 2111');
*/
  };
  // This function is useless for now
  function signUpUser() {
    /*
    return <div className="Signup">
      <Signup />
      </div>
*/    
  };

  return (

    // Returned divs are casted by the router for it to keep track of any pages involved in the app. Switch statement is there to specify that only one page can be opened at a time. 
    //Since there is no "home" page as it is the main div returend, the signup div appears in the same page because there is no call for another window yet
    <Account>
    <Router>
    
    

  <Layout user={currentUser} airac={airac} credits={credits} consumeCredits={consumeCredits} logOffUser={logOffUser} logInUser={logInUser} signUpUser={signUpUser}/>
  
  <Switch>
  <Route path = "/Login" exact component={Login} />
  <Route path = "/Signup" exact component={Signup} />
  </Switch>
 
  </Router>
  </Account>
  
  );

  /*return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );*/
}

export default App;