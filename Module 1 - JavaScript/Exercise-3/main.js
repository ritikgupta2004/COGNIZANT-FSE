const events = [
    {
        name: "Music Festival",
        date: "2026-08-15",
        seats: 50
    },
    {
        name: "Food Carnival",
        date: "2025-01-10",
        seats: 40
    },
    {
        name: "Art Exhibition",
        date: "2026-09-05",
        seats: 0
    },
    {
        name: "Coding Workshop",
        date: "2026-10-12",
        seats: 30
    }
];

const today = new Date();

const eventList = document.getElementById("eventList");

events.forEach(event => {

    const eventDate = new Date(event.date);

    if(eventDate > today && event.seats > 0){

        eventList.innerHTML += `
        <div class="event">
            <h3>${event.name}</h3>
            <p>Date: ${event.date}</p>
            <p>Available Seats: ${event.seats}</p>
        </div>
        `;
    }
});

function registerUser(eventName){

    try{

        const event = events.find(e => e.name === eventName);

        if(!event){
            throw new Error("Event not found.");
        }

        if(event.seats <= 0){
            throw new Error("No seats available.");
        }

        event.seats--;

        alert(`Registration successful for ${event.name}`);

        console.log(`${event.name} Seats Left: ${event.seats}`);

    }

    catch(error){

        alert(error.message);

    }

}

registerUser("Coding Workshop");