const checkIfStart = str => {
    if (str !== "string" && str.length < 2) {
        return false;
    }
    
    let newString = str.substring(0, 2).toLowerCase();
    
    if (newString === "if") {
        return true; 
    }
    
    return false;
}
console.log(checkIfStart("If I could fly"))
console.log(checkIfStart("IFfy stuff"))
console.log(checkIfStart("if fy stuff"))
console.log(checkIfStart("hello world"));




