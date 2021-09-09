console.log("Go Away!!!");
//Išorinės Node.js bibliotekos įterpiamos su raktažodžiu 'require' argumente nuodant bibliotekos pavadinimą. Bibliotekos su taško paplėtimu turi savas funkcijos.
const path = require("path");
const filename = "document.txt";
console.log(path.extname(filename));

let a = 5, b = 8, c = 10, d = 1;

//Naudotojo kitų .js bylų nuorodos įterpiamos su 'require' raktažodžiu argumente nurodant kelią iki .js bylos.
const math = require("./math");//require perteiks ir console.log argumentus, bet pakartotinai nebe.
//Originaliame .js faile sukuriama norimų perduoti duomenų eilutė per 'module.exports = '. Jei norima perduoti daugiau failų, jie sublokuojami {} skliaustuose.

const kvadratoPlotas = math.kvadratoPlotas;
const gretasienioPlotas = math.gretasienioPlotas;
const gretasienioTuris = math.gretasienioTuris;

console.log (kvadratoPlotas (a, b, c));
console.log (gretasienioPlotas (a, b, c));
console.log (gretasienioTuris (a, b, c));

const vidinisGretasienioPlotas = require ("./singlefunction");

console.log (vidinisGretasienioPlotas (a, b, c, d));

//Panaudojant destruktūrizavimą galima iššaukti atskiras funkcijas:
const mathmore = require("./mathmore");
const {skritulioPlotas, apskritimoIlgis} = mathmore;

console.log (skritulioPlotas(d));
console.log (apskritimoIlgis(d));

//Iššaukiamos funkcijos iš trečios bylos (iš mathparse.js per math.js):
const {trikampioPlotas, trikampioPerimetras} = math;
console.log (trikampioPlotas(a, b, c));
console.log (trikampioPerimetras(a, b, c));
console.log(math);