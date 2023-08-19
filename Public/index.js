//Variable Declarations
//Declaring variables and storing them in global memory and assigning value of an element. 

var viewReport = document.getElementById('viewReport')
var sendFax = document.getElementById('sendFax');


//Action to be perfomed on click store in named function


function previewReport(e) {
    e.preventDefault();
    console.log(e);
    var previewComplete = "Here is your report preview" +
        viewReport.value;

    previewComplete.textContent = previewComplete;
}

//Event Handlers 
//Add listener to submit element 

viewReport.addEventListener("click", previewReport());