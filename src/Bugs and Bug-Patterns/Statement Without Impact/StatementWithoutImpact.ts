export class StatementWithoutImpact {

    private readonly a: number;

    constructor(a: number) {
        this.a = a;
        this.run();
    }

    public run() {
        this.a == 1;
        let msg = "Hello, "
        "World!";

        console.log(msg + ' ' + this.a);
    }
}
