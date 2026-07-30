const form=document.getElementById("registrationForm");
const error=document.getElementById("error");

form.addEventListener("submit",function(event){

    event.preventDefault();

    const name=form.elements["name"].value.trim();
    const email=form.elements["email"].value.trim();
    const selectedEvent=form.elements["event"].value;

    if(name===""||email===""||selectedEvent===""){

        error.textContent="Please fill all the fields.";
        return;

    }

    error.style.color="green";
    error.textContent="Registration Successful!";

    console.log({
        name,
        email,
        selectedEvent
    });

    form.reset();

});