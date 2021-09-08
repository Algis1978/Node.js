function trikampioPerimetras (a, b, c) {
    return a+b+c
}
function trikampioPlotas (a, b, c) {
    return Math.pow ((a+b+c)*(b+c-a)*(a-b+c)*(a+b-c), 1/2);
}

module.exports = {
    trikampioPerimetras,
    trikampioPlotas
}