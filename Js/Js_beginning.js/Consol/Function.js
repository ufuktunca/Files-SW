

function Hello(name="isim yok",surname="soyisim yok") {
    console.log(`name${name} surname${surname}`);
}

Hello("Ufuk","Tunca");
Hello();//isim ve soy isim yok olarak çıkar


function cube(x){
    return(
        x*x
    )
}

let a=cube(3);

console.log(a);