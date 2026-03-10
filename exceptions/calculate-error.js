class DivideByZeroError extends Error {
    constructor() {
        super("Cant divide by 0");
    }
}

export default DivideByZeroError;