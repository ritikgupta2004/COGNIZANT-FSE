const events=[
    {name:"Music Festival",category:"Music"},
    {name:"Food Carnival",category:"Food"},
    {name:"Workshop on Baking",category:"Workshop"},
    {name:"Rock Concert",category:"Music"}
];

const container=document.getElementById("events");
const category=document.getElementById("category");
const search=document.getElementById("search");

function display(list){

    container.innerHTML="";

    list.forEach(event=>{

        container.innerHTML+=`
        <div class="card">
            <h2>${event.name}</h2>
            <p>${event.category}</p>
            <button onclick="register('${event.name}')">Register</button>
        </div>
        `;

    });

}

function register(name){
    alert(`Registered for ${name}`);
}

category.onchange=function(){

    if(this.value==="All"){
        display(events);
    }else{
        display(events.filter(event=>event.category===this.value));
    }

};

search.addEventListener("keydown",function(){

    const keyword=this.value.toLowerCase();

    const filtered=events.filter(event=>
        event.name.toLowerCase().includes(keyword)
    );

    display(filtered);

});

display(events);