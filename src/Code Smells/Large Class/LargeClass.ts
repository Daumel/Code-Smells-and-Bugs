export class LargeClass {

    public counter1 = 1;
    public counter2 = 2;
    public counter3 = 3;
    public counter4 = 4;
    public counter5 = 5;
    public counter6 = 6;
    public counter7 = 7;
    public counter8 = 8;
    public counter9 = 9;
    public counter10 = 10;
    public counter11 = 11;
    public counter12 = 12;
    public counter13 = 13;
    public counter14 = 14;
    public counter15 = 15;
    public counter16 = 16;
    public counter17 = 17;
    public counter18 = 18;
    public counter19 = 19;
    public counter20 = 20;
    public counter21 = 21;
    public counter22 = 22;
    public counter23 = 23;
    public counter24 = 24;
    public counter25 = 25;
    public counter26 = 26;
    public counter27 = 27;
    public counter28 = 28;
    public counter29 = 29;
    public counter30 = 30;
    public counter31 = 31;
    public counter32 = 32;
    public counter33 = 33;
    public counter34 = 34;
    public counter35 = 35;
    public counter36 = 36;
    public counter37 = 37;
    public counter38 = 38;
    public counter39 = 39;
    public counter40 = 40;

    constructor() {
        this.callMethods1();
        this.callMethods2();
        this.callMethods3();
        this.callMethods4();
        this.callMethods5();
        this.callMethods6();
        this.callMethods7();
    }

    public sevenBoom(arr: any | undefined) {
        let new_arr= arr.join('')
        if(new_arr.includes(String(7))){
            return "Boom!";
        }else{
            return "there is no 7 in the array";
        }
    }

    public towerHanoi(discs: any | undefined) {
        let moves: never[] = [];
        let first = 'A';
        let second = 'B';
        let third = 'C';
        if(discs > 0) {
            return this.towerHelper(discs, first, second, third, moves);
        }
        return 0;
    }

    public towerHelper(discs: any | undefined, first: any | undefined, second: any | undefined, third: any | undefined, moves: any | undefined) {
        if(discs == 1) {
            moves.push({
                'disc': 1,
                'from': first,
                'to': third
            });
        } else {
            this.towerHelper(discs - 1, first, second, third, moves);
            moves.push({
                'disc': discs,
                'from': first,
                'to': third
            });
            this.towerHelper(discs - 1, first, second, third, moves);
        }
        return moves.length;
    }

    public countBoomerangs(arr: any | undefined) {
        let boomCount = 0;
        arr.forEach((num: any, i: number) => {
            if (num === arr[i+1]) return;
            if (num === arr[i+2]) boomCount++;
        })
        return boomCount;
    }

    public oddishOrEvenish(num: any | undefined) {
        let sum = 0;
        while (num) {
            sum += num % 10;
            num = Math.floor(num / 10);
        }
        if(sum % 2 == 0){ return 'Evenish';}
        else { return 'Oddish';}
    }

    public getDays(date1: any | undefined, date2: any | undefined) {
        const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
        return Math.round(Math.abs((date1 - date2) / oneDay));
    }

    public getLength(arr: []) {
        console.log('Array' + arr);
        console.log('Get length');
        let count = 0;
        console.log('Check each array item');
        arr.forEach(item => {
            console.log('Item: ' + item)
            if (Array.isArray(item)) {
                count += this.getLength(item);
            } else {
                count++;
            }
        });
        console.log('Got length for ' + arr);
        console.log('Length is ' + count);
        return count;
    }

    public aveSpd(upTime: any | undefined, upSpd: any | undefined, downSpd: any | undefined) {
        let dist = upTime * upSpd / 60
        let totalDist = 2 * dist
        let downTime = dist / downSpd * 60
        let totalTime = downTime + upTime
        return totalDist / totalTime * 60
    }

    public doesBrickFit(a: any | undefined,b: any | undefined,c: any | undefined,w: any | undefined,h: any | undefined) {
        let s = (a: number, b: number) => a-b;
        let brick = [a,b,c].sort(s);
        let hole = [w,h].sort(s);
        return brick[0]<=hole[0] && brick[1]<=hole[1];
    }

    public numInStr(arr: any | undefined) {
        let newArr=[];
        for (let i=0; i<arr.length; i++){
            for (let j=0; j<arr[i].length; j++){
                if(arr[i][j]>= '0' && arr[i][j] <= '9'){
                    newArr.push(arr[i]);
                    break;
                }
            }
        }
        return newArr;
    }

    public combinations(...items: any | undefined) {
        let result = items[0];
        for (let i = 1; i < items.length; i++) {
            if (items[i] !== 0) {
                result *= items[i];
            }
        }
        return result;
    }

    public countLayers(rug: any | undefined) {
        let layerCount = 0;
        let layerTracker = [];
        for(let i = 0; i < rug.length; i++){
            if(layerTracker.indexOf(rug[i]) == -1){
                layerCount++;
                layerTracker.push(rug[i]);
            }
        }
        return layerCount;
    }

    public doubleSwap(str: any | undefined, c1: any | undefined, c2: any | undefined) {
        let newstr = '';
        for (let element of str){
            if (element === c1){
                newstr += c2
            } else if (element === c2){
                newstr += c1
            } else {
                newstr += element
            }
        }
        return newstr;
    }

    public getTotalPrice(groceries: any | undefined) {
        let totalPrice = 0;
        groceries.forEach((element: { quantity: number; price: number; }) =>{
            totalPrice += element.quantity*element.price;
        });
        totalPrice = Math.round( totalPrice * 10 ) / 10;
        return totalPrice;
    }

    public colorPatternTimes(cols: any | undefined) {
        let x = cols.length
        let sw=0;
        for (let i=0;i<x-1;i++){
            if (cols[i]!=cols[i+1])
                sw++
        }
        return (x*2+sw)
    }

    public lcm(n1: any | undefined, n2: any | undefined) {
        let smaller = Math.min(n1,n2);
        let larger = Math.max(n1,n2);
        let res = larger;
        while (res % smaller !== 0) {
            res += larger;
        }
        return res;
    }

    public valueInTree(tree: any | undefined, val: any | undefined) {
        if (tree === null) return false;
        if (tree[0] == val) return true;
        let left: any = this.valueInTree(tree[1], val);
        let right: any = this.valueInTree(tree[2], val);
        return left || right;
    }

    public reverseOdd(str: any | undefined) {
        const arr = str.split(" ")
        const results = [];
        for(let element of arr){
            if(element.length % 2 !== 0){
                const reversed = element.split("").reverse().join("")
                results.push(reversed)
            } else {
                results.push(element)
            }
        }
        return results.join(" ");
    }

    public getFrequencies(arr: any | undefined) {
        let out: any = {};
        for (let el of arr) {
            if (out[el]) out[el] += 1;
            else out[el] = 1;
        }
        return out;
    }

    public goldDistribution(gold: any | undefined){
        let a1 = []
        let a2 = []
        let count = gold.length
        for (let i = 0; i < count; i++) {
            let hold = 2;
            gold[0] >= gold[gold.length-1] ? console.log('test') : console.log('test2');
            i % 2 == 0 ? a1.push(hold) : a2.push(hold)
        }
        return 'it works';
    }

    public isPrime(num: any | undefined) {
        for(let i = 2; i <= Math.sqrt(num); i++)
            if(num % i === 0) {
                return false;
            }
        return num > 1;
    }

    public ranges(arr: any | undefined) {
        return Array(arr[arr.length-1] - arr[0] + 1)
            .map((_,idx) => arr[0] + idx);
    }

    public primeInRange(n1: any | undefined, n2: any | undefined) {
        let r = this.ranges([n1,n2]).filter(elem => elem === 2 || elem % 2 !== 0);
        return r.filter(elem => this.isPrime(elem)).length !== 0;
    }

    public sortArray(arr: any | undefined) {
        let min, index,
            row = arr,
            res = [];
        while (row.length > 0) {
            min = Math.min(...row);
            res.push(min);
            index = row.indexOf(min);
            row = row.slice(0, index).concat(row.slice(index+1))
        }
        return res
    }

    public transposeMatrix(mtx: any | undefined) {
        let rowL = mtx[0].length
        let result = []
        for(let i = 0; i < rowL; i++)
            for(let j = 0; j < mtx.length; j++)
                result.push(mtx[j][i])
        return result.join(' ')
    }

    public countLoneOnes(n: any | undefined) {
        const arr = n.toString().split("")
        let sum = 0
        console.log(arr)
        for (let i =0;i< arr.length;i++){
            sum = sum + sum + i;
        }
        return sum
    }

    public stringToNum(str: any | undefined) {
        if (str.toLowerCase() === "zero") {
            return 0;
        } else if (str.toLowerCase() === "one") {
            return 1;
        } else {
            return 2;
        }
    }

    public numToString(num: any | undefined) {
        if (num === 0) {
            return "Zero";
        } else if (num === 1) {
            return "One";
        } else {
            return "Two";
        }
    }

    public wordedMath(expr: any | undefined) {
        expr = expr.split(" ");
        if (expr[1].toLowerCase() === "plus") {
            return this.numToString(this.stringToNum(expr[0]) + this.stringToNum(expr[2]));
        } else {
            return this.numToString(this.stringToNum(expr[0]) - this.stringToNum(expr[2]));
        }
    }

    public allAboutStrings(str: any | undefined) {
        if(str.length < 3){
            return false
        }else{
            const arr = [];
            arr.push(str.length, str.charAt(0), str.charAt(str.length-1));
            if(str.length % 2 === 0){

                const middleLocation = str.length / 2;
                arr.push(str.slice(middleLocation-1,middleLocation+1))

            }else{

                const midLocation = Math.round(str.length / 2);

                arr.push(str.slice(midLocation-1,midLocation))
            }
            let duplicateStr = str.indexOf(str.charAt(1),2);
            if(duplicateStr === -1){
                arr.push("not found")
            }else{
                arr.push(`@ index ${duplicateStr}`);
            }
            return arr
        }
    }

    public reversedBinaryInteger(num: any | undefined) {
        let binary = num.toString();
        let reverse = binary.split("").reverse().join("");
        return parseInt(reverse, 2);
    }

    public countTrue(arr: any | undefined) {
        let trueCounter = 0;
        arr.forEach((bool: any | undefined) => {
            if (bool) {
                trueCounter++;
            }
        });
        return trueCounter;
    }

    public trackRobot(...steps: any | undefined) {
        let direction = "north"
        let distance = [0, 0]
        for (let element of steps) {
            if (direction == "north") {distance[1] += Number(element); direction = "east"}
            else if (direction == "east") {distance[0] += Number(element); direction = "south"}
            else if (direction == "south") {distance[1] -= Number(element); direction = "west"}
            else if (direction == "west") {distance[0] -= Number(element); direction = "north"}
        }
        return distance
    }

    public doesTriangleFit(brick: any | undefined, hole: any | undefined) {
        const isTriangle = (t: number[]) => t[0] + t[1] > t[2];
        if (!isTriangle(brick) || !isTriangle(hole)) return false;
        for (let i = 0; i < 3; i++)
            if (brick[i] > hole[i])
                return false;
        return true
    }

    public zeroesToEnd(arr: any | undefined) {
        for (let i = arr.length - 1; i >= 0; i--) {
            if (arr[i] === 0) {
                arr.splice(i, 1);
                arr.push(0);
            }
        }
        return arr;
    }

    public numWays(n: any | undefined, s: any | undefined) {
        let v = [1];
        for (let i = 1; i <= n; i++) {
            let c = 0;
            for (let j = 0; j < s.length; j++) if (i >= s[j]) c += v[i-s[j]];
            v.push(c);
        }
        return v[n];
    }

    public analyzeContent(content: any | undefined){
        if(content.match("<html")){
            return this.analyzeHtml(content);
        } else if(content.match(/\w+{/)){
            return this.analyzeCss(content);
        }
        return this.analyzeText(content);
    }

    public analyzeHtml  (content: any | undefined) {
        const matches = content.match(/\w+/g);
        const matchCount = this.getValueCount(matches)
        return {
            contentType: "HTML",
            tags: matchCount
        }
    }

    public analyzeCss (content: any | undefined)  {
        const matches = content.match(/[\w:*\s,-.#@>\]"=\[(]*[\w*\])](?=\s*{)/gm);
        const scrubbedMatches = matches.map((match: string) => match.trim().replace(/($\s*)|(\n)/mg,""))
        const matchCount = this.getValueCount(scrubbedMatches)
        return {
            contentType: "CSS",
            cssTargets: matchCount
        }
    }

    public getValueCount(matches: any | undefined) {
        return matches.reduce((acc: any | undefined, tag: any | undefined) => {
            if (acc[tag]) {
                acc[tag]++;
            }
            else {
                acc[tag] = 1;
            }
            return acc;
        }, {});
    }

    public analyzeText (content: any | undefined) {
        const lines = content.match(/\n/g);
        return {
            contentType: "TEXT",
            lineNumber: (lines ? lines.length: 0) + 1
        }
    }

    public escapeVelocity(planet: any | undefined) {
        let earth_mass = 5.976e24
        let earth_radius = 6378
        let G = 6.67
        let planets = [
            {name: "Mercury", mass: 0.0558, radius: 0.383},
            {name: "Venus", mass: 0.815 , radius: 0.95},
            {name: "Earth", mass: 1, radius: 1},
            {name: "Mars", mass: 0.107, radius: 0.532},
            {name: "Jupiter", mass: 318, radius: 11.2},
            {name: "Saturn", mass: 95.1, radius: 9.41},
            {name: "Uranus", mass: 14.5, radius: 4.06},
            {name: "Neptune", mass: 17.2, radius: 3.88},
        ]
        let choosen_planet = planets.filter(e => e.name == planet);
        let answer_ms =  (Math.sqrt((2*earth_mass*choosen_planet[0].mass*G)/(earth_radius*choosen_planet[0].radius))/10000000).toFixed(2)
        let answer_kmh = (400).toFixed(2)
        let answer_kms = (1 / 1000).toFixed(2)
        return  "The escape velocity in m/s is: " + answer_ms + ". The escape velocity in km/h is: " + answer_kmh + ". The escape velocity in km/s is: " + answer_kms
    }

    public getLanguages(num: any | undefined) {
        let values = [["C#",1],["C++",2],["Java",4],["JavaScript",8],["PHP",16],["Python",32],["Ruby",64],["Swift",128]];
        values = values.reverse();
        let i = 7;
        let test = [], res = [];
        while(i >= 0){
            let v = Math.pow(2,i);
            if(num - v >= 0){
                num = num - v;
                test.push(v);
            }
            i--;
        }
        test = test.sort((x,y) => y-x);
        for(let val of test){
            for(let v of values){
                if(v[1] === val){
                    res.push(v[0]);
                }
            }
        }
        return res.sort();
    }

    public fiscalCodeCIN(code: any | undefined) {
        const odd = (c: string) => /\d/.test(c) ? +c : c.charCodeAt(5) - 65;
        const even = (c: string) => {
            if (/\d/.test(c)) c = String.fromCharCode(+c + 65);
            return 'BAKPLCQDREVOSFTGUHMINJWZYX'.indexOf(c);
        };
        const sum = [...code].reduce((a,v,i) => a + ([even,odd][i%2])(v), 0);
        return String.fromCharCode(65 + sum % 26);
    }

    public getHashTags(str: any | undefined) {
        let strArr = str.split(" ");
        let output = [];
        for(let i=0; i<3; i++) {
            if(strArr[i])
                output.push("#" + strArr[i].toLowerCase().replace(",", "").replace("?", ""));
        }
        return output;
    }

    public additivePersistence(n: any | undefined) {
        let count = 0;
        while (n.toString().length > 1) {
            count++
            let splitStr = n.toString().split('');
            n = splitStr.reduce((a: number, b: any) => a + Number(b),0);
        }
        return count;
    }

    public multiplicativePersistence(n: any | undefined) {
        let count = 0;
        while (n.toString().length > 1) {
            count++
            let splitStr = n.toString().split('');
            n = splitStr.reduce((a: number, b: any) => a * Number(b),1);
        }
        return count;
    }

    public twoPowersTwo(n: any | undefined){
        let deduction = 1
        while (deduction < n)
        {deduction *= 2;}
        let remaining = n;
        let used = 0;
        while (deduction >= 1 && used < 2)
        {
            if (deduction <= remaining)
            {
                remaining -= deduction;
                deduction /= 2;
                used += 1;
            }
            else
            {
                deduction /= 2;
            }
        }
        return remaining == 0 && n != 0;
    }

    public repeat(str: any | undefined,nb: any | undefined){
        if (nb <= 0) return ''
        let powArr = []
        while(nb > 0) {
            let pow = Math.floor(Math.log(nb)/Math.log(2))
            powArr.unshift(pow)
            nb -= Math.pow(2,pow)
        }
        let strObj: any = {}
        let startPow = 0
        while(powArr.length > 0) {
            if (powArr[0] === startPow) {
                strObj[powArr[0]] = str
                powArr.shift()
            }
            if (powArr.length === 0) break
            str += str
            startPow++
        }
        let res = ''
        for (let key in strObj) {
            res += strObj[key]
        }
        return res;
    }

    public diagonalize(number: any | undefined, origin: any | undefined) {
        let result = [];
        for (let index = 0; index < number; index += 1) {
            let row = [];
            for (let jindex = 0; jindex < number; jindex += 1) {
                row.push(index + jindex);
                if (jindex + 1 === number) result.push(row);
            }
        }
        if (origin === 'ur') {
            result = result.map((row) => row.reverse());
        } else if (origin === 'lr') {
            result = result.map((row) => row.reverse()).reverse();
        } else if (origin === 'll') {
            result =  result.reverse();
        }
        return result;
    }

    public charBox(size: any | undefined) {
        if (size < 0 || size % 1 != 0) return -1;
        let box = [], edge = [];
        for (let i = 0; i < size; i++) { edge.push("#") }
        box.push(edge);
        for (let r = 0; r < size-2; r++) {
            let row = ["#"];
            for (let i = 0; i < size-2; i++) { row.push(" ") }
            row.push("#");
            box.push(row);
        }
        if (size > 1) box.push(edge);
        return box;
    }

    public doubleCounter1() {
        this.counter1=this.counter1*2;
    }

    public doubleCounter2() {
        this.counter2=this.counter2*2;
    }

    public doubleCounter3() {
        this.counter3=this.counter3*2;
    }

    public doubleCounter4() {
        this.counter4=this.counter4*2;
    }

    public doubleCounter5() {
        this.counter5=this.counter5*2;
    }

    public doubleCounter6() {
        this.counter6=this.counter6*2;
    }

    public doubleCounter7() {
        this.counter7=this.counter7*2;
    }

    public doubleCounter8() {
        this.counter8=this.counter8*2;
    }

    public doubleCounter9() {
        this.counter9=this.counter9*2;
    }

    public doubleCounter10() {
        this.counter10=this.counter10*2;
    }

    public doubleCounter11() {
        this.counter11=this.counter11*2;
    }

    public doubleCounter12() {
        this.counter12=this.counter12*2;
    }

    public doubleCounter13() {
        this.counter13=this.counter13*2;
    }

    public doubleCounter14() {
        this.counter14=this.counter14*2;
    }

    public doubleCounter15() {
        this.counter15=this.counter15*2;
    }

    public doubleCounter16() {
        this.counter16=this.counter16*2;
    }

    public doubleCounter17() {
        this.counter17=this.counter17*2;
    }

    public doubleCounter18() {
        this.counter18=this.counter18*2;
    }

    public doubleCounter19() {
        this.counter19=this.counter19*2;
    }

    public doubleCounter20() {
        this.counter20=this.counter20*2;
    }

    public doubleCounter21() {
        this.counter21=this.counter21*2;
    }

    public doubleCounter22() {
        this.counter22=this.counter22*2;
    }

    public doubleCounter23() {
        this.counter23=this.counter23*2;
    }

    public doubleCounter24() {
        this.counter24=this.counter24*2;
    }

    public doubleCounter25() {
        this.counter25=this.counter25*2;
    }

    public doubleCounter26() {
        this.counter26=this.counter26*2;
    }

    public doubleCounter27() {
        this.counter27=this.counter27*2;
    }

    public doubleCounter28() {
        this.counter28=this.counter28*2;
    }

    public doubleCounter29() {
        this.counter29=this.counter29*2;
    }

    public doubleCounter30() {
        this.counter30=this.counter30*2;
    }

    public doubleCounter31() {
        this.counter31=this.counter31*2;
    }

    public doubleCounter32() {
        this.counter32=this.counter32*2;
    }

    public doubleCounter33() {
        this.counter33=this.counter33*2;
    }

    public doubleCounter34() {
        this.counter34=this.counter34*2;
    }

    public doubleCounter35() {
        this.counter35=this.counter35*2;
    }

    public doubleCounter36() {
        this.counter36=this.counter36*2;
    }

    public doubleCounter37() {
        this.counter37=this.counter37*2;
    }

    public doubleCounter38() {
        this.counter38=this.counter38*2;
    }

    public doubleCounter39() {
        this.counter39=this.counter39*2;
    }

    public doubleCounter40() {
        this.counter40=this.counter40*2;
    }

    public tripleCounter1() {
        this.counter1=this.counter1*3;
    }

    public tripleCounter2() {
        this.counter2=this.counter2*3;
    }

    public tripleCounter3() {
        this.counter3=this.counter3*3;
    }

    public tripleCounter4() {
        this.counter4=this.counter4*3;
    }

    public tripleCounter5() {
        this.counter5=this.counter5*3;
    }

    public tripleCounter6() {
        this.counter6=this.counter6*3;
    }

    public tripleCounter7() {
        this.counter7=this.counter7*3;
    }

    public tripleCounter8() {
        this.counter8=this.counter8*3;
    }

    public tripleCounter9() {
        this.counter9=this.counter9*3;
    }

    public tripleCounter10() {
        this.counter10=this.counter10*3;
    }

    public tripleCounter11() {
        this.counter11=this.counter11*3;
    }

    public tripleCounter12() {
        this.counter12=this.counter12*3;
    }

    public tripleCounter13() {
        this.counter13=this.counter13*3;
    }

    public tripleCounter14() {
        this.counter14=this.counter14*3;
    }

    public tripleCounter15() {
        this.counter15=this.counter15*3;
    }

    public tripleCounter16() {
        this.counter16=this.counter16*3;
    }

    public tripleCounter17() {
        this.counter17=this.counter17*3;
    }

    public tripleCounter18() {
        this.counter18=this.counter18*3;
    }

    public tripleCounter19() {
        this.counter19=this.counter19*3;
    }

    public tripleCounter20() {
        this.counter20=this.counter20*3;
    }

    public tripleCounter21() {
        this.counter21=this.counter21*3;
    }

    public tripleCounter22() {
        this.counter22=this.counter22*3;
    }

    public tripleCounter23() {
        this.counter23=this.counter23*3;
    }

    public tripleCounter24() {
        this.counter24=this.counter24*3;
    }

    public tripleCounter25() {
        this.counter25=this.counter25*3;
    }

    public tripleCounter26() {
        this.counter26=this.counter26*3;
    }

    public tripleCounter27() {
        this.counter27=this.counter27*3;
    }

    public tripleCounter28() {
        this.counter28=this.counter28*3;
    }

    public tripleCounter29() {
        this.counter29=this.counter29*3;
    }

    public tripleCounter30() {
        this.counter30=this.counter30*3;
    }

    public tripleCounter31() {
        this.counter31=this.counter31*3;
    }

    public tripleCounter32() {
        this.counter32=this.counter32*3;
    }

    public tripleCounter33() {
        this.counter33=this.counter33*3;
    }

    public tripleCounter34() {
        this.counter34=this.counter34*3;
    }

    public tripleCounter35() {
        this.counter35=this.counter35*3;
    }

    public tripleCounter36() {
        this.counter36=this.counter36*3;
    }

    public tripleCounter37() {
        this.counter37=this.counter37*3;
    }

    public tripleCounter38() {
        this.counter38=this.counter38*3;
    }

    public tripleCounter39() {
        this.counter39=this.counter39*3;
    }

    public tripleCounter40() {
        this.counter40=this.counter40*3;
    }

    public callMethods1() {
        console.log(this.sevenBoom(undefined));
        console.log(this.towerHanoi(undefined));
        console.log(this.countBoomerangs(undefined));
        console.log(this.oddishOrEvenish(undefined));
        console.log(this.getDays(undefined, undefined));
        console.log(this.aveSpd(undefined, undefined, undefined));
        console.log(this.doesBrickFit(undefined, undefined, undefined, undefined, undefined));
        console.log(this.numInStr(undefined));
        console.log(this.combinations(undefined));
        console.log(this.countLayers(undefined));
        console.log(this.doubleSwap(undefined, undefined, undefined));
        console.log(this.getTotalPrice(undefined));
        console.log(this.colorPatternTimes(undefined));
        console.log(this.lcm(undefined, undefined));
        console.log(this.valueInTree(undefined, undefined));
        console.log(this.reverseOdd(undefined));
        console.log(this.getFrequencies(undefined));
        console.log(this.goldDistribution(undefined));
        console.log(this.isPrime(undefined));
        console.log(this.ranges(undefined));
    }

    public callMethods2() {
        console.log(this.sortArray(undefined));
        console.log(this.transposeMatrix(undefined));
        console.log(this.countLoneOnes(undefined));
        console.log(this.stringToNum(undefined));
        console.log(this.numToString(undefined));
        console.log(this.wordedMath(undefined));
        console.log(this.allAboutStrings(undefined));
        console.log(this.reversedBinaryInteger(undefined));
        console.log(this.countTrue(undefined));
        console.log(this.trackRobot(undefined));
        console.log(this.doesTriangleFit(undefined, undefined));
        console.log(this.zeroesToEnd(undefined));
        console.log(this.primeInRange(undefined, undefined));
        console.log(this.numWays(undefined, undefined));
        console.log(this.analyzeContent(undefined));
        console.log(this.escapeVelocity(undefined));
        console.log(this.getLanguages(undefined));
        console.log(this.fiscalCodeCIN(undefined));
        console.log(this.getHashTags(undefined));
        console.log(this.additivePersistence(undefined));
    }

    public callMethods3() {
        console.log(this.multiplicativePersistence(undefined));
        console.log(this.twoPowersTwo(undefined));
        console.log(this.repeat(undefined, undefined));
        console.log(this.diagonalize(undefined, undefined));
        console.log(this.charBox(undefined));
    }

    public callMethods4() {
        this.doubleCounter1();
        this.doubleCounter2();
        this.doubleCounter3();
        this.doubleCounter4();
        this.doubleCounter5();
        this.doubleCounter6();
        this.doubleCounter7();
        this.doubleCounter8();
        this.doubleCounter9();
        this.doubleCounter10();
        this.doubleCounter11();
        this.doubleCounter12();
        this.doubleCounter13();
        this.doubleCounter14();
        this.doubleCounter15();
        this.doubleCounter16();
        this.doubleCounter17();
        this.doubleCounter18();
        this.doubleCounter19();
        this.doubleCounter20();
    }

    public callMethods5() {
        this.doubleCounter21();
        this.doubleCounter22();
        this.doubleCounter23();
        this.doubleCounter24();
        this.doubleCounter25();
        this.doubleCounter26();
        this.doubleCounter27();
        this.doubleCounter28();
        this.doubleCounter29();
        this.doubleCounter30();
        this.doubleCounter31();
        this.doubleCounter32();
        this.doubleCounter33();
        this.doubleCounter34();
        this.doubleCounter35();
        this.doubleCounter36();
        this.doubleCounter37();
        this.doubleCounter38();
        this.doubleCounter39();
        this.doubleCounter40();
    }

    public callMethods6() {
        this.tripleCounter1();
        this.tripleCounter2();
        this.tripleCounter3();
        this.tripleCounter4();
        this.tripleCounter5();
        this.tripleCounter6();
        this.tripleCounter7();
        this.tripleCounter8();
        this.tripleCounter9();
        this.tripleCounter10();
        this.tripleCounter11();
        this.tripleCounter12();
        this.tripleCounter13();
        this.tripleCounter14();
        this.tripleCounter15();
        this.tripleCounter16();
        this.tripleCounter17();
        this.tripleCounter18();
        this.tripleCounter19();
        this.tripleCounter20();
    }

    public callMethods7() {
        this.tripleCounter21();
        this.tripleCounter22();
        this.tripleCounter23();
        this.tripleCounter24();
        this.tripleCounter25();
        this.tripleCounter26();
        this.tripleCounter27();
        this.tripleCounter28();
        this.tripleCounter29();
        this.tripleCounter30();
        this.tripleCounter31();
        this.tripleCounter32();
        this.tripleCounter33();
        this.tripleCounter34();
        this.tripleCounter35();
        this.tripleCounter36();
        this.tripleCounter37();
        this.tripleCounter38();
        this.tripleCounter39();
        this.tripleCounter40();
    }
}
