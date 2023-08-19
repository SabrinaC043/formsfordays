//Variable Declarations
//Declaring variables and storing them in global memory and assigning value of an element. 
var mrnSearch = document.querySelector('#mrnSearch');
var viewReport = document.getElementById('viewReport');
var sendFax = document.getElementById('sendFax');
// this is goiong to store user input 

var preview = "";

//Action to be perfomed on click store in named function


function previewReport(e) {
    e.preventDefault(); //prevents default behavior of form we don't want it to refresh
    console.log(e);
    var preview = "Here is your report preview" +
        mrnSearch.value + preview;

    previewReport.textContent = preview;
}

//Event Handlers 
//Add listener to submit element 

viewReport.addEventListener("click", previewReport());