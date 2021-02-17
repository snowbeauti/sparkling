//1. String concatenation
console.log('my' + ' cat');
console.log('1' + 2);
console.log(`string literals: 1 + 2 = ${1 + 2}`);

//2. Numeric operatiors
console.log(1 + 1); //add
console.log(1 - 1);//substract
console.log(1 / 1);//divide
console.log(1 * 1);//multiply
console.log(5 % 2);//remainder
console.log(2 ** 3);//exponentiation

//3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
//counter = counter + 1; 
//preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);

//true가 !(아니)면 false
console.log(!true);
//9. Ternary operator:?
//condition ? value1 : value2;
let name = 'sula';
console.log(name === 'ellie' ? 'yes' : 'no');
//name = ellie 이면 yes 아니면 no

//10. Switch statement
const browser = 'IE';
switch (browser){
    case 'IE':
        console.log('go');
        break;
    case 'chrome':
    case 'edge':
        console.log('love');
        break;
    default:
        console.log('nothing');
        break;        
}

//11.Loops
//while loop, while the condition is truthy
//body code is executed.
let i = 3;
while (i>0){
    console.log(`while: ${i}`);
    i--;
}

//do while loop, body code is executed first,
//then check the condition.
do{
    console.log(`do while: ${i}`);
    i--;
} while(i>0);

//break, continue
//0-10까지 짝수만 출력 (continue사용)
for (let i=0; i<11; i++) {   
    if(i % 2 !== 0){
        continue;
    }
    console.log(`${i}`);
}

//0-10까지 출력 (use break)
for (let i=0; i<11; i++) {
    console.log(`${i}`);
    if(i > 8){
        break;
    }
}
