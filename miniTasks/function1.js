/*

FUNKCIJOS

1. Funkcija pavadinimu “tusciaFunkcija”:
    nepriima jokių kintamųjų
    neatlieka jokios vidinės logikos
    gražina boolean tipo reikšmę “false”
        TESTAS:
        console.log( tusciaFunkcija() );
        rezultatas: false

2. Funkcija pavadinimu “daugyba”:
    priima du skaičiaus tipo kintamuosius
    atskirame kintamajame įsimena sandaugos reikšmę
    gražina saudaugos rezultatą
        TESTAI:
        console.log( daugyba( skaicius1, skaicius2 ) );
        console.log( daugyba( skaicius3, skaicius2 ) );
        console.log( daugyba( skaicius1, skaicius3 ) );
        rezultatas: teisingos reikšmės;

3. Funkcija pavadinimu “skaitmenuKiekisSkaiciuje”:
    priima vieną kintamąjį
    jei perduotas kintamasis nėra skaičiaus tipo, tai išveda pranešimą “Pateikta netinkamo tipo reikšmė.”
    priešingu atveju, funkcija tęsia darbą
    į atskirą kintamąjį įsimena skaičių sudarančių skaitmenų kiekį
    gražina skaitmenų kiekį
        TESTAI:
        console.log( skaitmenuKiekisSkaiciuje( 5 ) );
        rezultatas: 1
        console.log( skaitmenuKiekisSkaiciuje( 781 ) );
        rezultatas: 3
        console.log( skaitmenuKiekisSkaiciuje( 37060123456 ) );
        rezultatas: 11
        console.log( skaitmenuKiekisSkaiciuje( true ) );
        rezultatas: “Pateikta netinkamo tipo reikšmė.”
        console.log( skaitmenuKiekisSkaiciuje( “asd” ) );
        rezultatas: “Pateikta netinkamo tipo reikšmė.”
        console.log( skaitmenuKiekisSkaiciuje( NaN ) );
        rezultatas: “Pateikta netinkamo tipo reikšmė.”

*/

// 1.
function tusciaFunkcija() {
    return false;
}
console.log(tusciaFunkcija());

// 2.
function daugyba(pirmas, antras) {
    const rezultatas = pirmas * antras;
    return rezultatas;
}

const skaicius1 = 5;
const skaicius2 = 10;
const skaicius3 = 100;

const rez1 = daugyba(skaicius1, skaicius2);
const rez2 = daugyba(skaicius3, skaicius2);
const rez3 = daugyba(skaicius1, skaicius3);
console.log('Teisinga reikšmės pirmu atveju:', rez1);
console.log('Teisinga reikšmės antru atveju:', rez2);
console.log('Teisinga reikšmės trečiu atveju:', rez3);

// 3.

function skaitmenuKiekisSkaiciuje(skaicius) {
    if (typeof skaicius !== 'number') {
        return ('Pateikta netinkamo tipo reikšmė.');
    }
    if (isNaN(skaicius)) {
        return ('Pateikta netinkamo tipo reikšmė.');
    }

    let skaitmenuKiekis = 0;
    const ilgis = '' + skaicius;
    skaitmenuKiekis = ilgis.length;

    return skaitmenuKiekis;
}
console.log(skaitmenuKiekisSkaiciuje(true));
console.log(skaitmenuKiekisSkaiciuje('asd'));
console.log(skaitmenuKiekisSkaiciuje(NaN));

console.log(skaitmenuKiekisSkaiciuje(5));
console.log(skaitmenuKiekisSkaiciuje(781));
console.log(skaitmenuKiekisSkaiciuje(37060123456));


