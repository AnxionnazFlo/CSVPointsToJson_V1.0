import { sortTable } from './index.js';
// function to load the csv file into a variable
const downloadCsv = async() => {
        try {

            //##############################################################################################################################
            //                    DONT FORGET TO BRING YOU OWN PATH TO THE FILE
            //##############################################################################################################################

            const target = `http://localhost:8080/stage/CSVPointsToJson/csvpointstojson/Assets/CSV/Cooperider_destinations.csv`; //file
            const res = await fetch(target, {
                method: 'get',
                headers: {
                    'content-type': 'text/csv;charset=UTF-8',
                }
            });
            if (res.status === 200) {
                const data = await res.text();
                // console.log(data);
                // send the datas to parse them
                parseCSV(data);
            } else {
                console.log(`Error code ${res.status}`);
            }
        } catch (err) {
            console.log(err)
        }
    }
    // function to parse datas into a array
const parseCSV = (data) => {
    // create empty array
    const csvData = [];

    // this will return each line as an individual String
    const lines = data.split("\n");

    // loop through the lines and return an array of individual   
    // Strings within the line that are separated by a comma

    for (let i = 0; i < lines.length; i++) {
        csvData[i] = lines[i].split(",");
    }

    // console.log(csvData);
    // send the array to sort it
    sortTable(csvData);
};

export { downloadCsv };