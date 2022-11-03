const copyString = (str, n) => {

    if (
        typeof n === "number" &&
        typeof str === "string" &&
        n >=1
        ) {
        return str.repeat(n);
    } 

    return "Your number is less than 1";
    
}
console.log(copyString("a", 1));
console.log(copyString("a", 2));
console.log(copyString("a", 5));
console.log(copyString("a", -2));
