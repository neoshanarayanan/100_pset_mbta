
// get data for route 1 using API key
function makeCall(){
    fetch("https://api-v3.mbta.com/vehicles?api_key=b71590178cb04823bffb3c3b1bf0725b&filter[route]=1&include=trip")
    .then(response => response.json())
    .then(json => {
        var vehicles = json.data;
    })
}

var counter = 0;

function run(){
    if(counter < 100){
        makeCall();
        setTimeout(run, 15000);
    }

    counter++;
}

run();



