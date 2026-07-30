const button=document.getElementById("submitBtn");
const message=document.getElementById("message");

button.addEventListener("click",()=>{

    message.textContent="Submitting registration...";

    setTimeout(()=>{

        fetch("https://jsonplaceholder.typicode.com/posts",{

            method:"POST",

            headers:{
                "Content-Type":"application/json"
            },

            body:JSON.stringify({

                name:"Ritik",
                email:"ritik@example.com",
                event:"Music Festival"

            })

        })

        .then(response=>response.json())

        .then(data=>{

            message.style.color="green";
            message.textContent="Registration Successful!";

            console.log(data);

        })

        .catch(()=>{

            message.style.color="red";
            message.textContent="Registration Failed!";

        });

    },2000);

});