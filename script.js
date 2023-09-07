const form = document.getElementById("form");
const distance = document.getElementById("distance");
const time_from = document.getElementById("time_from");
const time_to = document.getElementById("time_to");
const step = document.getElementById("step")
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
    if (step.value === "" || step.value == null) {
        messages.push("Step is required")
    }

    if (messages.length > 0){
        e.preventDefault();

        errorElement.innerText = messages.join(", ")
    } else {
        e.preventDefault();

        var table_rows_count = times_table.rows.length
        for (let i=0; i<table_rows_count-1; i++) {
            times_table.deleteRow(-1);
        }

        var distance_meters = parseInt(distance.value);
        var time_from_in_seconds = (parseInt(time_from.value.slice(0,2)) * 60) + parseInt(time_from.value.slice(3,5));

        var step_seconds = parseInt(step.value);

        var curr_time = time_from_in_seconds

        for (let i = 0; i < 10; i++){
            var row = times_table.insertRow(-1);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2)
            
            cell1.innerHTML = seconds_to_format(curr_time);
            cell2.innerHTML = time_per_km(curr_time, distance_meters);
            cell3.innerHTML = time_per_mile(curr_time, distance_meters);

            curr_time += step_seconds;

        }

    }


    function seconds_to_format(time){
        var minutes = parseInt(time / 60)
        var seconds = time % 60
        if (seconds < 10){
            seconds = "0" + seconds
        }

        return minutes + ":" + seconds;
    }

    function time_per_km(time, distance) {
        pace_per_km = (time / distance) * 1000
    
        return seconds_to_format(Math.floor(pace_per_km)) + "/km"
    }

    function time_per_mile(time, distance) {
        pace_per_mile = (time / distance) * 1609,34
    
        return seconds_to_format(Math.floor(pace_per_mile)) + "/mile"
    }

})
