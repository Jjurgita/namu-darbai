/*

4. Funkcija pavadinimu “didziausiasSkaiciusSarase”:
    priima vieną kintamąjį
    jei perduotas kintamasis nėra sąrašo tipo, tai išveda pranešimą “Pateikta netinkamo tipo reikšmė.”
    jei sąrašas yra tuščias, tai išveda pranešimą “Pateiktas sąrašas negali būti tuščias.”
    priešingu atveju, funkcija tęsia darbą
    pereina per visą pateiktą sąrašą ir į atskirą kintamąjį įsimena skaičių, kuris tuo metu yra didžiausias
    gražina didžiausią surastą skaičių
        TESTAI:
        console.log( didziausiasSkaiciusSarase( [ 1 ] ) );
        rezultatas: 1
        console.log( didziausiasSkaiciusSarase( [ 1, 2, 3 ] ) );
        rezultatas: 3
        console.log( didziausiasSkaiciusSarase( [ -5, 78, 14, 0, 18 ] ) );
        rezultatas: 78
        console.log( didziausiasSkaiciusSarase( [ 69, 69, 69, 69, 66 ] ) );
        rezultatas: 69
        console.log( didziausiasSkaiciusSarase( [ -1, -2, -3, -4, -5, -6, -7, -8 ] ) );
        rezultatas: -1
        console.log( didziausiasSkaiciusSarase( “pomidoras” ) );
        rezultatas: “Pateikta netinkamo tipo reikšmė.”
        console.log( didziausiasSkaiciusSarase( [] ) );
        rezultatas: “Pateiktas sąrašas negali būti tuščias.”

5. Funkcija pavadinimu “isrinktiRaides”:
    priima du kintamuosius:
    pirmasis nurodo tekstą, su kuriuo reikės atlikti užduotį
    antrasis nurodo kas kelintą raidę išrinkti
    patikrinti, ar pirmasis kintamasis yra teksto tipo:
    jei ne, išvedame pranešimą “Pirmasis kintamasis yra netinkamo tipo.”
    priešingu atveju tęsiame darbą
    patikrinti, ar pirmasis kintamasis yra ne tuščias tekstas ir ne didesnis nei 100 simbolių:
    jei ne, išvedame pranešimą “Pirmojo kintamojo reikšmė yra netinkamo dydžio.”
    priešingu atveju tęsiame darbą
    patikrinti, ar antrasis kintamasis yra skaičiaus tipo:
    jei ne, išvedame pranešimą “Antrasis kintamasis yra netinkamo tipo.”
    priešingu atveju tęsiame darbą
    patikriname, ar antrojo kintamojo vertė yra didesnė už nulį:
    jei ne, išvedame pranešimą “Antrasis kintamasis turi būti didesnis už nulį.”
    priešingu atveju tęsiame darbą
    patikriname, ar antrojo kintamojo vertė yra ne didesnė už pirmojo kintamojo ilgį:
    jei ne, išvedame pranešimą “Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį.”
    priešingu atveju tęsiame darbą
    išrenkame iš nurodyto teksto kas kelintą raidę (pagal antrojo kintamojo žingsnį)
    išrinktas raides sudėti į atskirą kintamąjį, kuris yra teksto tipo
    gražina rezultatą
        TESTAI:
        console.log( isrinktiRaides( “abcdefg”, 2 ) );
        rezultatas: “bdf”
        console.log( isrinktiRaides( “abcdefghijkl”, 3 ) );
        rezultatas: “cfil”
        console.log( isrinktiRaides( “abc”, 0 ) );
        rezultatas: “Antrasis kintamasis turi būti didesnis už nulį.”
        console.log( isrinktiRaides( “abc”, 4 ) );
        rezultatas: “Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį.”
        console.log( isrinktiRaides( 1561, 2 ) );
        rezultatas: “Pirmasis kintamasis yra netinkamo tipo.”

6. Funkcija pavadinimu “dalyba”:
    turi priimti du kintamuosius
    reikia sugalvoti ir įgyvendinti kuo daugiau logiškų patikrinimų, kurie padėtų apsaugoti funkciją nuo neteisingo panaudojimo
    esant blogoms sąlygoms, išvesti atitinkamą pranešimą
    esant geroms - tęsti darbą
    į atskirą kintamąjį išsaugoti apskaičiuotą dviejų skaičių dalybos reikšmę
    daliname pirmąjį skaičių iš antrojo
    gražinti suskaičiuotą reikšmę
        TESTAI:
        sugalvoti bent 5 testus, kurie bendrai iš esmės patvirtintu gerą funkcijos veikimą

*/

