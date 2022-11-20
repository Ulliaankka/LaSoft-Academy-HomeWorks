function argumentsLogger() {
    let str = "";
    if (Object.keys(arguments).length != 0) {
        for (let index = 0; index < arguments.length; index++) {
            str += `argument ${index}: ${arguments[index]}; `;
        }
    } 
    return str;
}
console.log(argumentsLogger(3, 6, 55, "some string")); 
console.log(argumentsLogger([1, 2], "xyz", 365)); 
console.log(argumentsLogger());
