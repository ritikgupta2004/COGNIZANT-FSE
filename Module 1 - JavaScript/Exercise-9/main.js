const container=document.getElementById("events");
const loading=document.getElementById("loading");

function showEvents(events){

    container.innerHTML="";

    events.forEach(event=>{

        container.innerHTML+=`
        <div class="card">
            <h2>${event.name}</h2>
            <p>${event.category}</p>
        </div>
        `;

    });

}

function loadEvents(){

    loading.textContent="Loading...";

    fetch("events.json")
    .then(response=>response.json())
    .then(data=>{
        showEvents(data);
        loading.textContent="";
    })
    .catch(()=>{
        loading.textContent="Failed to load events";
    });

}

async function loadEventsAsync(){

    loading.textContent="Loading...";

    try{

        const response=await fetch("events.json");
        const data=await response.json();

        showEvents(data);

        loading.textContent="";

    }

    catch{

        loading.textContent="Failed to load events";

    }

}