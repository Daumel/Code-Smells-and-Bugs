export class ConstantCondition {

    constructor() {
        console.log(this.runCheck(5));
    }

    public runCheck(num: number) {
        if (undefined) {
            if (num > 0) {
                return true;
            }
        }
        return false;
    }
}
