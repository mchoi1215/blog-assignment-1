document.getElementById("contactform").onsubmit = function() {
    var x = document.forms["contactform"]["name"].value; 
    var y = document.forms["contactform"]["subject"].value; 
    var z = document.forms["contactform"]["message"].value; 

    var submit = true; 

    if (x == null || x == "" || y == null || y == "" ||  z == null || z == "") {
        alert("Form hasn't been completed and cannot be submitted.");
        submit = false;
    }

    else {
        alert("Your form has been submitted.");
        submit = true;    
    }
    
    return submit;
}
