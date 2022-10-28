const checkIfStart = str => {

    if (str.length < 2) {
        return false;
    }
    
    let newString = str.substring(0, 2);
    
    if (
        typeof newString === "string" &&
        newString === "if"
        ) {
        return true;
    }

    else return false;
}
console.log(checkIfStart("if I could fly"))
console.log(checkIfStart("iffy stuff"))
console.log(checkIfStart("hello world"));




