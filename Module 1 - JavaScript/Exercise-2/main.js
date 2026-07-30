const eventName = "Community Music Festival";
const eventDate = "15 August 2026";
let availableSeats = 100;

const output = document.getElementById("output");

output.innerHTML += `<p><strong>Event:</strong> ${eventName}</p>`;
output.innerHTML += `<p><strong>Date:</strong> ${eventDate}</p>`;
output.innerHTML += `<p><strong>Available Seats:</strong> ${availableSeats}</p>`;

console.log(`Event: ${eventName}`);
console.log(`Date: ${eventDate}`);
console.log(`Available Seats: ${availableSeats}`);

availableSeats++;

output.innerHTML += `<p><strong>Seats after increment:</strong> ${availableSeats}</p>`;
console.log(`Seats after increment: ${availableSeats}`);

availableSeats--;

output.innerHTML += `<p><strong>Seats after decrement:</strong> ${availableSeats}</p>`;
console.log(`Seats after decrement: ${availableSeats}`);