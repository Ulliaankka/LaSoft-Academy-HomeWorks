function plusFactory(num) {
    return function sum(n) {
        return num + n;
    }
}
const plusFive = plusFactory(5)
console.log(plusFive(2)) // ➞ 7
const plusTen = plusFactory(10)
console.log(plusTen(188)) // ➞ 198
console.log(plusFive(plusTen(0))) // ➞ 15

  