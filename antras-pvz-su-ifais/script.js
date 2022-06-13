window.onload = function() {
    let x = 25;
    let y = -100;

    console.log(arSkaiciusYraTeigiamas(x));
    console.log(arSkaiciusYraTeigiamas(y));
    console.log("----------------------------");

    console.log(palygintiDuSkaicius(2, 2));
    console.log(palygintiDuSkaicius(5, 2));
    console.log(palygintiDuSkaicius(257, 368));
    console.log(palygintiDuSkaicius(-100, 1));
    console.log(palygintiDuSkaicius(237, -1000));
}


/**
 * Funkcija patikrina ar skaičius yra neigiamas ar teigiamas.
 * @param {*} skaicius - skaičius, kurį tikrina
 * @returns grąžina true, jeigu skaičius yra teigiamas; grąžina false - jeigu neigiamas.
 */
function arSkaiciusYraTeigiamas(skaicius) {
    if (skaicius > 0) {
        return true;
    }
    else {
        return false;
    }
}


/**
 * Funkcija palygini du skaičius tarpusavyje.
 * @param {*} sk1 - pirmas lyginamas skaičius
 * @param {*} sk2 - antras lyginamas skaičius
 * @returns 1 - jeigu pirmas didesnis; 0 - jeigu jie lygūs; -1 jeigu antras didesnis.
 */
function palygintiDuSkaicius(sk1, sk2) {
    if (sk1 === sk2) {
        return 0;
    }
    else if (sk1 > sk2) {
        return 1;
    }
    else {
        return -1;
    }
}


