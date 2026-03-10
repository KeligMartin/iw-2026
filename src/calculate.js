import DivideByZeroError from "../exceptions/calculate-error.js";

const divide = (a, b) =>  {
    return new Promise((resolve, reject) => {
        if (b === 0) {
            reject(new DivideByZeroError());
        } else {
            resolve(a / b);
        }
    });
};

function substract(a) {
    return function (b) {
        return a - b;
    }
}

const multiply = a => b => a * b

const applyVAT = multiply(1.19)

const product = 15

console.log(applyVAT(product))