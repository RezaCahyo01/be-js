/**
 * ms(milisekon)
function persiapan() {
    setTimeout(() => {
        console.log("Persiapan...");
    }, 3000);
}
function rebusAir() {
    setTimeout(() => {
        console.log("rebusAir...");
    }, 7000);
}
function masak() {
    setTimeout(() => {
        console.log("Masak...");
        console.log("Selesai...");
    }, 5000);
}
function main() {
    persiapan();
    rebusAir();
    masak();
}
main();
 
 */


// perbaiki dengan memakai callback

/**
 * function persiapan() {
    console.log("Persiapan...");
}
function rebusAir() {
    console.log("rebusAir...");
}
function masak() {
    console.log("Masak...");
    console.log("Selesai...");
}
function main() {
    setTimeout(() => {
        persiapan();
        setTimeout(() => {
            rebusAir();
            setTimeout(() => {
                masak();
            }, 5000);
        }, 2000);
    }, 3000);
}
main();
 */

// promise

/**
 * function persiapan() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve("Persiapan...");
        }, 3000);
    });
}
function rebusAir() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve("Rebus Air...");
        }, 7000);
    });
}
function masak() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve("Masak, Selesai");
        }, 3000);
    });
}
function main() {
    persiapan()
        .then(function (result) {
            console.log(result);
            return rebusAir();
        })
        .then(function (result) {
            console.log(result);
            return masak();
        })
        .then(function (result) {
            console.log(result);
        });
}
main();
 */


//asyn await

function persiapan() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve("Persiapan...");
        }, 3000);
    });
}

function rebusAir() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve("Rebus Air...");
        }, 7000);
    });
}

function masak() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve("Masak, Selesai");
        }, 3000);
    });
}

async function main() {
    console.log(await persiapan());
    console.log(await rebusAir());
    console.log(await masak());
}

main();