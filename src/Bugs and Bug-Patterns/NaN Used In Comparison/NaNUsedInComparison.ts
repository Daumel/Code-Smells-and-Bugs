export class NaNUsedInComparison {

    constructor(userInput: string) {
        this.processUserInput(userInput);
    }

    public processUserInput(userInput: string) {
        const value = parseInt(userInput);
        if (value === NaN) {
            console.log('Skip');
        } else {
            console.log('Processing...');
        }
    }
}
