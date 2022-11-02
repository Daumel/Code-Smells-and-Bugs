export class JumpStatementInFinallyBlock {

    constructor(num: number, add:number) {
        console.log(this.calculateNewNumber(num, add));
    }

    public calculateNewNumber(num: number, add:number) {
        let errorMessage = '';
        try {
            return JumpStatementInFinallyBlock.addToNumber(num, add);
        } catch (err) {
            errorMessage = 'Number is higher than 30';
        } finally {
            return errorMessage;
        }
    }

    private static addToNumber(num: number, add: number) {
        if (num < 10) {
            throw new Error();
        } else {
            return num + add;
        }
    }
}
