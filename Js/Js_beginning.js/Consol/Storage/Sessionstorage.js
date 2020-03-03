

const ad = document.querySelector("#add");
const del = document.querySelector("#delete");
const cle = document.querySelector("#clear");

console.log(ad,del,cle);

const ad_key = document.querySelector("#addkey");
const ad_value = document.querySelector("#addvalue");
const delete_key= document.querySelector("#deletekey");


ad.addEventListener("click",function(e){
    sessionStorage.setItem(ad_key.value,ad_value.value);
});

del.addEventListener("click",function(e){
    sessionStorage.removeItem(delete_key.value);
});

cle.addEventListener("click",function(e){
    sessionStorage.clear();
})