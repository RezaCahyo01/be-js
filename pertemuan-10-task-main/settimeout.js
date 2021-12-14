console.log("Satu");

// 5000 mili = 5 detik
// function annonymous
setTimeout(function () {
    console.log("Dua");
}, 3000);

// arrow function
setTimeout(() => {
    console.log("Dua");
}, 1000);

console.log("Tiga");

/**
 * single statement
 * setTimeout(() => console.log("Dua"), 1000);
 */