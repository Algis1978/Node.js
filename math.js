console.log ("KVA_KVA_KVA_KVA_KVA_KVA");
function kvadratoPlotas (a) {
    return a*a;
}
function gretasienioTuris(a, b, c) {
    return a*b*c;
}
function gretasienioPlotas (a, b, c) {
    return (a*a + b*b + c*c)*2;
}
const mathParse = require ("./mathparse");
const {trikampioPlotas, trikampioPerimetras} = mathParse;

module.exports = {
    kvadratoPlotas,
    gretasienioPlotas,
    gretasienioTuris,
    trikampioPerimetras,
    trikampioPlotas,
}