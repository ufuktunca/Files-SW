
//let value1,value2;

arr = [100,200,300,400,500];

//value1=arr[0];
//value2=arr[1];

let [value1,value2]=arr;

console.log(value1,value2);

const number = {
    a:50,
    b:40,
    c:30,
    d:20,
    e:10
};

let {a:deger1,c,e} = number;

console.log(deger1,c,e);

const lang = () => {
   return ["java","c","js"];
}

 let [lang1,lang2,lang3]=lang();

 console.log(lang1,lang2,lang3);

 const person = {
     name:"ufuk",
     surname:"tunca",
     func = () => {
         console.log("showing...");
     }
 };

 let {name:isim,surname:soyad,func:fonksioyn} = person;

 console.log(isim,soyad,fonksioyn);