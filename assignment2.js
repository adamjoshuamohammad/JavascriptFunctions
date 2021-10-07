// FOR EACH //
Array.prototype.myEach = function(callbackFn) {
    for (let i = 0; i < this.length; i++)
    {
        if (this[i] === undefined) continue;
        callbackFn(this[i], i, this);
    }
};

// MAP //
Array.prototype.myMap = function(callbackFn) {
    const newArray = [];
    for (let i = 0; i < this.length; i++) {
        if (this[i] === undefined) continue;
        callbackFn(this[i], i, this);
        newArray.push(callbackFn(this[i]));
    }
    return newArray;  
};

// FILTER //
Array.prototype.myFilter = function(callbackFn) {
    const arr = [];
    for (let i = 0; i < this.length; i++) {
        if(this[i] === undefined) continue;
        if (callbackFn(this[i], i, this) == true) {
            arr.push(this[i]);
        }
        else continue;
    }
    return arr;
};

// SOME //
Array.prototype.mySome = function(callbackFn) {
    for (let i = 0; i < this.length; i++) {
        if (this[i] === undefined) continue;
        if (callbackFn(this[i], i, this) == true) {
            return true;
        }
    }
    return false;
};

// EVERY //
Array.prototype.myEvery = function(callbackFn) {
    for (let i = 0; i < this.length; i++) {
        if (!(callbackFn(this[i], i, this))) {
            return false;
        }
        else continue;
    }
    return true;
};


// REDUCE //
Array.prototype.myReduce = function(callbackFn) {

    currentValue = this[0], nextValue = this[1];
    funcOutput = reducer(currentValue, nextValue);

    for(var i = 2; i < this.length; i++)
    {
        totalOutput = reducer(funcOutput, this[i]);
        funcOutput = totalOutput;
        callbackFn(currentValue, nextValue, i, this);
    }

    return totalOutput; 
};

// INCLUDES //
Array.prototype.myIncludes = function(x, n) {
    let i = 0;
    if (n >= this.length) 
        return -1;
    if (!(n === undefined)) {
        if (n < 0) 
            i = this.length + n;
        else if (n > 0)
        i = n;
    }   
    for (i; i < this.length; i++) {
        if (this === undefined) continue;
        else if (this[i] === x) return true;
    }
    return false;
};

// INDEXOF //
Array.prototype.myIndexOf = function(x, n) {
    let i = 0;
    if (n >= this.length) 
        return -1;
    if (!(n === undefined)) {
        if (n < 0) 
            i = this.length + n;
        else if (n > 0)
            i = n;
    }
    for (i; i < this.length; i++) {
        if (this === undefined) continue;
        if (this[i] === x) return i;
    }
    return -1;
};


// PUSH //
Array.prototype.myPush = function(...args) {
    let arg_i = 0;
    let length = this.length();
    for (let i = length; i < length + args.length; i++) {
        this[i] = args[arg_i];
        arg_i++;
    }
    return this.length();

};

// LASTINDEXOF //
Array.prototype.myLastIndexOf = function(x, n) {
    let i = 0;
    if (n > this.length) 
        i = this.length;
    if (!(n === undefined)) {
        if (n < 0) 
            i = this.length + n + 1;
        else if (n > 0)
            i = n;
    }
    else i = this.length;
    while (i--) {
        if (this === undefined) continue;
        if (this[i] === x) return i;
    }
    return -1;
};

// KEYS //
Object.grabKeys = function(x) {
    let keys = [];
    for (i in x) {
        if (x === undefined) continue;
        keys.push(i);
    }
    return keys; 
};

// VALUES //
Object.grabValues = function(x) {
    let values = [];
    for (i in x) {
        if (x === undefined) continue;
        values.push(x[i]);
    }
    return values;
};

