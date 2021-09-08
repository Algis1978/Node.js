const faker = require ("faker");

function asmuo() {
    const vardas = faker.name.firstName();
    const pavarde = faker.name.lastName();
    const asmensInformacija = {
        vardas,
        pavarde,
    }
    return asmensInformacija;
}
    const asmensInformacija = asmuo();
    console.log(asmensInformacija);