export class IgnoreStringOperationResult {

    constructor() {
        this.stringToUpperCase('kuchen');
    }

    public stringToUpperCase(str: string) {
        str.toUpperCase();
        console.log('The upper case string is: ' + str);
    }
}
