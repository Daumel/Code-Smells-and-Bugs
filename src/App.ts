import {ConstantCondition} from "./Bugs and Bug-Patterns/Constant Condition/ConstantCondition";
import {ErrorIsNotThrown} from "./Bugs and Bug-Patterns/Error Is Not Thrown/ErrorIsNotThrown";
import {GetterWithoutReturn} from "./Bugs and Bug-Patterns/Getter Without Return/GetterWithoutReturn";
import {
    IgnoreStringOperationResult
} from "./Bugs and Bug-Patterns/Ignore String Operation Result/IgnoreStringOperationResult";
import {
    JumpStatementInFinallyBlock
} from "./Bugs and Bug-Patterns/Jump Statement In Finally Block/JumpStatementInFinallyBlock";
import {NaNUsedInComparison} from "./Bugs and Bug-Patterns/NaN Used In Comparison/NaNUsedInComparison";
import {
    SortingArrayWithoutCompareFunction
} from "./Bugs and Bug-Patterns/Sorting Array Without Compare Function/SortingArrayWithoutCompareFunction";
import {StatementWithoutImpact} from "./Bugs and Bug-Patterns/Statement Without Impact/StatementWithoutImpact";
import {SwitchCaseWithBugPatterns} from "./Bugs and Bug-Patterns/SwitchCaseWithBugPatterns/SwitchCaseWithBugPatterns";
import {UnreachableCode} from "./Bugs and Bug-Patterns/Unreachable Code/UnreachableCode";
import {
    UsageOfNewForSomethingWithoutConstructor
} from "./Bugs and Bug-Patterns/Usage Of New For Something Without Constructor/UsageOfNewForSomethingWithoutConstructor";
import {
    UsageOfOutputOfAVoidFunction
} from "./Bugs and Bug-Patterns/Usage Of Output Of A Void Function/UsageOfOutputOfAVoidFunction";
import {ComplexBooleanExpression} from "./Code Smells/Complex Boolean Expression/ComplexBooleanExpression";
import {DiverseCodeSmells} from "./Code Smells/Diverse Code Smells/DiverseCodeSmells";
import {DiverseCodeSmells2} from "./Code Smells/Diverse Code Smells/DiverseCodeSmells2";
import {DuplicatedCode} from "./Code Smells/Duplicated Code/DuplicatedCode";
import {EmptyCodeBlock} from "./Code Smells/Empty Code Block/EmptyCodeBlock";
import {HighCyclomaticComplexity} from "./Code Smells/High Cyclomatic Complexity/HighCyclomaticComplexity";
import {LargeClass} from "./Code Smells/Large Class/LargeClass";
import {LongFunction} from "./Code Smells/Long Function/LongFunction";
import {LongParameterList} from "./Code Smells/Long Parameter List/LongParameterList";
import {MagicNumber} from "./Code Smells/Magic Number/MagicNumber";
import {UsageOfADeprecatedMethod} from "./Code Smells/Usage Of A Deprecated Method/UsageOfADeprecatedMethod";
import {Child} from "./Bugs and Bug-Patterns/Constructor Of Derived Class Does Not Invoke Super/Child";
import {
    IrregularWhitespaceInJson
} from "./Bugs and Bug-Patterns/Irregular Whitespace In JSON/IrregularWhitespaceInJson";

// Bugs and Bug-Patterns
console.log(new ConstantCondition());
console.log(new ErrorIsNotThrown(5));
console.log(new GetterWithoutReturn('Testing'));
console.log(new IgnoreStringOperationResult());
console.log(new JumpStatementInFinallyBlock(5, 5));
console.log(new NaNUsedInComparison('Testing'));
console.log(new SortingArrayWithoutCompareFunction());
console.log(new StatementWithoutImpact(5));
console.log(new SwitchCaseWithBugPatterns('Testing', 'Testing'));
console.log(new UnreachableCode(5));
console.log(new UsageOfNewForSomethingWithoutConstructor());
console.log(new UsageOfOutputOfAVoidFunction('Testing'));
console.log(new Child(5));
console.log(new IrregularWhitespaceInJson());

// Code Smells
console.log(new ComplexBooleanExpression());
console.log(new DiverseCodeSmells(5, 5, 'Testing'));
console.log(new DiverseCodeSmells2());
console.log(new DuplicatedCode([]));
console.log(new EmptyCodeBlock());
console.log(new HighCyclomaticComplexity([]));
console.log(new LargeClass());
console.log(new LongFunction());
console.log(new LongParameterList());
console.log(new MagicNumber());
console.log(new UsageOfADeprecatedMethod());
