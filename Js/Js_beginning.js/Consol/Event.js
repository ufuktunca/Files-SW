const filterInput= document.getElementById("filter");
const todoForm= document.getElementById("todo-form");


filterInput.addEventListener("focus",function(e){
    console.log("asd");
});


todoForm.addEventListener("submit",function(e){
    console.log("submit");
    e.preventDefault();
})