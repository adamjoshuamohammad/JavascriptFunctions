const object1 = {
    a: 'somestring',
    b: 42,
    c: false
  };

  Object.grabKeys = function(x) {
    let keys = [];
    for (i in x) {
        if (x === undefined) continue;
        keys.push(i);
    }
    return keys; 
};

Object.grabValues = function(x) {
    let values = [];
    for (i in x) {
        if (x === undefined) continue;
        values.push(x[i]);
    }
    return values;
};

console.log(Object.grabKeys(object1));
console.log(Object.grabValues(object1));
// --------------------------------------------------\\

