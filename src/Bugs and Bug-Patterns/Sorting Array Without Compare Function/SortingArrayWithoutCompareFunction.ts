export class SortingArrayWithoutCompareFunction {

    constructor() {
        this.sortArray([80, 3, 9, 34, 23, 5, 1]);
    }

    public sortArray(array: number[]) {
        array.sort();
        console.log(array);
    }
}
