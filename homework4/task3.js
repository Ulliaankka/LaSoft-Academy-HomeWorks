function arrayDivisionFactory (num) {
    return function arrayOfNumbers (arr) {
        return arr.map(item => item / num);;
    }
}
const divide5 = arrayDivisionFactory(5);
console.log(divide5([10, 20, 25])) // [2, 4, 5]
const divide3 = arrayDivisionFactory(3);
console.log(divide3([6, 21, 27])) // [2, 7, 9]
