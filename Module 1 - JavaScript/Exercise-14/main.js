$(document).ready(function(){

    $("#eventCard").fadeIn(1000);

    $("#registerBtn").click(function(){

        $("#message").text("Registration Successful!");

        $("#eventCard").fadeOut(1000).fadeIn(1000);

    });

});