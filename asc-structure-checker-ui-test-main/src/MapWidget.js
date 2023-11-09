import React from 'react';
import { Map } from '@esri/react-arcgis';
import { convertFromDecimal } from './coordinateHandler';

/* Use this for ArcGIS maps. The direct map component does not allow functions to be entered as easily.
*/

class MapWidget extends React.Component {
    constructor(props, formats = {'coords': 'dms'}) {
        super(props);
        this.state = {
            status: 'loading'
        };
        this.formats = formats;

        this.handleClick = this.handleClick.bind(this);
    }

    // This replaces the return on other component functions.
    render() {
        return <Map onClick={this.handleClick} />;
    }


    handleClick(e) {
        // Extracts the lat/lon coordinates of the clicked location. (DS) checked that it works.
        if (this.formats.coords === 'dms') {
            let coordStrings = convertFromDecimal(e.mapPoint.latitude, e.mapPoint.longitude, this.formats.coords, true);
            console.log(coordStrings['lat'], coordStrings['lon']);
        } else {
            console.log(e.mapPoint.latitude, e.mapPoint.longitude);
        }
    }
}

export default MapWidget;