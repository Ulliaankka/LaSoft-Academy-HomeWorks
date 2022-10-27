const copyString = (str, n) => {

    if (
        typeof n === "number" &&
        typeof str === "string" &&
        n >= 0
        ) {
        return str.repeat(n);
    } 

    else return "Your number is less than 0";
    
}
console.log(copyString("a", 1));
console.log(copyString("a", 2));
console.log(copyString("a", 5));
console.log(copyString("a", -2));
