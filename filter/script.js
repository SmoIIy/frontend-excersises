const vehicles = [
  { type: "Bus", fuel: "Diesel", passengers: 45, stops: ["Nørrebrogade", "Elmegade"] },
  { type: "Bil", fuel: "Benzin", passengers: 4, ownedBy: "Klaus" },
  { type: "Cykel", fuel: "Rugbrød", passengers: 0, ownedBy: "Jonas", isElectric: true },
  { type: "Bil", passengers: 5, ownedBy: "Elon", isElectric: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Fonda" },
  { type: "Cykel", fuel: "Rugbrød", passengers: 2, ownedBy: "Vingegård", isTandem: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Yolanda" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Børge" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Jonas" },
  { type: "Løbehjul", passengers: 1, isElectric: true },
];

const ulPointer = document.querySelector(".input");

//allFilters(vehicles);

function showTheseVehicles(arr) {
    ulPointer.innerHTML = "";
    arr.forEach((each) => {
        ulPointer.innerHTML += `<li>${each.type}</li>`;
        ulPointer.innerHTML += `<li>${each.fuel}</li>`;
        ulPointer.innerHTML += `<li>${each.passengers}</li>`;
        //stops
        if (each.stops != undefined) {
            ulPointer.innerHTML += `<li>${each.stops}</li>`;
        } else {
            ulPointer.innerHTML += `<p></p>`;
        }
        //Owned by
        if (each.ownedBy != undefined) {
            ulPointer.innerHTML += `<li>${each.ownedBy}</li>`;
        } else {
            ulPointer.innerHTML += `<p></p>`;
        }
        //is electric
        if (each.isElectric != undefined) {
            ulPointer.innerHTML += `<li>${each.isElectric}</li>`;
        } else {
            ulPointer.innerHTML += `<p></p>`;
        }
        //is tandem
        if (each.isTandem != undefined) {
            ulPointer.innerHTML += `<li>${each.isTandem}</li>`;
        } else {
            ulPointer.innerHTML += `<p></p>`;
        }
  });
}

function allFilters(arr){
    showTheseVehicles(arr);
    
}

function filterElectric(arr) {
    let filtered = arr.filter((element) => element.isElectric == true);
    console.log(filtered);
    showTheseVehicles(filtered);
}
function filterTwoSeats(arr) {
    let filtered = arr.filter((element) => element.passengers > 2);
    console.log(filtered);
    showTheseVehicles(filtered);
}
function filterJonasElectric(arr) {
    let filtered = arr.filter((element) => element.isElectric == true && element.ownedBy === "Jonas");
    console.log(filtered);
    showTheseVehicles(filtered);
}
function filterRugbrød(arr) {
    let filtered = arr.filter((element) => element.fuel === "Rugbrød" && element.passengers > 1);
    console.log(filtered);
    showTheseVehicles(filtered);
}

// arr.forEach(element => {
//     if (element.isElectric == true || element.passengers > 2 || (element.isElectric == true && element.ownedBy === "Jonas") || (element.fuel === "Rugbrød" && element.passengers > 1)) {
//         ulPointer.innerHTML += `<li>${element.type}</li>`;
//         ulPointer.innerHTML += `<li>${element.fuel}</li>`;
//         ulPointer.innerHTML += `<li>${element.passengers}</li>`;
//         ulPointer.innerHTML += `<li>${element.stops}</li>`;
//         ulPointer.innerHTML += `<li>${element.ownedBy}</li>`;
//         ulPointer.innerHTML += `<li>${element.isElectric}</li>`;
//         ulPointer.innerHTML += `<li>${element.isTandem}</li>`;
//     }
// });
