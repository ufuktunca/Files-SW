

/*document.addEventListener("keypress",function(e){
      // console.log("Deneme");
      console.log(e.key);
      // console.log(e.which); //basılan harfi ascii kodunu getirir
});

// Keydown basıldığı an event başlar

document.addEventListener("keydown",function(e){
    // console.log("Deneme");
    console.log(e.key);
    // console.log(e.which); //basılan harfi ascii kodunu getirir
});


// Keyup tuş bırakıldığı an evetn başlar

document.addEventListener("keyup",function(e){
    // console.log("Deneme");
    console.log(e.key);
    // console.log(e.which); //basılan harfi ascii kodunu getirir
});*/

const text1 = document.getElementById("todo");
const header = document.querySelector(".card-header");

text1.addEventListener("keyup",function(e){
        header.textContent=e.target.value;
    //console.log(e.target.value);
})

console.log(text1);
console.log(header);
