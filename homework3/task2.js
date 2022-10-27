const sumOfArrayEl = arr => {
    let sum = 0;
    for ( let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum;
}
console.log(sumOfArrayEl([12, 34, 23, 56]));