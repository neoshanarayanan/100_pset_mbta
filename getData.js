
// get data for route 1 using API key
function makeCall(){
    var vehicles = [];
    fetch("https://api-v3.mbta.com/vehicles?api_key=b71590178cb04823bffb3c3b1bf0725b&filter[route]=1&include=trip")
    .then(response => response.json())
    .then(json => {
        vehicles.push(json.data);
    })

console.log(vehicles); 
}

var counter = 0;
var numCycles = 100;

function run(){
    if(counter < numCycles){
        makeCall();
        setTimeout(run, 15000);
    }

    counter++;
}

run();



