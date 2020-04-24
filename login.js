$("#email").focus(function(){
    $("#emailLabel").addClass("show");
    $(this).val('')
}).blur(function(){
    $("#emailLabel").removeClass("show");
});

$("#password").focus(function(){
    $("#passwordLabel").addClass("show");
    $(this).val('')
}).blur(function(){
    $("#passwordLabel").removeClass("show");
});


var uname = document.getElementById('email');
var pwd = document.getElementById('password');

function login(){
if (uname == "nicholasgardner" && pwd == "352970" || uname == "test" && pwd == "test");{
    window.open("https://www.ohiocoasters.github.io/admindashboard.htm","_self")

}


}

function autchkshp(){

    if (uname == "nicholasgardner" && pwd == "352970") {
        window.open("https://my.ecwid.com/store/28557208#dashboard:wizard=tiles","_self")
    } else {
        alert("Sorry, You dont have sufficent clearance to view this page")
        window.open("admindashboard.htm","_self")
     
      }

    }