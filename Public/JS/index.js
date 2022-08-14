import { getIdsFromAPI } from './placeIdApi.js';
import { geolocatFromAPI } from './geolocatApi.js';
import { downloadCsv } from './downloadCsv.js';


downloadCsv();

let locationArray = new Array(); // store locations with a name
let specificLocationArray = new Array(); // store placed points "Repère placé"
let localLocationArray = new Array(); // store locations with coordinates
let wrongLocationArray = new Array(); // store wrong locations

// function to sort the table of datas
const sortTable = (data) => {

    for (let i = 0; i < data.length; i++) {
        let character = data[i][0].substr(0, 1);
        // character contain the first character of the string

        // if the point is a "repère placé"
        if (data[i][0] == 'Repère placé') {
            specificLocationArray.push(data[i]);
        }
        // if the point start with "
        else if (character == '"') {
            const secondCharacter = data[i][0].substr(1, 2);
            // if the point is a coordinate
            if (secondCharacter >= 30 && secondCharacter <= 50) {
                localLocationArray.push(data[i]);
            }
            // else this is a wrong point
            else {
                wrongLocationArray.push(data[i]);
            }
        }
        // else this is a named place
        else {
            locationArray.push(data[i][0]);
        }
    }
    // to execute fetching on named array (locationArray)
    getResponse(locationArray);

    // concatenation of both specificLocationArray and localLocationArray
    specificLocationArray = specificLocationArray.concat(localLocationArray);
    // to execute sorting of "repère placé" and coordinates array
    sortArrayCoordinates(specificLocationArray);

}

export { sortTable };

const getResponse = (locationArray) => {
    console.log(locationArray.length); // shown in the inspector console the length of the array

    // ###############################################################################################
    //                    CAUTION THIS FUNCTION WORK WELL ONLY IF LENGTH < 100
    // #################################################################################################
    // to get the array length use : locationArray.length
    // bring i the value you desire to start with

    for (let i = 200; i < locationArray.length; i++) {
        // for each element in the array get the informations
        getIdsFromAPI(locationArray[i]);
    }

}

let arraySorted = new Array(); // in order to store coordinates
const sortArrayCoordinates = (array) => {
    // select the coordinates from specificLocationArray and store them in arraySorted
    for (let i = 0; i < array.length; i++) {
        let lat = parseFloat(array[i][1].slice(36));
        let lng = parseFloat(array[i][2].slice(0, -1));
        arraySorted.push([lat, lng]);
    }

    for (let i = 0; i < arraySorted.length; i++) {
        //for each element in the array get the informations
        geolocatFromAPI(arraySorted[i][0], arraySorted[i][1]);
    }
}