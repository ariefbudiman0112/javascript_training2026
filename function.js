function checkFactors(number){
    let temp = 0;
    for (let i = 0; i <= number; i++) {
        if(number % i === 0){
            temp++;
        }
    }
    return temp;
}

console.log(checkFactors(12))

function cekBilanganPrima(number){
    let factors = checkFactors(number);

    return factors === 2 ? "Prime number" : "Not prime number";
}

console.log(cekBilanganPrima(12))

function pecahKalimat(kalimat){
    let arrResult = [];
    let temp = "";
    for(let i = 0; i < kalimat.length; i++){
        if(kalimat[i] !== " "){
            temp += kalimat[i];
        }else{
            arrResult.push(temp);
            temp = "";
        }

        if (i === kalimat.length - 1) {
            arrResult.push(temp);
            temp = "";
        }
    }
    return arrResult;
}

console.log(pecahKalimat("Buka puasa bersama teman kuliah"));

const selisihMaxMin = function(stats){
    let max = stats[0];
    let min = stats[0];

    for(let i = 0; i < stats.length; i++){

    }
}


function checkPalindrome(kata){
    if(kata === undefined || kata === ""){
        return "Masukan sebuah kata";
    }else{
        let temp = "";

        for(let i = kata.length-1; i >= 0; i--){
            temp += kata[i];
        }
        if(kata === temp){
            return true;
        }else{
            return false;
        }
    }
}

console.log(checkPalindrome("katak"));

let students = [
    [1,"Arief", 3.5],
    [2,"Andi", 4.0],
]

const addStudent = function(name, gpa){
    let lastIndex = students.length - 1;
    let id = students[lastIndex][0] + 1;

    students.push([id, name, gpa]);
}

const showStudents = function(){
    console.log("Students:");
    students.forEach((student)=>{
        console.log(`${student[0]}.${student[1]}, IPK: ${student[2]}`);
    });
}

const deleteStudent = function(id){
    students = students.filter((student) => student[0] !== id);
}

const updateStudent = function(id){
    students = students.map((student) => {
        if(student[0] === id){
            return ([id, name, gpa]);
        }
        return student;
    })
}

addStudent("Vincent", 3.6)
addStudent("steven", 3.6)
deleteStudent(2);
updateStudent(3,"popular", 4.0);
showStudents();
console.log(students);