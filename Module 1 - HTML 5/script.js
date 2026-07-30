function showMessage(event){

event.preventDefault();

document.getElementById("confirmation").value="Registration Successful!";

}

function validatePhone(){

let phone=document.getElementById("phone").value;

if(phone.length!=10 || isNaN(phone)){

alert("Enter a valid 10-digit phone number.");

}

}

function showFee(){

let fee=document.getElementById("eventType").value;

document.getElementById("fee").innerHTML="Event Fee : ₹"+fee;

}

function buttonClick(){

alert("Registration button clicked.");

}

function enlargeImage(img){

img.style.width="350px";

img.style.height="250px";

}

function countCharacters(){

let text=document.getElementById("feedback").value;

document.getElementById("charCount").innerHTML="Characters : "+text.length;

}

function videoReady(){

document.getElementById("videoStatus").innerHTML="Video ready to play.";

}

window.onbeforeunload=function(){

return "Your registration form is not completed.";

};
function findLocation(){

if(navigator.geolocation){

navigator.geolocation.getCurrentPosition(

showPosition,

showError,

{

enableHighAccuracy:true,

timeout:5000,

maximumAge:0

}

);

}

else{

document.getElementById("locationResult").innerHTML="Geolocation is not supported.";

}

}

function showPosition(position){

document.getElementById("locationResult").innerHTML=

"Latitude : "+position.coords.latitude+

"<br>Longitude : "+position.coords.longitude;

}

function showError(error){

let message="";

switch(error.code){

case error.PERMISSION_DENIED:

message="Permission denied by user.";

break;

case error.POSITION_UNAVAILABLE:

message="Location unavailable.";

break;

case error.TIMEOUT:

message="Request timed out.";

break;

default:

message="Unknown error.";

}

document.getElementById("locationResult").innerHTML=message;

}