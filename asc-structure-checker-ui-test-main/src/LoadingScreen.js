import React from 'react';
import loadIcon from './Assets/loading_icon.png';

function LoadingScreen() {
    return (
        <div id='loadScreen'> 
        <img src={loadIcon} alt='Service is loading' id='loadIcon'/>
        <div id='loadBox'>
        <h3>Loading, please wait...</h3>
        </div>
        </div>
    )
}

export default LoadingScreen;

