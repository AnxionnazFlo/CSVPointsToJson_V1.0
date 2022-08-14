let dataStorage = []; // array to store all the results

// function to get the place ID of a named place
async function getIdsFromAPI(place) {

    try {
        //##############################################################################################################################
        //                    DONT FORGET TO BRING YOU OWN API KEY
        //##############################################################################################################################
        await fetch(`https://maps.googleapis.com/maps/api/place/findplacefromtext/json?key=AIzaSyDTrNdybDPPWrjtVMV133Noai0MbdrQJAQ&inputtype=textquery&input=${place}`, { crossDomain: true })
            .then((res) => res.json())
            .then((res) => selectPlaces(res));

    } catch (error) {
        console.error(error);
    }

}

export { getIdsFromAPI };

const selectPlaces = (datas) => {
    // if the Api respond with no condidate, don't do the details API and ignore the response
    if (datas.candidates != 0) {
        getDetailsFromAPI(datas.candidates[0].place_id);
    } else { console.log('no candidate'); }
}

// function to get detail with the place ID
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

// function to get and store the informations in the storeDatas Array
const storeDatas = (datas) => {
    dataStorage.push([datas.result.name, datas.result.formatted_address, datas.result.url, datas.result.geometry.location, datas.result.types]);
}

console.log(dataStorage);