let value;

const todolist=document.querySelector(".list-group");
const todo = document.querySelector(".list-group-item:nth-child(2)");
const cardrow = document.querySelector(".card.row");


value =todolist;
value = todo;
value = cardrow;

//Child nodes - text dahil

value = todolist.childNodes;

//Child nodes - Element


value = todolist.children;
value = todolist.children[0];
value = todolist.children[0].textContent="deneme";

value = cardrow;
value = cardrow.children;
value = cardrow.children[2].children[1].textContent="deneme2";

value = todolist;
value=todolist.firstChild;
value=todolist.lastChild;
value=todolist.children.length;

value=cardrow;
value=cardrow.parentElement;
value=cardrow.parentElement.parentElement;

//Element kardeşi bulma

value = todo;
value = todo.previousElementSibling;
value = todo.nextElementSibling;

console.log(value);