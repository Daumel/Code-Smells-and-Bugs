export class UnreachableCode {

    constructor(credit: number) {
        this.checkCredit(credit);
    }

    public checkCredit(credit: number) {
        if (credit < 0) {
            return 'Credit is smaller than 0'
        } else {
            return 'Credit is higher than 0 or equal to 0'
        }
        console.log('Credit was checked');
    }
}
