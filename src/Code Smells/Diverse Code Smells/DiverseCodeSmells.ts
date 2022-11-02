export class DiverseCodeSmells {
    // Code-Smells: non-descriptive identifier, large comment percentage, commented-out code

    // This is the description of variable x. This is the description of variable x.
    // This is the description of variable x. This is the description of variable x.
    private x: number;

    // This is the description of variable y. This is the description of variable y.
    // This is the description of variable y. This is the description of variable y.
    private readonly y: number;

    // This is the description of variable z. This is the description of variable z.
    // This is the description of variable z. This is the description of variable z.
    private readonly z: string;

    constructor(x: number, y: number, z: string) {
        this.x = x;
        this.y = y;
        this.z  = z;
    }

    /**
     * @deprecated The method should not be used
     */
    public execute() {
        console.log(this.oddishOrEvenish());

        // Calculate the area of a triangle.
        // The area of a triangle is: (base * height) / 2
        // Example: (3, 2) ➞ 3
        console.log((this.x * this.y) / 2);

        // Check whether the string z is a palindrome.
        // A palindrome is a word that is identical forward and backwards.
        // Example: kayak
        let length = this.z.length;
        for (let i = 0; i < length / 2; i++) {
            if (this.z.charAt(i) !== this.z.charAt(length - 1 - i)) {
                // This will be logged if the string is not a palindrome.
                console.log(this.z +  ' is not a palindrome');
            }
        }
        // This will be logged if the string is a palindrome.
        console.log(this.z + ' is a palindrome');

        // Log 'Boom' if the digit 7 appears in the array x.
        // Otherwise, log "there is no 7 in the array".
        // Example: [1, 2, 3, 4, 5, 6, 7] ➞ "Boom!"
        let arr = [1, 2, 3, 4, 5, 6, 7];
        if(arr.includes(7)){
            console.log("Boom!");
        }else{
            console.log("there is no 7 in the array");
        }

        // Log the number of boomerangs in the array x.
        // A boomerang is a V-shaped sequence that is either upright or upside down.
        // Specifically, a boomerang can be defined as: sub-array of length 3, with the first and last digits being the same and the middle digit being different.
        let boomCount = 0;
        arr.forEach((num, i) => {
            if (num === arr[i+1]) return;
            if (num === arr[i+2]) boomCount++;
        })
        console.log(boomCount);
    }

    // This function determines whether a number is Oddish or Evenish.
    private oddishOrEvenish() {
        let sum = 0;
        while (this.x) {
            sum += this.x % 10;
            this.x = Math.floor(this.x / 10);
        }
        if(sum % 2 == 0){
            // A number is Evenish if the sum of all of its digits is even
            return 'Evenish';
        }
        else {
            // A number is Oddish if the sum of all of its digits is odd
            return 'Oddish';
        }
    }

    // public getFrequencies(arr) {
    //     let out = {};
    //     for (let el of arr) {
    //         if (out[el]) out[el] += 1;
    //         else out[el] = 1;
    //     }
    //     return out;
    // }
}
