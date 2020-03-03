const element= document.querySelector("#clear-todos"); //# id çağırmada kullanılır.

//Element Özellikleri

//console.log(element.id);
//console.log(element.className);
//console.log(element.classList);
//console.log(element.textContent);
//console.log(element.innerHTML);
console.log(element.style);



//Style ve element özelliklerini değiştirme

element.className = "btn btn-primary";
element.style.color="#000";
element.style.marginLeft="50px";
//element.href="https://www.google.com.tr";
element.textContent="Sil";

/*const element2=document.querySelectorAll(".list-group-item");
element2.forEach(function(el){
    el.style.color="red";
    el.style.background="#eee";
});*/


let element2 = document.querySelector("li:last-child");
element2 = document.querySelector("li:nth-child(2)");
element2 = document.querySelectorAll("li:nth-child(odd)");//tek olanları getirir;
element2 = document.querySelectorAll("li:nth-child(even)");//çift olanları getirir

console.log(element2);

//console.log(element);