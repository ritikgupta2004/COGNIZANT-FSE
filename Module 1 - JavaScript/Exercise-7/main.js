const events=[
    {name:"Music Festival",seats:2},
    {name:"Food Carnival",seats:1},
    {name:"Coding Workshop",seats:3}
];

const container=document.querySelector("#events");

function renderEvents(){

    container.innerHTML="";

    events.forEach((event,index)=>{

        const card=document.createElement("div");
        card.className="card";

        card.innerHTML=`
        <h2>${event.name}</h2>
        <p>Available Seats: ${event.seats}</p>

        <button onclick="register(${index})">
        Register
        </button>

        <button onclick="cancel(${index})">
        Cancel
        </button>
        `;

        container.appendChild(card);

    });

}

function register(index){

    if(events[index].seats>0){
        events[index].seats--;
        renderEvents();
    }else{
        alert("No seats available");
    }

}

function cancel(index){

    events[index].seats++;
    renderEvents();

}

renderEvents();