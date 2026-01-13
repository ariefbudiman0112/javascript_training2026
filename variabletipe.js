let myName = 'John';
let age = 31;
let isStudent = ['Arief', 5.5, true];
let person = {
    name: 'Admin',
    role: 'Admin'
}
let myFunctio = function () {
    return 'Hello world';
}

let value;
let emptyString = null;

console.log(myName);
console.log(myName);

//Study case
/**
 * Algorithm volume balok
 * 
 * 1. Buat variable panjang
 * 2. Buat variable lebar
 * 3. Buat variable tinggi
 * 4. Set variable volume balok
 * 5. Masukkan variable volumebalok dengan rumus balok
 * 
 * Pseudocode
 * 
 * BEGIN
 *      STORE panjang WITH ANY NUMBER
 *      STORE lebar WITH ANY NUMBER
 *      STORE tinggi WITH ANY NUMBER
 *      
 *      SET volumebalok TO panjang MUL lebar MUL tinggi
 * 
 *      PRINT volumebalok
 * END
 */

// let p = 10;
// let l = 5;
// let t = 2;

// let volume = p*l*t;
// console.log(volume);


/**
 * Algorithm permukaan balok
 * 
 * 1. Buat variable panjang
 * 2. Buat variable lebar
 * 3. Buat variable tinggi
 * 4. Set variable luas
 * 5. Masukkan variable luas dengan rumus balok
 * 
 * Pseudocode
 * 
 * BEGIN
 *      STORE panjang WITH ANY NUMBER
 *      STORE lebar WITH ANY NUMBER
 *      STORE tinggi WITH ANY NUMBER
 *      
 *      SET alas TO panjang MUL lebar
 *      SET depan TO panjang MUL tinggi
 *      SET samping TO lebar MUL tinggi
 * 
 *      SET luas TO 2 MUL (alas ADD atas ADD samping)
 * 
 *      PRINT luas
 * END
 */

// let p1 = 7;
// let l1 = 6;
// let t1 = 5;

// let alas = p * l;
// let depan = p * t;
// let samping = l*t;


/**
 * Algorithm volume tabung
 * 
 * 1. Buat variable pi
 * 2. Buat variable r
 * 3. Buat variable t
 * 4. Set variable volume
 * 5. Masukkan variable volume dengan rumus volume tabung
 * 
 * Pseudocode
 * 
 * BEGIN
 *      STORE pi WITH 3.14
 *      STORE r WITH ANY NUMBER
 *      STORE t WITH ANY NUMBER
 * 
 *      SET volume TO pi MUL r MUL r MUL t
 * 
 *      PRINT volume
 * END
 */

// const pi = 3.14;
// let r = 7;
// let t2 = 10;

// let volumetabung = pi * r**2 * t2;
// console.log(Number(volumetabung.toFixed(2)));

/**
 * Algorithm volume kerucut
 * 
 * 1. Buat variable pi
 * 2. Buat variable r
 * 3. Buat variable t
 * 4. Set variable volume
 * 5. Masukkan variable volume dengan rumus volume kerucut
 * 
 * Pseudocode
 * 
 * BEGIN
 *      STORE pi WITH 3.14
 *      STORE r WITH ANY NUMBER
 *      STORE t WITH ANY NUMBER
 * 
 *      SET volume TO 1/3 mul pi MUL r MUL r MUL t
 * 
 *      PRINT volume
 * END
 */

// const pi = 3.14;
// let r = 5;
// let t = 10;

// let volumekerucut = 1/3 * pi * r**2 * t;

// console.log(Number(volumekerucut.toFixed(2)))

/**
 * Algorithm luas permukaan tabung
 * 
 * 1. Buat variable pi
 * 2. Buat variable r
 * 3. Buat variable t
 * 4. Set variable volume
 * 5. Masukkan variable volume dengan 2 * pi * r * (r * t)
 * 
 * Pseudocode
 * 
 * BEGIN
 *      STORE pi WITH 3.14
 *      STORE r WITH ANY NUMBER
 *      STORE t WITH ANY NUMBER
 * 
 *      SET volume TO 2 mul pi MUL r MUL r ADD t
 * 
 *      PRINT volume
 * END
 */

const pi = 3.14;
let r = 5;
let t = 10;

let luas = 2 * pi * r * (r+t);

console.log(Number(luas.toFixed(2)))