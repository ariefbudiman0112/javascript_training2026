//tiket wahana
// let umur = 16
// let tinggi = 155

// if(umur < 17){
//     if(tinggi < 150){
//         console.log( "boleh masuk")
//     }else{
//         console.log("tidak boleh masuk")
//     }
// }

//Study case 1

/**
 * Cek apakah bilangan ganjil atau genap
 */
let number = 11
if(number % 2 === 0){
    console.log("Genap")
}else{
    console.log("Ganjil")
}

//Study case 2
/**
 * Cek PH
 */

let ph = 5

if (ph < 7 && ph >= 0){
    console.log("Asam")
}else if(ph === 7){
    console.log("Netral")
}else if(ph > 7){
    console.log("Basa")
}

//Study case 3
/**
 * BEGIN
 *      STORE number WITH ANY NUMBER
 *      IF number MOD 3 EQUAL 0 AND number MOD 5 EQUAL 0 
 *         PRINT kelipatan 3 dan 5
 *      ELSE IF number MOD 3 EQUAL 0
 *          PRINT kelipatan 3
 *      ELSE if number MOD 5 EQUAL 0
 *           PRINT kelipatan 5
 *      ELSE
 *          PRINT bukan kelipatan 3 atau 5
 * END
 * 
 */

// Study case 4
/**
 * Cek akses
 * BEGIN
 * 
 * STORE access WITH ANY STRING
 * STORE level WITH ANY NUMBER
 * 
 * SWITCH access
 *      CASE public
 *          IF level LESS THAN 5
 *              PRINT "public di bawah 5"
 *          ELSE IF level MORE THAN 5 
 *              PRINT "public di atas 5"
 *          ELSE IF level EQUAL 5
 *              PRINT "public five"
 *          ENDIF
 *      CASE private
 *          IF level LESS THAN 5
 *              PRINT "private di bawah 5"
 *          ELSE IF level MORE THAN 5 
 *              PRINT "private di atas 5"
 *          ELSE IF level EQUAL 5
 *              PRINT "private five"
 *          ENDIF
 *      CASE protected 
 *          IF level LESS THAN 5
 *              PRINT "protected di bawah 5"
 *          ELSE IF level MORE THAN 5 
 *              PRINT "protected di atas 5"
 *          ELSE IF level EQUAL 5
 *              PRINT "protected five"
 *          ENDIF
 *      DEFAULT
 *          IF access EQUAL EMPTY STRING
 *              PRINT "Input access"
 *          ELSE 
 *               PRINT "Access is not defined"
 * END
 */

//Study case 5
/**
 * Validasi pembelian
 * 
 * STORE status WITH ANY STRING
 * STORE umur WITH ANY NUMBER
 * 
 * 
 * 
 */

let diskon
let price = 100000
let status = "wna"
let umur = 20
let lama = 5

switch(status){
    case "wna":
        if (lama < 3){
            console.log("Tidak dapat diskon")
        }else if(lama >= 3){
            if(umur < 21){
                diskon = 
            }
        }
    case "wni"

}
    
