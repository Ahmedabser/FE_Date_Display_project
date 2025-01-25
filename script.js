// script.js

function displayDate() {
    // Get the current date
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString();

    // Get the selected target element from the dropdown
    const selectedSection = document.getElementById('targetSection').value;

    // Display the date in the selected section
    document.getElementById(selectedSection).innerHTML = "Current Date: " + formattedDate;
}
