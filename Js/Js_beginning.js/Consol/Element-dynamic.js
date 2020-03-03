
//Yeni element oluşturmna

const newLink = document.createElement("a");
const cardbody = document.getElementsByClassName("card-body")[1];

newLink.id="clear-todos";
newLink.className="btn btn-danger";
newLink.href="https://www.google.com.tr";
newLink.target="_blank";
newLink.appendChild(document.createTextNode("buton"));//Butona isim verme

cardbody.appendChild(newLink);


console.log(cardbody);
console.log(newLink);