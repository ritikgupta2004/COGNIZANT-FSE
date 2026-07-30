const events=[
    {
        name:"Music Festival",
        category:"Music",
        seats:50
    },
    {
        name:"Food Carnival",
        category:"Food",
        seats:30
    },
    {
        name:"Coding Workshop",
        category:"Workshop",
        seats:20
    }
];

function displayEvent(event,title="Community Event"){

    const {name,category,seats}=event;

    document.getElementById("events").innerHTML+=`
    <div class="card">
        <h2>${title}</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Category:</strong> ${category}</p>
        <p><strong>Seats:</strong> ${seats}</p>
    </div>
    `;
}

const clonedEvents=[...events];

const musicEvents=clonedEvents.filter(event=>event.category==="Music");

musicEvents.forEach(event=>{
    displayEvent(event);
});

console.log("Original Events:",events);
console.log("Cloned Events:",clonedEvents);