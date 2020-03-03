let value;

const now = new Date(); //şuanki tarihi verir

const birth=new Date("5-3-1999"); //tarih ayarlama

value=birth;

value=birth.getMonth();

value=birth.getDate();
value=birth.getDay();

birth.setDate(6);
birth.setMonth(6);
birth.setFullYear(2006);
birth.setHours(9);

console.log(value);