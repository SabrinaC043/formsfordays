// Declaring Variables in global memory 
var nameInput = document.querySelector("#name");
var emailInput = document.querySelector("#email");
var submitEl = document.querySelector("#submit");
var submissionResponseEl = document.querySelector("#response");

// Do something with them

function showResponse(e) {
    e.preventDefault();
    console.log(e);
    var response =
        "Thank you for your submission " + nameInput.value + " we will confirm your enrollment at: " + emailInput.value + "!";

    submissionResponseEl.textContent = response;
};

//add event handler 
submitEl.addEventListener("click", showResponse);