export class DiverseCodeSmells {
    // Code-Smells: non-descriptive identifier, commented-out code

    private x: number;

    constructor(x: number) {
        this.x = x;
    }

    /**
     * @deprecated The method should not be used
     */
    public execute() {
        // let out = {};
        // for (let el of arr) {
        //     if (out[el]) out[el] += 1;
        //     else out[el] = 1;
        // }
        let sum = 0;
        while (this.x) {
            sum += this.x % 10;
            this.x = Math.floor(this.x / 10);
        }
        if(sum % 2 == 0){
            return 'Evenish';
        }
        else {
            return 'Oddish';
        }
    }
}
