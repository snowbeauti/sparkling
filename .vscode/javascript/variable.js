//1.use strict
//added in ES 5
//use this for vanila Javascript
'use strict';

//2. Variaable, rw(read/write)
//let(added in ES6)
let globalName = 'global name';
{
    let name = 'sula';
    console.log(name);
    name = 'hello';
    console.log(name);
    console.log(globalName);
}

console.log(name);//블럭 안에서만 사용가능
console.log(globalName);

//var (don't ever use this)
//var hoisting (move declaration from bottom to top)
// has no block scope

{
    age = 4;
    var age;
}
console.log(age);

//3. Constant, r(read only)
//use const whenever possible
//only use let if variable needs to change.

//favor immutable deta type always for a few reasons:
//-security
//-thread safety
//-reduce human mistakes
const daysInWeek = 7;
const maxNumber = 5;

//Note!
//Immutable data types : premitive types, frozen objects (i.e. object.freeze())
//Mutable data types : all objects by default are mutable in JS



//4. Variable types
//primitive, single item : number, string boolean, null, nudifined, symbol
//object, box container
//function, first-class function

//number
const count = 17; //integer
const size = 17.1 // decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

//number- special numeric values : infinity, -infinity, Nan
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

//string
const char = 'c';
const brenden = 'brenden';
const greeting = 'hello ' + brenden;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brenden}!`; //template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);
console.log('value: ' + helloBob + 'type: ' + typeof helloBob);

//boolean
//false: 0, null, undefined, NAn, ''
//true: any other value
const canRead = true;
const test = 3<1; //false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

//null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

//undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`);

//symbol, create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2); //false
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); //true
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);

//5, Dynamically typed language
let text = 'hello';
console.log(text.charAt(0)); //h
console.log(`value: ${text}, type: ${typeof test}`);
text = 1;
console.log(`value: ${text}, type: ${typeof test}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof test}`);
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof test}`);
console.log(text.charAt(0)); // error