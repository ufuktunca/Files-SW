let value;



//Linkler
value= document.links;
value = document.links[document.links.length-1];
value = document.links[document.links.length-1].getAttribute("class");
value = document.links[document.links.length-1].getAttribute("href");



//Scipt

value= document.scripts

//Form

value = document.forms;
value = document.forms.length;
value = document.form[0];
value = document.form[0].getAttribute("id");
value = document.form[0].getAttribute("name");

//Element Id ye göre seçme

value = document.getElementById("todo-form");
value = document.getElementById("tasks-title");

//Element classa göre seçme

value = document.getElementsByClassName("list-group-item");
value = document.getElementsByClassName("list-group-item")[0];

//Element tag e göre seçme

value = document.getElementsByTagName("li");

//Quert Selector - Css Selector -Tek bir element
value = document.querySelector("#todo-form");
value = document.querySelector("#tasks-title");

value = document.querySelector(".list-group-item");

value = document.querySelector("li");
value = document.querySelector("div");

//QuerySelectorAll -Tüm elementleri seç

value = document.querySelectorAll(".list-group-item");

value.forEach(function(el){
    console.log(el);
});

console.log(value);