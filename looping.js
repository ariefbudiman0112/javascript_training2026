let number = 10;

for(let i = 1;i <= number; i++){
    if(i % 2 === 0){
        console.log(i + " adalah Genap");
    }else{
       console.log(i + " adalah Ganjil");
    }
}

let number2 = 15;
let count = 0;

for(let i = 0; i <= number2; i++){
    if(number2 % i === 0){
        count += 1;
    }
}

console.log("Faktor dari " + number2 + " adalah " + count)


let number3 = 17;
let count2 = 0;

for(let i = 0; i <= number3; i++){
    if(number3 % i === 0){
        count2++;
    }
}

if(count2 === 2){
    console.log("Bilangan " + number3 + " adalah prima")
}else{
    console.log("Bilangan " + number3 + " adalah bukan prima")
}

let number4 = 5;
let count3 = 1;

for(let i = number4; i >= 1; i--){
    count3 *= i;
}

console.log("Hasil faktorialnya adalah " + count3)


let number5 = 5;
let temp = "";

for(let i = 0; i<number5; i++){
    for(let j = 0; j<=i; j++){
        temp += "*";
    }
    console.log(temp);
    temp="";
}

let number6 = 5;
let value = "";

for(let i = 1; i <= number6; i++){
    for(let j = 1; j<=i; j++){
        value += j;
    }
    console.log(value);
    value = "";
}

let number7 = 5;
let value2 = "";

for(let i = 1; i <= number7; i++){
    
    for(let j = 1; j<=i; j++){
        if(number7 % i === 0){
            value2 += j;
           
            
        }
         console.log(value2);
         value2 = "";
    }
}
