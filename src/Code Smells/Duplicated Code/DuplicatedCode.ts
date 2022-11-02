export class DuplicatedCode {

    constructor(array: []) {
        console.log(this.getLength(array));
        console.log(this.findTheSecondLargestNumber(array));
    }

    // Duplicated method with different parameter name
    public getLength(array: []) {
        let count = 0;
        array.forEach(item => {
            if (Array.isArray(item)) {
                count += this.getLength(item);
            } else {
                count++;
            }
        });
        return count;
    }

    // Duplicated code fragment (8 lines)
    public findTheSecondLargestNumber(array: []) {
        let largest = Number.MIN_VALUE;
        let secondLargest = Number.MIN_VALUE;
        for (let i = 0; i < array.length; i++) {
            if (array[i] > largest) {
                secondLargest = largest;
                largest = array[i];
            } else if (array[i] > secondLargest) {
                secondLargest = array[i];
            }
        }
        return secondLargest;
    }
}
