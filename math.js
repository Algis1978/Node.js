function kvadratoPlotas (a) {
    return a*a;
}
function gretasienioTuris(a, b, c) {
    return a*b*c;
}
function gretasienioPlotas (a, b, c) {
    return (a*a + b*b + c*c)*2;
}
module.exports = {
    kvadratoPlotas,
    gretasienioPlotas,
    gretasienioTuris
}