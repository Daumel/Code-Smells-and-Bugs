export class IrregularWhitespaceInJson {

    private jsonObj: any | undefined;

    constructor() {
        this.jsonObj = JSON.parse("{\u{00A0}\"name\":\"John\"}");
    }
}
