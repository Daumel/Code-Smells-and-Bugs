export class UsageOfOutputOfAVoidFunction {

    constructor(message: string) {
        console.log(this.processMessage(message));
    }

    public processMessage(message: string) {
        const messageLogged: any = UsageOfOutputOfAVoidFunction.logMessage(message);
        if (messageLogged) {
            return 'Message was logged';
        } else {
            return 'Message was not logged';
        }
    }

    private static logMessage(message: string) {
        console.log(message);
    }
}
