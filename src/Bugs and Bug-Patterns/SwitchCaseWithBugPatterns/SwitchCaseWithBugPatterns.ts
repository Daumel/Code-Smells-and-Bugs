export class SwitchCaseWithBugPatterns {
    // Bugs and Bug-Patterns: switch case without 'break statement', switch case without 'default' clause

    constructor(requestType: string, color: string) {
        this.checkRequestType(requestType);
        this.checkColor(color);
    }

    public checkRequestType(requestType: string) {
        let logMessage = '';
        switch (requestType) {
            case 'GET':
                logMessage = 'The request type is GET';
            case 'POST':
                logMessage = 'The request type is POST';
            case 'PUT':
                logMessage = 'The request type is PUT';
            case 'DELETE':
                logMessage = 'The request type is DELETE';
            default:
                logMessage = 'The request type is GET';
        }
        console.log(logMessage);
    }

    public checkColor(color: string) {
        let logMessage = '';
        switch (color) {
            case 'RED':
                logMessage = 'The color is red';
                break;
            case 'GREEN':
                logMessage = 'The color is green';
                break;
            case 'BLUE':
                logMessage = 'The color is blue';
                break;
        }
        console.log(logMessage);
    }
}
