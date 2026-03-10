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

const verifyLength = () => {
    // DEVELOPPER UNE METHODE QUI PERMET DE VERIFIER QUE LA CHAINE DE CARACTERE
    // A UNE LONGUEUR SUPERIEURE A 5
    // INFERIEURE A 25
    // CONTIENT UNE MAJUSCULE ET UNE MINUSCULE
}

const register = () => {} // PROMISE QUI ENVOIE LA CHAINE DE CARACTERE A LA METHODE


