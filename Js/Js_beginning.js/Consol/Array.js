const ar = [47,84,59,7,54,5];

let value;

value=ar[2];

ar[2]=66;

//Değer ekleme Push

ar.push(4);//arrayin sonuna ekleme yapar
ar.unshift(9);//arrayin başıa ekleme yapar

ar.pop();//arrayin sonundaki değeri çıkarır
ar.shift();//arrayin başındaki değeri çıkarır

ar.splice(0,3);//0 ve 3 . index arasındaki değerleri atar

ar.reverse();//arrayi ters çevirir


console.log(ar);