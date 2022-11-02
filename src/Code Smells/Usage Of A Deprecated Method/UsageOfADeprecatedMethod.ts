import {DiverseCodeSmells} from "../Diverse Code Smells/DiverseCodeSmells";

export class UsageOfADeprecatedMethod {

    constructor() {
        const diverseCodeSmells = new DiverseCodeSmells(2, 2, 'test');
        diverseCodeSmells.execute();
    }
}
