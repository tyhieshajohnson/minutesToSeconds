document.addEventListener("DOMContentLoaded", function() {
    // Get the convert button element
    let convertButton = document.getElementById("convertButton");

    // Add an event listener to the button
    convertButton.addEventListener("click", function() {
        // Call the convert function when the button is clicked
        convert();
    });
});

// This function converts minutes to seconds
function minutesToSeconds(minutes) {
    return minutes * 60;
}

// This function is called when the conversion button is clicked
function convert() {
    // Get the value entered in the "minutes" input field
    let minutesInput = document.getElementById("minutes").value;
    // Convert the input value to a parseFloat
    let minutes = parseFloat(minutesInput);
    // Check if the input is not a number (NaN)
    if (isNaN(minutes)) {
        // invalid number show an alert message
        alert("Valid Minutes Required");
        return;
    }

    let seconds = minutesToSeconds(minutes);
    // Get the HTML element where the result will be shown
    let resultElement = document.getElementById("result");
    // Set the inner text of the result element to show the conversion result
    resultElement.innerText = minutes + " minutes = " + seconds + " seconds.";
}
