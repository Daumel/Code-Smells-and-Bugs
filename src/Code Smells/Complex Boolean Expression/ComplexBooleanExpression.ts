export class ComplexBooleanExpression {

    constructor() {
        this.recordRequestResponse(undefined, undefined);
    }

    public recordRequestResponse(request: any | undefined, response: any | undefined) {
        if ((request.url === '/api/books' && (request.method === 'POST' || request.method === 'PUT') && response.contentType === 'application/json' && response.statusCode === 200 && (response.body != undefined || response.body === ''))) {
            console.log('Request: ' + request);
            console.log('Response: ' + response);
        }
    }
}
