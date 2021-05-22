import  Deque from "./Classes/Deque.js"
import Stack from "./Classes/Stack.js";
import {dequeSort} from "./tasks/task1.js";
import {bracketFinderStack} from "./tasks/task4.js";
import {bracketFinderDeque} from "./tasks/task5.js";
import {regexParse} from "./tasks/task6.js";
import {numbersParse} from "./tasks/task7.js";
import {stringRevers} from "./tasks/task8.js";
import {computeForm, computeLogic1, computeMinMax} from "./tasks/task9-11.js";
import {han} from "./tasks/task3.js";
import {cip} from "./tasks/task2.js";



//1
console.log(dequeSort([10,11,12,1,123,13414]))
//2
let str="12191(45197689)"
let dec=new Deque
dec.pushFront("1");
dec.pushFront("2");
dec.pushFront("т");
dec.pushFront("у");
dec.pushFront("9");
dec.pushFront("(");
dec.pushFront(" ");
dec.pushFront("е");
dec.pushFront("4");
dec.pushFront("5");
dec.pushFront("к");
dec.pushFront("с");
dec.pushFront("6");
dec.pushFront("7");
dec.pushFront("л");
dec.pushFront("д");
dec.pushFront("8");
dec.pushFront(")");
dec.pushFront("я");
dec.pushFront("3");

console.log(cip(str,dec))
//3
let kol=3
han(kol);
//4
console.log(bracketFinderStack("(((((dadasd)()adada()(adsad))adad)))".split("")))
//5
console.log(bracketFinderDeque("(((((dadasd)()adada()(adsad))adad))())".split("")))
//6
regexParse("a123q@#")
//7
numbersParse([1, -1,24,0,-123])
//8
stringRevers("aaaaa bbbbbbb cccccc")
//9
// console.log(computeLogic({
//     type: "compute",
//     value: "+F+(T*F+(F+T))"
// }));
computeLogic1("(F+(T*F+(F+T)))X(NT)")
//10
computeMinMax("N(9,(M(1,N(1,2))))")
//11
computeForm("x+(y+z+(z+y))")







