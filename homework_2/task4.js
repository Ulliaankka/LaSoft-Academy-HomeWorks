const toArray = digitSum => {
    return digitSum
    .toString()
    .split('');
}

const sumOfDigit = digitSum => {
    let array = toArray(digitSum)
    .map(Number)
    .reduce((a, b) => (
        a + b
    ), 0);
    return array;
}

const hasSameDigit = digitSum => {
    let array = toArray(digitSum)
    if (array.length !== new Set(array).size) {
        return true;
      }
    
    else return false;
}

const areHalvesEqual = digitSum => {
    let array = toArray(digitSum);
    let sum1 = Number(array[0])+Number(array[1]);
    let sum2 = Number(array[2])+Number(array[3]);
    if (sum1 === sum2){
        return true;
    }
    else return false;
}

const checkNumberValues = digitSum => {
    const obj = {
        sum: sumOfDigit(digitSum),
        hasSameDigit: hasSameDigit(digitSum),
        areHalvesEqual: areHalvesEqual(digitSum)
    }
    return obj;
}

console.log(checkNumberValues(5154));