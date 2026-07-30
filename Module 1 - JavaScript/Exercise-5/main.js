class Event{

    constructor(name,date,category,seats){

        this.name=name;
        this.date=date;
        this.category=category;
        this.seats=seats;

    }

}

Event.prototype.checkAvailability=function(){

    return this.seats>0
        ? "Seats Available"
        : "Event Full";

};

const event1=new Event(
    "Music Festival",
    "15 August 2026",
    "Music",
    50
);

const output=document.getElementById("output");

output.innerHTML=`
<div class="card">

<h2>${event1.name}</h2>

<p><strong>Status :</strong> ${event1.checkAvailability()}</p>

<table>

<tr>
<th>Property</th>
<th>Value</th>
</tr>

${Object.entries(event1).map(([key,value])=>`

<tr>

<td>${key}</td>

<td>${value}</td>

</tr>

`).join("")}

</table>

</div>
`;

console.log(event1);
console.log(Object.entries(event1));