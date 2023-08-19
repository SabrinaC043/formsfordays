// Declaring Variables in global memory 
var nameInput = document.querySelector("#name");
var emailInput = document.querySelector("#email");
var submitEl = document.querySelector("#submit");
var submissionResponseEl = document.querySelector("#response");

// Do something with them

function revealResponse(e) {
    e.preventDefault();
    var response =
        "Thank you for your submission" + nameInput.value + "We will confirm your enrollment at" + emailInput.value + "!";

    submissionResponseEl.textContent = response;
}

// append to dom

//add event handler 
submitEl.addEventListener("click", revealResponse);