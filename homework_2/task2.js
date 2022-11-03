const checkIfStart = str => {
    
    if (typeof str === "string" && str.length >= 2) {
        let newString = str.substring(0, 2).toLowerCase();
        return newString === "if";
    }
    return false;

}
console.log(checkIfStart("If I could fly"))
console.log(checkIfStart("IFfy stuff"))
console.log(checkIfStart("if fy stuff"))
console.log(checkIfStart("hello world"));
console.log(checkIfStart("3"));
console.log(checkIfStart("33"));