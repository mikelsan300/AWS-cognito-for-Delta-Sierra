import React, {useState} from "react";
import LoadingScreen from './LoadingScreen';
import Footer from './Footer';
import Header from "./Header";
import MapWidget from "./MapWidget";
import { Map } from "@esri/react-arcgis";

var currentMap;

function Layout(props) {
    const [loading, updateLoading] = useState(true);

    /* Maps are going to be handled as an extended 
    (inherited) React component. */
  if (loading) {
    async function loadMap() {
        currentMap = await(new MapWidget(props = {props}));
        return currentMap;
    };
    loadMap().then(() => {
        updateLoading(false);
    });
  };

  let body;
  
    if (loading) {
    body = (<LoadingScreen/>);
  } else {
      body = currentMap.render();
      console.log('body', body);
    };
    return (
        <div className={'layout'}>
            <Header user={props.user} airac={props.airac} credits={props.credits} logOffUser = {props.logOffUser} logInUser = {props.logInUser}/>
            <div className={'content'}>
            {body}
            </div>
            <Footer />
        </div>
    )

};

export default Layout;