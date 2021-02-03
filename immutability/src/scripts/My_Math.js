// function class My_Math must have following functions at least
/*
    plus
    minus
    divide --   dividing by 0 should not cause an error, just ignore
    multi
    revert --   revert sign +/-
    pow    --   base to the exponent power
    factorial
    ... (you can add your own)
    value  --   returns number and breaks the chain
    format --   it can takes function as a callback,
                which gets result number
                as a first argument,
                and breaks the chain

    chain can get initial number (check usage example in script.js)
*/

export const My_Math = function (init) {
    if(!(this instanceof My_Math)) {
        return new My_Math(init);
    }
    
    this.init = init;
};

My_Math.prototype.plus = function(number) {
    this.init += number;
    return this;
};

My_Math.prototype.minus = function(number) {
    this.init -= number;
    return this;
}

My_Math.prototype.divide = function(number) {
    if (number === 0) return this;

    this.init /= number;
    return this;
}

My_Math.prototype.multi = function(number) {
    this.init *= number;
    return this;
}

My_Math.prototype.revert = function() {
    this.init *= -1
    return this
};

My_Math.prototype.pow = function (val) {
    this.init = Math.pow(this.init, val)
    return this
};

My_Math.prototype.factorial = function() {
    if (this.init <= 0) {
        this.init = 1
        return this
    };

    let arr = [];
    let firstNum = this.init;

    while (firstNum > 0) {
        arr.push(firstNum)
        firstNum--
    };

    this.init = arr.reduce((a, b) => a * b)
    return this
};

My_Math.prototype.value = function() {
    return this.init;
}

My_Math.prototype.format = function(func) {
    return func(this.value());
}