const form=document.getElementById("registrationForm");
const message=document.getElementById("message");

form.addEventListener("submit",function(event){

    event.preventDefault();

    console.log("Step 1: Form Submitted");

    const name=document.getElementById("name").value;
    const email=document.getElementById("email").value;

    console.log("Step 2: User Data");
    console.log({name,email});

    const payload={
        name,
        email
    };

    console.log("Step 3: Fetch Payload");
    console.log(payload);

    fetch("https://jsonplaceholder.typicode.com/posts",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(payload)
    })
    .then(response=>response.json())
    .then(data=>{
        console.log("Step 4: Server Response");
        console.log(data);

        message.style.color="green";
        message.textContent="Registration Successful!";
    })
    .catch(error=>{
        console.error(error);

        message.style.color="red";
        message.textContent="Registration Failed!";
    });

});