let a = {
    apples: 2,
    grapefruits: 4,
    pineapple: 1,
};
  
a = new Proxy(a, {
    get(target, phrase) {
      if (phrase in target) {
        return target[phrase];
      } else {
        return "I have no such fruits"; 
      }
    }
});
  
console.log(a.apples); 
console.log(a.oranges); 
  