// Fetching the data from link
let apiUrl = fetch(
    "https://reactmusicplayer-ab9e4.firebaseio.com/project-data.json"
);

// variable for storing the data in local storage
const apiData = "";

// validating the response from the link
apiUrl
    .then((response) => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then((data) => {
        // Store data in local storage
        console.log("Api Data -> ", data);
        localStorage.setItem(apiData, JSON.stringify(data));
    })
    .catch((error) => console.error("Error fetching data:", error));


// checking the type of data
console.log('type of apidata : ', apiData)
// getting the apidata for dashboard
var storedData = localStorage.getItem(apiData);
console.log("Type of stored data - ", typeof (storedData));
var parsedData = JSON.parse(storedData);
console.log(typeof (parsedData));
// console.log(parsedData);
