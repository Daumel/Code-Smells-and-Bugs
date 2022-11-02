export class LongFunction {

    constructor() {
        this.solveAlgorithmChallenges();
    }

    public solveAlgorithmChallenges() {
        // Check for palindrome
        const palindrome = 'Mononom';
        let length = palindrome.length;
        for (let i = 0; i < length / 2; i++) {
            if (palindrome.charAt(i) !== palindrome.charAt(length - 1 - i)) {
                console.log(palindrome +  ' is not a palindrome');
            }
        }
        console.log(palindrome + ' is a palindrome');

        // Find the smallest and biggest number
        const arr = [5, 3, 13, 4, 2];
        let min = arr[0];
        let max = arr[0];
        for(let i = 1; i < arr.length; i++) {
            if(arr[i] < min) {
                min = arr[i];
            }
            if(arr[i] > max) {
                max = arr[i];
            }
        }
        console.log('The smallest number is ' + min);
        console.log('The biggest number is ' + max);

        // Add up the numbers from a single number
        const num = 4;
        let result = 0;
        for(let i = 0; i <= num; i++){
            result = result + i;
        }
        console.log('The added up number is ' + result);

        // Find the second-largest number
        const array = [7, 9, 3, 2, -4];
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
        console.log('The second-largest number is ' + secondLargest);

        // BitwiseAND
        const num1 = 6;
        const num2 = 23;
        let num1Bit = num1.toString(2).split('').reverse();
        let num2Bit = num2.toString(2).split('').reverse();
        const mergedNum = num1 + num2;
        const mergedNumBit = num1Bit[0] + num2Bit[0];
        console.log('The result is ' + mergedNum);
        console.log('The result is ' + mergedNumBit);

        // BitwiseOR
        const num3 = 7;
        const num4 = 24;
        let num3Bit = num3.toString(2).split('').reverse();
        let num4Bit = num4.toString(2).split('').reverse();
        const mergedNum2 = num3 + num4;
        const mergedNumBit2 = num3Bit[0] + num4Bit[0];
        console.log('The result is ' + mergedNum2);
        console.log('The result is ' + mergedNumBit2);

        // Finding Nemo
        const sentence = 'I Nemo am';
        const newSentence = sentence.split(' ');
        console.log('Sentence: ' + sentence);
        console.log('Split sentence: ' + newSentence);
        console.log('Merged sentence: ' + sentence + newSentence);

        // Integer Digits Count
        let number = 318;
        let numberMinus2 = number - 2;
        console.log('The number is ' + number);
        console.log('The number minus 2 is ' + numberMinus2);
        const newN = Math.abs(number);
        let count = 0;
        let divisor = 1;
        let result4 = 1;
        console.log('newN: ' + newN);
        console.log('divisor: ' + divisor);
        console.log('result4: ' + result4);
        console.log(count);
    }
}
