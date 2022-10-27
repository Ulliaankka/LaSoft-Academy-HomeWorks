const checkLastNumber = (a, b) => {
    let digit1 = a % 10;
    let digit2 = b % 10;
    if (
        typeof digit1 === "number" && 
        typeof digit2 === "number" &&
        digit1 === digit2
        ) {
        return true;
   }
       
    else return false;
}
console.log(checkLastNumber(26, 6));
console.log(checkLastNumber(26, 148));