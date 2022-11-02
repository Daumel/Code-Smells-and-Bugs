import {Parent} from "./Parent";

export class Child extends Parent {

    private initValue: number;

    constructor(initValue: number) {
        this.initValue = initValue;
    }
}
