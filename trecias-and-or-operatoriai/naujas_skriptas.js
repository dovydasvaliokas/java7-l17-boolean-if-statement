window.onload = function() {
    // && - AND (IRGI)
    // || - OR (ARBA)

    console.log(arSkaiciusIntervaleNuo0Iki100(50));
    console.log(arSkaiciusIntervaleNuo0Iki100(-20));
    console.log(arSkaiciusIntervaleNuo0Iki100(562161));
    console.log(arSkaiciusIntervaleNuo0Iki100(37));
    console.log("------------------------");

    console.log(arPenketoArbaTrejetoKartotinis(30));
    console.log(arPenketoArbaTrejetoKartotinis(27));
    console.log(arPenketoArbaTrejetoKartotinis(29));
    console.log(arPenketoArbaTrejetoKartotinis(50));
    console.log(arPenketoArbaTrejetoKartotinis(25));
    console.log(arPenketoArbaTrejetoKartotinis(11));
}




function arSkaiciusIntervaleNuo0Iki100(skaicius) {
    if ((skaicius > 0) && (skaicius < 100)) {
        return true;
    }
    else {
        return false;
    }
}



function arPenketoArbaTrejetoKartotinis(skaicius) {
    if ((skaicius % 5 === 0) || (skaicius % 3 === 0)) {
        return true;
    }
    else {
        return false;
    }
}