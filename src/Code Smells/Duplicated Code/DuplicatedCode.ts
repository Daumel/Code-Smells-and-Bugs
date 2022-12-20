export class DuplicatedCode {

    constructor(array: []) {
        console.log(this.findTheSecondLargestNumber(array));
    }

    // Duplicated code fragment (14 lines)
    public findTheSecondLargestNumber(array: []) {
        console.log('Check started');
        console.log('Check array: ' + array);
        let largest = Number.MIN_VALUE;
        let secondLargest = Number.MIN_VALUE;
        for (let i = 0; i < array.length; i++) {
            console.log('Check index' + i);
            if (array[i] > largest) {
                secondLargest = largest;
                largest = array[i];
            } else if (array[i] > secondLargest) {
                secondLargest = array[i];
            }
        }
        console.log('Check ended');
        return secondLargest;
    }
}
