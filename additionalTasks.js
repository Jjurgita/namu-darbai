/* 

Papildomos užduotys iš 12/01 paskaitos:

 1 - duodamas skaiciu masyvas -> rasti vidurki
 2 - duodamas skaiciu masyvas -> rasti didziausia skaiciu
 3 - duodamas skaiciu masyvas -> rasti maziausia skaiciu
 4 - duodamas tekstas -> rasti kiek kartu yra panaudota ieskoma raide
 5 - duodamas tekstas -> sudaryti masyva, kuriame yra santrauka kiek ir kokios raides yra panaudotos

 */

/* 1 - duodamas skaiciu masyvas -> rasti vidurki */

const array = [5, 4, 9, 15, 6, 7, 5, 9, 48, 63];

function average(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        const number = array[i];
        sum += number;
    }
    const average = sum / array.length;
    return average;
}
console.log('Vidurkis:', average(array));

/* 2 - duodamas skaiciu masyvas -> rasti didziausia skaiciu */

const array2 = [10, 568, 425, 4, 6, 9, 78, 64, 854, 1256, 885, 462, 1, 0, 55664, -2484];

function largestNumber(array) {
    let largestNumber = 0;
    for (let i = 0; i < array.length; i++) {
        if (largestNumber < array[i]) {
            largestNumber = array[i];
        }
    }
    return largestNumber;
}
console.log('Didziausias skaicius:', largestNumber(array2));

/* 3 - duodamas skaiciu masyvas -> rasti maziausia skaiciu */

const array3 = [10, 568, 425, 4, 0, 9, 78, 462, -854, 1256, -885, 462, 1, 0, 55664, -2484];

function smallestNumber(array) {
    for (let i = 0; i < array.length; i++) {
        smallestNumber = 0;
        if (smallestNumber > array[i]) {
            smallestNumber = array[i];
        }
    }
    return smallestNumber;
}
console.log('Maziausias skaicius:', smallestNumber(array3));

/* ieskant min ir max reiksmia galima panaudoti ir Math.min / Math.max */

const array4 = [10, 568, 425, 4, 6, 9, 78, 64, 854, 1256, 885, 462, 1, 0, 55664, -2484];

const min = Math.min(...array4);
const max = Math.max(...array4);
console.log(`Didziausias skaicius: ${max}`);
console.log(`Maziausias skaicius: ${min}`);

/* 4 - duodamas tekstas -> rasti kiek kartu yra panaudota ieskoma raide */

const tekstas = 'Laba diena su vistiena'; //tekstas yra string

function pasikartojimai(tekstas, ieskomaRaide) {
    tekstas = tekstas.toLowerCase();
    ieskomaRaide = ieskomaRaide.toLowerCase();
    let pasikartojimai = 0;
    for (let i = 0; i < tekstas.length; i++) {
        const raide = tekstas[i];
        if (raide === ieskomaRaide) {
            pasikartojimai++;
        }
    }
    return pasikartojimai;
}

console.log('Kiek kartu ieškoma raidė pasikartoja tekste?', 'Atsakymas:', pasikartojimai(tekstas, 'a'));

/* 5 - duodamas tekstas -> sudaryti masyva, kuriame yra santrauka kiek ir kokios raides yra panaudotos */

const tekstas2 = 'iaafffeebjjyyybb';

function masyvas(tekstas) {
    let kiek = tekstas.split('');
    let raides = [];
    let suma = 1;

    for (let i = 0; i < kiek.length; i++) {
        if (kiek[i] === kiek[i + 1]) {
            suma++;
        }
        else {
            let reiksme = `${suma}${kiek[i]}`;
            raides = [...raides, reiksme];
            suma = 1;
        }

    }
    return raides.join('');
}

console.log(masyvas(tekstas2));