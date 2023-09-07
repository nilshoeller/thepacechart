const form = document.getElementById("form");
const distance = document.getElementById("distance");
const time_from = document.getElementById("time_from");
const time_to = document.getElementById("time_to");
const times_table = document.getElementById("times_table");

const errorElement = document.getElementById("error");

form.addEventListener("submit", (e) => {
    let messages = []
    if (distance.value === "" || distance.value == null) {
        messages.push("Distance is required")
    }
    if (time_from.value === "" || time_from.value == null) {
        messages.push("Time from is required")
    }
    else if (time_from.value.length != 5){
        messages.push("Time from is not in the right format (MM:SS)")
    }
    if (time_to.value === "" || time_to.value == null) {
        messages.push("Time to is required")
    }
    else if (time_to.value.length != 5){
        messages.push("Time to is not in the right format (MM:SS)")
    }

    if (messages.length > 0){
        e.preventDefault();

        errorElement.innerText = messages.join(", ")
    }


})

var row = times_table.insertRow(-1);
var cell1 = row.insertCell(0);
var cell2 = row.insertCell(1);
var cell3 = row.insertCell(2)

cell1.innerHTML = "NEW CELL1";
cell2.innerHTML = "NEW CELL2";
cell3.innerHTML = "NEW CELL3"
