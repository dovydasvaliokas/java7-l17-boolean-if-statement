window.onload = function() {
    let x = 25;
    let y = -100;

    console.log(arSkaiciusYraTeigiamas(x));
    console.log(arSkaiciusYraTeigiamas(y));
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
 * Ji padaro tą ir tą
 */
function palygintiDuSkaicius() {

}


