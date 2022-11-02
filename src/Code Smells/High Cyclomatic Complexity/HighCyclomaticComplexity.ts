export class HighCyclomaticComplexity {

    constructor(array: []) {
        console.log(this.determineProportionOfOddAndEvenNumbers(array));
    }

    public determineProportionOfOddAndEvenNumbers(array: []) {
        let startIdx = 0;
        while (startIdx < array.length -1) {
            let smallestIdx = startIdx;
            for (let i = startIdx + 1; i < array.length; i++) {
                if (array[smallestIdx] > array[i]) {
                    smallestIdx = i;
                }
                HighCyclomaticComplexity.swap(startIdx, smallestIdx, array);
                startIdx++;
            }
        }
        let arrayEven = [];
        let arrayOdd = [];
        for (let element of array) {
            let parity;
            if (element % 2 === 0) {
                parity = 0;
            } else {
                parity = 1;
            }
            switch (parity) {
                case 0:
                    arrayEven.push(element);
                    break;
                case 1:
                    arrayOdd.push(element);
                    break;
                default:
                    console.log('Unexpected error');
            }
        }
        if (arrayEven.length > arrayOdd.length) {
            return 'There are more even numbers';
        }
        if (arrayEven.length < arrayOdd.length) {
            return 'There are more odd numbers';
        }
        if (arrayEven.length === arrayOdd.length) {
            return 'Neither of them have the upper-hand';
        }
        return '';
    }

    private static swap(i: number, j: number, array: []) {
        const temp = array[j];
        array[j] = array[i];
        array[i] = temp;
    }
}
