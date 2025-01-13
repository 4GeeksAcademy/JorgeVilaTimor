

//convierto de dolares a yenes
const fromDollarToYen = (a) => {
    return a * 157.53
}
//convierto de euroa dolares
const fromEuroToDollar = (a) => {
    return a * 1.07
}
//convierto de yenes libras 
const fromYenToPound = (a) => {
    return a * 0.0052
}
module.exports = { fromDollarToYen, fromEuroToDollar, fromYenToPound };
