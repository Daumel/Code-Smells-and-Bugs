export class UsageOfNewForSomethingWithoutConstructor {

    private number2Obj: any;

    constructor() {
        const number2Class = 2;
        this.number2Obj = new number2Class;
    }
}
