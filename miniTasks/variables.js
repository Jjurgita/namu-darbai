/*

KINTAMŲJŲ INICIAVIMAS:

1. Sukurti 3 kintamuosius su skaičiaus tipo reikšmėmis
2. Sukurti 3 kintamuosius su teksto tipo reikšmėmis
3. Sukurti 3 sąrašo tipo kintamuosius su penkiomis skaičių tipo reikšmėmis
4. Sukurti 3 sąrašo tipo kintamuosius su penkiomis teksto tipo reikšmėmis


VEIKSMAI SU KINTAMAISIAIS:

1. Susumuoti visus skaičiaus tipo kintamuosius
2. Sujungti visus teksto tipo kintamuosius taip, jog tarp jų būtų sudarytas tarpas
3. Apskaičiuoti vertę iš sąrašų kurių verčių tipas yra skaičiai, pagal pateiktą logiką 1-2+3-4+5
4. Sujungti sąrašų vertes, kurių tipas yra tekstai, nuo sąrašo galo iki pradžios taip, jog tarp jų būtų kablelis ir tarpas


KINTAMŲJŲ PALYGINIMAS:

Lyginant, jei rezultatas tenkina palyginimo sąlygą, tai į console išvesti žodį “Pomidoras”, o jei sąlyga nėra tenkinama, išvesti sakinį “Bandykite kitą kartą.”.

1. Tarpusavyje palyginti skaičiaus tipo kintamuosius:
            kuris didesnis
            kuris mažesnis
            ar jie lygūs
            ar jie nelygūs
            kuris didesnis arba lygus
            kuris mažesnis arba lygus
2. Išvesti teksto tipo kintamųjų ilgius
3. Tarpusavyje palyginti teksto tipo kintamųjų ilgius:
            kuris didesnis
            kuris mažesnis
            ar jie lygūs
            ar jie nelygūs
            kuris didesnis arba lygus
            kuris mažesnis arba lygus
4. Išvesti sąrašo tipo kintamųjų ilgius
5. Tarpusavyje palyginti sąrašo tipo kintamųjų ilgius:
            kuris didesnis
            kuris mažesnis
            ar jie lygūs
            ar jie nelygūs
            kuris didesnis arba lygus
            kuris mažesnis arba lygus

*/

/* KINTAMŲJŲ INICIAVIMAS */

// 1.
const a = 1;
const b = 2020;
const c = -3.145;
console.log(a, b, c);

// 2.
const textA = 'Labas!';
const textB = 'Sakinys irgi yra tekstas.';
const textC = 'Sakinyje gali pasitaikyti skaičių 1, 2 ir kt. Gali būti ir kitų simbolių +, -, *, "" ir t.t.';
console.log(textA, '|', textB, '|', textC);

// 3.
const array1 = [1, 2, 3, 4, 5];
const array2 = [-5, -4, -3, -2, -1];
const array3 = [100, 200, 100, 200, 1000];
console.log(array1);
console.log(array2);
console.log(array3);

// 4.
const arrayText1 = ['Labas', 'rytas', 'tau', 'ir', 'tau'];
const arrayText2 = ['5', 'ryto', 'atsikeliau', 'tai', 'anksti'];
const arrayText3 = ['Kartais teksto', 'sąrašas', 'gali', 'būti', 'toks'];
console.log(arrayText1);
console.log(arrayText2);
console.log(arrayText3);

/* VEIKSMAI SU KINTAMAISIAIS */

// 1.
let suma = a + b + c;
console.log(suma);

// 2.
const sakinys = textA + ' ' + textB + ' ' + textC;
console.log(sakinys);

// 3.
const verte1 = array1[0] - array1[1] + array1[2] - array1[3] + array1[4];
console.log(verte1);
const verte2 = array2[0] - array2[1] + array2[2] - array2[3] + array2[4];
console.log(verte2);
const verte3 = array3[0] - array3[1] + array3[2] - array3[3] + array3[4];
console.log(verte3);

// 4.
const sakiniai1 = arrayText1[4] + ', ' + arrayText1[3] + ', ' + arrayText1[2] + ', ' + arrayText1[1] + ', ' + arrayText1[0];
console.log(sakiniai1);
const sakiniai2 = arrayText2[4] + ', ' + arrayText2[3] + ', ' + arrayText2[2] + ', ' + arrayText2[1] + ', ' + arrayText2[0];
console.log(sakiniai2);
const sakiniai3 = arrayText3[4] + ', ' + arrayText3[3] + ', ' + arrayText3[2] + ', ' + arrayText3[1] + ', ' + arrayText3[0];
console.log(sakiniai3);

/* KINTAMŲJŲ PALYGINIMAS */

// 1.
const skaicius1 = 2020;
const skaicius2 = 2020;

console.log(skaicius1 > skaicius2 ? 'Pomidoras' : 'Bandykite kitą kartą.');
console.log(skaicius1 < skaicius2 ? 'Pomidoras' : 'Bandykite kitą kartą.');
console.log(skaicius1 === skaicius2 ? 'Pomidoras' : 'Bandykite kitą kartą.');
console.log(skaicius1 !== skaicius2 ? 'Pomidoras' : 'Bandykite kitą kartą.');
console.log(skaicius1 >= skaicius2 ? 'Pomidoras' : 'Bandykite kitą kartą.');
console.log(skaicius1 <= skaicius2 ? 'Pomidoras' : 'Bandykite kitą kartą.');

// 2.
const textIlgis1 = textA.length;
console.log(textIlgis1);
const textIlgis2 = textB.length;
console.log(textIlgis2);
const textIlgis3 = textC.length;
console.log(textIlgis3);

// 3.
console.log(textA.length > textB.length ? 'Pomidoras' : 'Bandykite kitą kartą');
console.log(textA.length < textB.length ? 'Pomidoras' : 'Bandykite kitą kartą');
console.log(textA.length === textB.length ? 'Pomidoras' : 'Bandykite kitą kartą');
console.log(textA.length !== textB.length ? 'Pomidoras' : 'Bandykite kitą kartą');
console.log(textA.length >= textB.length ? 'Pomidoras' : 'Bandykite kitą kartą');
console.log(textA.length <= textB.length ? 'Pomidoras' : 'Bandykite kitą kartą');

// 4.
const arrayText1Ilgis = arrayText1.length;
console.log(arrayText1Ilgis);
const arrayText2Ilgis = arrayText2.length;
console.log(arrayText2Ilgis);
const arrayText3Ilgis = arrayText3.length;
console.log(arrayText3Ilgis);

// 5.
console.log(arrayText1Ilgis.length > arrayText2Ilgis.length ? 'Pomidoras' : 'Bandykite kitą kartą.');
console.log(arrayText1Ilgis.length < arrayText2Ilgis.length ? 'Pomidoras' : 'Bandykite kitą kartą.');
console.log(arrayText1Ilgis.length === arrayText2Ilgis.length ? 'Pomidoras' : 'Bandykite kitą kartą.');
console.log(arrayText1Ilgis.length !== arrayText2Ilgis.length ? 'Pomidoras' : 'Bandykite kitą kartą.');
console.log(arrayText1Ilgis.length >= arrayText2Ilgis.length ? 'Pomidoras' : 'Bandykite kitą kartą.');
console.log(arrayText1Ilgis.length <= arrayText2Ilgis.length ? 'Pomidoras' : 'Bandykite kitą kartą.');