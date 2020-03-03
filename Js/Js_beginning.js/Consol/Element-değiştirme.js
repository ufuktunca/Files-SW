//Replace

const h_5=document.querySelector(".card-body h5");


const title = document.createElement("h5");
title.appendChild(document.createTextNode("Title"));
title.id="tasks-title";
title.className="card-title";

//eski element
const old=document.querySelector("#tasks-title");

h_5.replaceChild(title,old);

console.log(title);