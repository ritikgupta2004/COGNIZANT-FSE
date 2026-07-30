const events = [];

function addEvent(name, category, seats){

    events.push({
        name,
        category,
        seats
    });

}

addEvent("Music Festival","Music",40);
addEvent("Food Carnival","Food",25);
addEvent("Coding Workshop","Education",30);
addEvent("Art Exhibition","Art",20);



function registerUser(eventName){

    const event = events.find(e=>e.name===eventName);

    if(event && event.seats>0){

        event.seats--;

        alert(`Successfully registered for ${event.name}`);

        renderEvents();

    }

    else{

        alert("Registration failed!");

    }

}



function filterEventsByCategory(category,callback){

    const filtered = events.filter(event=>event.category===category);

    callback(filtered);

}



function registrationTracker(category){

    let totalRegistrations = 0;

    return function(){

        totalRegistrations++;

        console.log(`${category} Registrations : ${totalRegistrations}`);

    };

}

const musicTracker = registrationTracker("Music");



function renderEvents(){

    const container=document.getElementById("eventList");

    container.innerHTML="";

    events.forEach(event=>{

        const card=document.createElement("div");

        card.className="event";

        card.innerHTML=`
        <h2>${event.name}</h2>
        <p>Category : ${event.category}</p>
        <p>Available Seats : ${event.seats}</p>

        <button onclick="registerUser('${event.name}')">
        Register
        </button>
        `;

        container.appendChild(card);

    });

}

renderEvents();



filterEventsByCategory("Music",function(result){

    console.log("Filtered Music Events");

    console.log(result);

});



document.addEventListener("click",function(e){

    if(e.target.tagName==="BUTTON"){

        musicTracker();

    }

});