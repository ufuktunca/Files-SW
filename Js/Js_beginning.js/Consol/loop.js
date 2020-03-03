
const names = ["ufuk","barış","anıl","ata","tolga"];

/*for(let i=0;i<names.length;i++){
    console.log(names[i]);
}*/

names.forEach(function(names,index){
    console.log(names,index);
})

const infos = [
    {name:"ufuk",age:25},
    {name:"ali",age:25},
    {name:"ahmet",age:25}   
]

const names1 =infos.map(function(infos){
         return infos.name;
});

console.log(names);