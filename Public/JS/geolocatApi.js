let dataStorage = []; // array to store the results
// get place id form coordinates
async function geolocatFromAPI(lat, lng) {
    try {
        //##############################################################################################################################
        //                    DONT FORGET TO BRING YOU OWN API KEY
        //##############################################################################################################################
        await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=AIzaSyDTrNdybDPPWrjtVMV133Noai0MbdrQJAQ`, { crossDomain: true })
            .then((res) => res.json())
            // .then((res) => getDetailsFromAPI(res.results[0].place_id));
            .then((res) => selectPlaces(res));
        // .then((res) => console.log(res));

    } catch (error) {
        console.error(error);
    }
}
const selectPlaces = (datas) => {
    // if the Api respond with no condidate, don't do the details API and ignore the response
    if (datas.results[0].place_id != 0) {
        getDetailsFromAPI(datas.results[0].place_id);
    } else { console.log('no candidate'); }
}

export { geolocatFromAPI };
// get details from place ID
async function getDetailsFromAPI(placeID) {
    try {
        //##############################################################################################################################
        //                    DONT FORGET TO BRING YOU OWN API KEY
        //##############################################################################################################################
        await fetch(`https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeID}&key=AIzaSyDLti_up7hYeptK2So3HdYbydvrcJG6oa4`, { crossDomain: true })
            .then((res) => res.json())
            .then((res) => storeDatas(res));
    } catch (error) {
        console.error(error);
    }
}
// select and store datas in dataStorage
const storeDatas = (datas) => {
    dataStorage.push([datas.result.name, datas.result.formatted_address, datas.result.url, datas.result.geometry.location, datas.result.types]);
}
console.log(dataStorage);