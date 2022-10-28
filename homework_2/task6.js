const nn = new Promise((res, rej) => {
    setTimeout(() => res("done"), 1000);
    })
console.log(typeof(nn)); // object 