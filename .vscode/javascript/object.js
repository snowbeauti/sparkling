'use strict';

//Objects
//One of the JavaScript's data types.
//a collection of related data and/or functionality
//Nearly all objects in JavaScript are instances of Object
//object = {key : value};

//1.Literals and properties
const obj1 = {} //'object literal' syntax
const obj2 = new Object(); //'object constructor' syntax

function print (person) {
    console.log(person.name);
    console.log(person.age);
} 

const ellie = {name:'ellie', age: 4 };
print(ellie);

//with JavaScript magic (dynamically typed language)
//can add properties later
ellie.hasJob = true;
console.log(ellie.hasJob);

//can delete properties lager
delete ellie.hasJob;
console.log(ellie.hasJob);

//2. computed properties
//key should be always string
console.log(ellie.name);
console.log(ellie['name']); //실시간으로 값을 받아서 사용할때
ellie['hasJob'] = true;
console.log(ellie.hasJob);

function printValue (obj, key){
    console.log(obj[key]); //동적으로 사용할때 
}

//3. property value shorthand
const person1 = {name: 'bob', age:2};
const person2 = {name: 'steve', age:132};
const person3 = {name: 'dave', age:4};

function makePerson (name, age){
    return {
         name,
         age,
    }
}

const person4 = makePerson('ellie', 30);
console.log(person4);

//4. Constructior function
function Person(name, age){
    this.name = name;
    this.age = age;
}

const person5 = new Person('ellie', 30);
console.log(person5);

//5. in operator : property existence check (key in obj) 오브젝트 안에 키값이 있는지 확인하기
console.log('name' in ellie);
console.log('age' in ellie);
console.log('random' in ellie);
console.log(ellie.random); //key 값이 정의되지 않았으면 undefined


//6. for..in vs for..of
//for (key in obj)

console.log(ellie);


for (let key in ellie) {
    console.log(key);
}


for (let key in ellie) { // ellie 오브젝트의 모든 키들을 순서대로 key변수에 할당
    console.log(key);   // 그 key변수를 출력
     }

const ellies = { name: "ellie", age: 4 };
ellies.hasJob = true;
const us = {};              // 텅텅빈 us라는 오브젝트를 만듬
for (let key in ellies) { // ellie 오브젝트의 모든 키들을 순서대로 key변수에 할당
us[key] = ellies[key];   // us 오브젝트의 key에 (이때  ellie 오브젝트에 있던 키들이 순서대로 할당되겠죠?) ellie 오브젝트의 key에 해당하는 변수가 할당됨
}
console.log(us);

for (let key in ellies) {
console.log(`key:${key} value from ellie: ${ellies[key]}`);
console.log(`before: ${us[key]}`);
us[key] = ellies[key];
console.log(`after: ${us[key]}`);
}


//for (value of iterable)
const array = [1,2,3,4,5];
for(let i=0; i<array.length; i++){
    console.log(array[i]);
}
//=>

for(let value of array){
    console.log(value);
}


//7. Fun cloning
//Object.assign(dest, [obj1, obj2, obj3...])
const user = {name: 'ellie', age: '20'};
const user2 = user;
console.log(user);

//old way
const user3 = {};
for(let key in user){
    user3[key] = user[key];
}

console.clear();
console.log(user3);

const user4 = {};
Object.assign(user4, user);
console.log(user4);

const user5 = Object.assign({}, user);//비어있는 값에 user 복사
console.log(user5);

//another example
const fruit1 = {color: 'red'};
const fruit2 = {color: 'blue', size: 'big'};
const mixed = Object.assign({}, fruit1, fruit2); //뒤의값으로 덮어짐
console.log(mixed.color);
console.log(mixed.size);


console.log();