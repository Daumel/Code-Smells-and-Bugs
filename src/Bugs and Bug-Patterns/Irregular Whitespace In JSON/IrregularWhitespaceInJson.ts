export class IrregularWhitespaceInJson {

    private readonly jsonObj: any | undefined;

    constructor() {
        this.jsonObj = JSON.parse("{​\"name\":\"John\"}");
        console.log(this.jsonObj);
    }
}
