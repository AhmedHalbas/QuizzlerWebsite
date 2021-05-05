var username, email;
var namePatt = new RegExp(/^[A-Za-z]+$/); //+ one or more {1,}
var mailPatt = new RegExp(/^[\w-\.]+@([\w]+\.)+[a-z]{2,4}$/); // \w alpha - numeric and _ 
$("#lbl1").hide();
$("#lbl2").hide();

function nameKeyUp() {
    username = document.getElementById("txtUsr").value;
    email = document.getElementById("txtMail").value;
    if (namePatt.test(username)) {
        console.log(namePatt);
        $("#lbl1").hide();
    } else {
        $("#lbl1").show();
        $("#lbl1").html("Userame Includes only Characters");
        if (email != "" && mailPatt.test(email)) $("#lbl2").hide();
    }

}

function mailKeyUp() {
    username = document.getElementById("txtUsr").value;
    email = document.getElementById("txtMail").value;
    if (mailPatt.test(email)) {
        $("#lbl2").hide();
    } else {
        $("#lbl2").show();
        $("#lbl2").html("Incorrect Email Format");

        if (username != "" && namePatt.test(username)) $("#lbl1").hide();
    }

}

function nameKeyDown() {
    // alert("reached");
    username = document.getElementById("txtUsr").value;
    email = document.getElementById("txtMail").value;
    console.log(username);

    if (!namePatt.test(username)) {
        $("#lbl1").show();
        $("#lbl1").html("Userame Includes only Characters");
        if (email != "" && mailPatt.test(email)) $("#lbl2").hide();

    }
}

function mailKeyDown() {
    // alert("reached");
    username = document.getElementById("txtUsr").value;
    email = document.getElementById("txtMail").value;
    console.log(username);

    if (!mailPatt.test(email)) {
        $("#lbl2").show();
        $("#lbl2").html("Incorrect Email Format");
        if (username != "" && namePatt.test(username)) $("#lbl1").hide();

    }


}

function login() {
    username = document.getElementById("txtUsr").value;
    email = document.getElementById("txtMail").value;

    if (username == "") {
        $("#lbl1").show();
        $("#lbl1").html("Please Enter Username");
        if (email != "" && mailPatt.test(email)) $("#lbl2").hide();
    } else if (!namePatt.test(username)) {
        $("#lbl1").show();
        $("#lbl1").html("Userame Includes only Characters");
        if (email != "" && mailPatt.test(email)) $("#lbl2").hide();

    }
    if (email == "") {
        $("#lbl2").show();
        $("#lbl2").html("Please Enter Email");
        if (username != "" && namePatt.test(username)) $("#lbl1").hide();

    } else if (!mailPatt.test(email)) {
        $("#lbl2").show();
        $("#lbl2").html("Incorrect Email Format");
        if (username != "" && namePatt.test(username)) $("#lbl1").hide();

    }

    if (namePatt.test(username) && mailPatt.test(email)) {
        $("#lbl1").hide();
        $("#lbl2").hide();
        location.assign("category.html");
    }

}