const checkLastNumber = (a, b) => {
    if (typeof a === "number" && typeof b === "number" ) {
        let digit1 = a % 10;
        let digit2 = b % 10;
        return digit1 === digit2;
    }
}
console.log(checkLastNumber(26, 6));
console.log(checkLastNumber(26, 148));
