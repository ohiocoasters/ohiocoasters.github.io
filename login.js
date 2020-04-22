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
if (uname == "nicholasgardner" && pwd == "352970");{
    window.open("admindashboard.htm","_self");

}


}

