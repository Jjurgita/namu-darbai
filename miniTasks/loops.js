/*

CIKLO for PANAUDOJIMAS:

1. Suskaičiuoti ką gausime susumavus skaičius intervale tarp (imtinai):
            0 - 0
            0 - 4
            0 - 100
            574 - 815
            -50 - 50
            -70 - 30
2. Panaudojant ciklą perrašyti tekstinio tipo kintamųjų reikšmes iš kito galo, pvz.: “abcdef” -> “fedcba”
3. Suskaičiuoti, kiek nurodytame intervale yra skaičių, kurie dalijasi be liekanos iš 3, 5 ir 7 atskirai:
            0 - 11
            8 - 31
            -18 - 18
            rezultatą pateikti tokiu formatu:
                Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 3 yra 4 vienetai.
                Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 5 yra 3 vienetai.
                Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 7 yra 2 vienetai.

*/

// 1.
const nuo = -70;
const iki = 30;
let suma = 0;

for (let i = nuo; i < iki; i++) {
    suma += i;
}
console.log('Gaunama suma:', suma);

// 2.
const tekstas = 'abcdef';
let backward = '';

for (let i = tekstas.length - 1; i >= 0; i--) {
    const raide = tekstas[i];
    backward += raide;
}
console.log('Reikšmė iš kito galo:', backward);

// 3.
const pradzia = 0;
const pabaiga = 11;
const daliklis = 7;

let kiekSkaiciu = 0;

for (let i = pradzia; i < pabaiga; i++) {
    if (i % daliklis === 0) {
        kiekSkaiciu++;
    }
}
console.log(`Skaičių intervele tarp ${pradzia} ir ${pabaiga} besidalinančių be liekanos iš ${daliklis} yra ${kiekSkaiciu} vienetai`);