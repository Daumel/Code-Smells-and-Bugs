export class LiteralNumberThatLosesPrecision {

    private readonly value = 9007199254740993;

    constructor() {
        console.log("Value is" + this.value);
    }
}
