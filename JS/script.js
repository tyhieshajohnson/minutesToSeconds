// This function converts minutes to seconds
function minutesToSeconds(minutes) {
    // Multiply the input minutes by 60 to get the equivalent seconds
    return minutes * 60;
}

// This function is called when the conversion button is clicked
function convert() {
    // Get the value entered in the "minutes" input field
    let minutesInput = document.getElementById("minutes").value;
    // Convert the input value to a pasreFloat
    let minutes = parseFloat(minutesInput);
    // Check if the input is not a number (NaN)
    if (isNaN(minutes)) {
        // If the input is not a valid number, show an alert message
        alert("Valid Minutes Required");
        return;
    }

    let seconds = minutesToSeconds(minutes);
    // Get the HTML element where the result will be displayed
    let resultElement = document.getElementById("result");
    // The the inner text of the result element to show the conversion result
    resultElement.innerText = minutes + " minutes = " + seconds + " seconds.";
}