// 4.
function didziausiasSkaiciusSarase(array) {
    if (typeof array !== 'object') {
        return ('Pateikta netinkamo tipo reikšmė.');
    }
    if (array.length === 0) {
        return ('Pateiktas sąrašas negali būti tuščias.');
    }

    let didSkaicius = -Infinity;
    for (let skaicius of array) {
        if (skaicius > didSkaicius) {
            didSkaicius = skaicius;
        }
    }
    return didSkaicius;
}

console.log(didziausiasSkaiciusSarase([1]));
console.log(didziausiasSkaiciusSarase([1, 2, 3]));
console.log(didziausiasSkaiciusSarase([-5, 78, 14, 0, 18]));
console.log(didziausiasSkaiciusSarase([69, 69, 69, 69, 66]));
console.log(didziausiasSkaiciusSarase([-1, -2, -3, -4, -5, -6, -7, -8]));
console.log(didziausiasSkaiciusSarase('pomidoras'));
console.log(didziausiasSkaiciusSarase([]));
console.log('-----------------------------------');

// 5.
function isrinktiRaides(tekstas, zingsnis) {
    if (typeof tekstas !== 'string') {
        return ('Pirmasis kintamasis yra netinkamo tipo.');
    }
    if (tekstas === '' || tekstas.length > 100) {
        return ('Pirmojo kintamojo reikšmė yra netinkamo dydžio.');
    }
    if (zingsnis > tekstas.length) {
        return ('Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį.');
    }
    if (zingsnis <= 0) {
        return ('Antrasis kintamasis turi būti didesnis už nulį.');
    }

    let isrinktosRaides = '';
    for (let i = zingsnis - 1; i < tekstas.length; i += zingsnis) {
        const raide = tekstas[i];
        isrinktosRaides += raide;
    }

    return isrinktosRaides;
}

console.log(isrinktiRaides('abcdefg', 2))
console.log(isrinktiRaides('abcdefghijkl', 3));
console.log(isrinktiRaides('abc', 0));
console.log(isrinktiRaides('abc', 4));
console.log(isrinktiRaides(1561, 2));
console.log('-----------------------------------');

// 6.
function dalyba(pirmas, antras) {
    if (typeof pirmas !== 'number' || typeof antras !== 'number') {
        return ('Kintamasis/kintamieji turi būti skaičiaus tipo.');
    }
    if (isNaN(pirmas) || isNaN(antras)) {
        return ('Kintamasis/kintamieji turi būti tikri skaičiai.')
    }
    if (!isFinite(pirmas) || !isFinite(antras)) {
        return ('Kintamasis/kintamieji negali būti Infinity.')
    }

    let rezultatas = pirmas / antras;
    return rezultatas;
}

console.log(dalyba(50, 10));
console.log(dalyba(5.01, -10.01));
console.log(dalyba('Labas', 10));
console.log(dalyba(50, 'rytas'));
console.log(dalyba('Labas', 'rytas'));
console.log(dalyba([50, 10], 10));
console.log(dalyba(['Labas rytas', 'Labas vakaras'], [10, 5, 1]));
console.log(dalyba(50, NaN));
console.log(dalyba(50, Infinity));
console.log(dalyba(50, -Infinity));