let value;



//Stringe çevirme

value=String(121);
value = String(3.14);
value= String([1,2,3,4]);
value=(10).toString();
value=(3.14).toString();



//Sayıya çevirme

value=Number("5456");
value=Number(null);//0
value=Number("Hello");//Sayı olmadığı için çeviremez
value=parseFloat("3.14");
value=parseInt("3");


console.log(value);
console.log(typeof value);