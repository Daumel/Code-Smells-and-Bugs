export class RelatedIfStatementsWithSameCondition {

    private readonly param: number;

    constructor(param: number) {
        this.param = param;
        this.checkParam();
    }

    public checkParam() {
        if (this.param == 200) {
            console.log("Execution successful");
        }
        else if (this.param == 500) {
            console.log("Execution failed");
        }
        else if (this.param == 200) {
            console.log("Check execution result manually");
        }
    }
}
