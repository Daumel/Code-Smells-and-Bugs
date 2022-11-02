export class ErrorIsNotThrown {

    constructor(num: number) {
        this.checkNumber(num);
    }

    public checkNumber(num: number) {
        if (num < 0) {
            new Error('num must be non-negative');
        }
    }
}
