export class GetterWithoutReturn {

    private name: string;

    constructor(name: string) {
        this.name= name;
        console.log(this.convertedName);
    }

    get convertedName() {
        let convertedName = this.name.toUpperCase();
        console.log(convertedName);
    }
}
