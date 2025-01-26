// script.js
function displayDay() {


    var date = document.getElementById("date").value;

    let day=" ";


    if (date.trim() === "") {
        day = "invalid input";
    } else if (date == 1) {
        day = "Sunday";
    } else if (date == 2) {
        day = "Monday";
    } else if (date == 3) {
        day = "Tuesday";
    } else if (date == 4) {
        day = "Wednesday";
    } else if (date == 5) {
        day = "Thursday";
    } else if (date == 6) {
        day = "Friday";
    } else if (date == 7) {
        day = "Saturday";
    } else {
        day = "invalid input";
    }
    // عرض اليوم في العنصر #dateOutput
    document.getElementById("dateOutput").innerHTML = day;
  }

  
// Action for Enter key
document.getElementById("date").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        displayDay();
    }
});
