

const todoinput = document.getElementById("todo");
const todobut = document.querySelector(".btn.btn-danger");
const todosearch = document.getElementById("filter");
const list1 = document.querySelector(".list-group");
const cle = document.querySelector("#clear-todos");
const form = document.querySelector("#todo-form");
const alert_loca = document.getElementById("alert");
const body2 = document.querySelectorAll(".card-body")[1];

eventListener();

//tüm eventleri toplama ve çalıştırma
function eventListener(){
        form.addEventListener("submit",addtodo);
        document.addEventListener("DOMContentLoaded",loadstorage);
        body2.addEventListener("click",deletetodo);
        todosearch.addEventListener("keyup",search);
        cle.addEventListener("click",clearall);
}
//inputun boş olup olmadığını kontrol etme
function addtodo(e){
   const todo1=todoinput.value.trim();

   if(todo1 ===""){
    showalert("danger","lütfen bir todo girin");
   } else{  
       showalert("success","todonuz başarıyla eklendi");
    createare(todo1);
        //storage push
        addstorage(todo1);
       
   }
    e.preventDefault();

}
//mode ekleme
function createare(todo1){

    //Elementleri oluşturma
    const list = document.createElement("li");
    const link = document.createElement("a");
    const icon = document.createElement("i");

     //li yi oluşturma
    list.className="list-group-item d-flex justify-content-between";
    list.appendChild(document.createTextNode(todo1));
    link.href="#";
    //a yı oluşturma
    link.className="delete-item";
    //i yi oluşturma
    icon.className="fa fa-remove";

    //eklemeler
    link.appendChild(icon);
    list.appendChild(link);


    //ul ye li yi ekleme
    list1.appendChild(list);

    //değer girilditekn sonra input alanın boşalması için yapılır
    todoinput.value="";


}
//alert çıkarma
function showalert(type,message){
    const alert_div = document.createElement("div");
    alert_div.className="alert alert-"+type;
    alert_div.role="alert";
    alert_div.appendChild(document.createTextNode(message));
    form.appendChild(alert_div);

    //settimeout
    setTimeout(function(){
        alert_div.remove();
    },4000);
}
//local storageden arrayi çekme
function getstorage(){
    let todo;
    if(localStorage.getItem("todo")===null){
      todo=[];
    }
    else{
        todo=JSON.parse(localStorage.getItem("todo"));
    }
    return todo;
}

//datayı local storageye ekleme
function addstorage(newtodo){
    let todo = getstorage();

    todo.push(newtodo);

    localStorage.setItem("todo",JSON.stringify(todo));
}

//datayı local storageden yükleme
function loadstorage(e){
        let todo1 =getstorage();
        todo1.forEach(function(todo){
            createare(todo);
            console.log("asdfas");
        });
}


//datayı ui den silme
function deletetodo(e){
   if(e.target.className === "fa fa-remove"){
       e.target.parentElement.parentElement.remove();
       showalert("info","Node silindi");
       deletefromstorage(e.target.parentElement.parentElement.textContent);
   }
}


//Datayı local storageden silme
function deletefromstorage(deletetodo){
    let todos = getstorage();
    todos.forEach(function(todo,index){
        if(deletetodo === todo){
            todos.splice(index,1);
        }
    });

    localStorage.setItem("todo",JSON.stringify(todos));
}


//Search
function search(e){
    let value = e.target.value.toLowerCase();
    const li = document.querySelectorAll(".list-group-item");
    
    li.forEach(function(text){
     const text_li = text.textContent.toLowerCase();

     if(text_li.indexOf(value) === -1){
          
          text.setAttribute("style","Display:none !important");

     }
     else{
         text.setAttribute("style","Display:block");
     }
    });

}

function clearall(e){

    while(list1.firstElementChild !== null){
        list1.removeChild(list1.firstElementChild);
    }
    localStorage.removeItem("todo");
}