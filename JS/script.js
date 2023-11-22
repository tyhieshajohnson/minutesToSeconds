function minutesToSeconds(minutes) {
    return minutes * 60;
}

function convert() {
    let minutesInput = document.getElementById("minutes").value;
    let minutes = parseFloat(minutesInput);

    if (isNaN(minutes)) {
        alert("Valid Minutes Required");
        return;
    }

    let seconds = minutesToSeconds(minutes);
    let resultElement = document.getElementById("result");
    resultElement.innerText = minutes + " minutes = " + seconds + " seconds.";
}