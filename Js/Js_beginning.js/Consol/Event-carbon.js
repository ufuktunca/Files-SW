const cardbody = document.querySelectorAll(".card-body")[1];

cardbody.addEventListener("click",function(e){
    if(e.target.className === "fa fa-remove"){
        console.log("silme");
    }
     if(e.target.className === "form-control"){
        console.log("filtre");
    }
     if(e.target.className === "clear-todos"){
        console.log("tüm taskları silme");
        e.preventDefault;
        
    }
});