function quadraticEquation(a,b,c) {
    let root1, root2;
    try {
        if (arguments.length !== 3) {
            throw new ReferenceError("You are missing parameter");
        }
        if (a === 0) {
            throw new RangeError("It isn't a quadratic equation");
        }
        let discriminant = b * b - 4 * a * c;
        
        if (discriminant >= 0) {
            root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
            root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
            return `The roots of quadratic equation are ${root1} and ${root2}`;
        }
        else throw new RangeError('Disciminant less than 0');
        
    } catch (e) {
        return e.message;
    }
}
console.log(quadraticEquation(1, 5, 4));  // x1=-1, x2=-4
console.log(quadraticEquation(1, 5));	 //missing parameter
console.log(quadraticEquation(0, 1, 5)); //not a quadratic equation
console.log(quadraticEquation(1, 1, 1)); //disciminant less than 0