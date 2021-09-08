console.log("Go Away!!!");
const path = require("path");
const filename = "document.txt";
console.log(path.extname(filename));

let a = 5, b = 8, c = 10, d=1;

const math = require("./math");

const kvadratoPlotas = math.kvadratoPlotas;
const gretasienioPlotas = math.gretasienioPlotas;
const gretasienioTuris = math.gretasienioTuris;

console.log (kvadratoPlotas (a, b, c));
console.log (gretasienioPlotas (a, b, c));
console.log (gretasienioTuris (a, b, c));

const vidinisGretasienioPlotas = require ("./singlefunction");

console.log (vidinisGretasienioPlotas (a, b, c, d));