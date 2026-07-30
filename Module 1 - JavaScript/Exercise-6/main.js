const events = [];

events.push({
    name: "Music Festival",
    category: "Music"
});

events.push({
    name: "Food Carnival",
    category: "Food"
});

events.push({
    name: "Workshop on Baking",
    category: "Workshop"
});

events.push({
    name: "Rock Concert",
    category: "Music"
});

const musicEvents = events.filter(event => event.category === "Music");

const displayCards = musicEvents.map(event => {
    return `
        <div class="card">
            <h2>${event.name}</h2>
            <p>Category: ${event.category}</p>
        </div>
    `;
});

document.getElementById("output").innerHTML = displayCards.join("");

console.log("All Events");
console.log(events);

console.log("Music Events");
console.log(musicEvents);

console.log("Formatted Cards");
console.log(displayCards);