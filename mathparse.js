function trikampioPerimetras (a, b, c) {
    return a+b+c
}
function trikampioPlotas (a, b, c) {
    return Math.pow ((a+b+c)*(b+c-a)*(a-b+c)*(a+b-c), 1/2);
}
console.log("MATH_PARSE");
let h = [1,2,3,4,5,6];
console.log(h);
h = {
    miestas:"Vilnius",
    rajonas:"Antakalnis",
    gatve:"Saulėtekio",
    namas: "5"
}
console.log("h = ");
console.log(h);
module.exports = {
    trikampioPerimetras,
    trikampioPlotas
}