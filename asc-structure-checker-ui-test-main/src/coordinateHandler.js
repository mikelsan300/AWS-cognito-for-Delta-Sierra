// Extract lat/lon coordinates in API format (decimal degrees) to other formats.
// Set niceFormat to true when a formatted string (easily-readable) is desired, else components will be expressed in arrays.
export function convertFromDecimal (lat, lon, target, niceFormat = false) {
    console.log(lat, lon);
    const latNegative = lat < 0;
    const lonNegative = lon < 0;
    const latAbs = Math.abs(lat);
    const lonAbs = Math.abs(lon);
    let latArray = {};
    let lonArray = {};
    if (target === 'dms') {
        let decimalMinutes;
        // Latitude conversions.
        latArray.d = Math.floor(latAbs);
        decimalMinutes = (latAbs % 1) * 60;
        latArray.m = Math.floor(decimalMinutes);
        latArray.s = (decimalMinutes % 1) * 60;
        latArray.sign = latNegative ? 'S' : 'N';
        // Longitude conversions.
        lonArray.d = Math.floor(lonAbs);
        decimalMinutes = (lonAbs % 1) * 60;
        lonArray.m = Math.floor(decimalMinutes);
        lonArray.s = (decimalMinutes % 1) * 60;
        lonArray.sign = lonNegative ? 'W' : 'E';
    };

    if (niceFormat) {
        let latlonStrings;
        latlonStrings = coordinatePrinter(latArray, lonArray, target);
        return {'lat': latlonStrings[0], 'lon': latlonStrings[1]};
    } else {
        return {'lat': latArray, 'lon': lonArray};
    }
}

function coordinatePrinter (lat, lon, target) {
    let latS, lonS;
    if (target === 'dms') {
        latS = lat.sign + ' ' + lat.d.toFixed(0).padStart(2,'0') + '°' + lat.m.toFixed(0).padStart(2,'0') + `'` + lat.s.toFixed(3).padStart(6,'0') + `"`;
        lonS = lon.sign + ' ' + lon.d.toFixed(0).padStart(3,'0') + '°' + lon.m.toFixed(0).padStart(2,'0') + `'` + lon.s.toFixed(3).padStart(6,'0') + `"`;
    };

    return [latS, lonS];
}