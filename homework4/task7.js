function infiniteSum(a) {
    let sum = a;
    function res(b) {
        sum += b;
        return res;
    }
    res.get = function () {
        return sum;
    };
    return res;
}

console.log(infiniteSum(1)(2)(3).get()); 
console.log(infiniteSum(1)(3)(2)(4).get());