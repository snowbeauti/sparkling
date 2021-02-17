'use strict';

//Array

//1. Declaration
const arr1 = new Array();
const arr2 = [1,2];

//2. index position
const fruits = ['apple','banana'];
console.log(fruits);
console.log(fruits.length); //2
console.log(fruits[0]); //apple
console.log(fruits[1]); //banana
console.log(fruits[2]); //undifined
//마지막 배열 찾을 때
console.log(fruits[fruits.length-1]);
console.log("///////////////");


//3. Looping over an array
//print all fruits

//a. for
for(let i =0; i<fruits.length; i++){
    console.log(fruits[i]);
}

//b. for of
for(let fruit of fruits){
    console.log(fruit);
}

//c. forEach 콜백함수를 받아온다
fruits.forEach(function(fruit, index){
    console.log(fruit, index);
})

fruits.forEach((fruit) => console.log(fruit));

//4. Addition, deletion, copy
//push : add an item to the end_뒤로추가
fruits.push('딸기','복숭아');
console.log(fruits);

//pop : remove an item form the end_뒤에서 제외
fruits.pop();
console.log(fruits);

//unshift: add an item to the beginning_앞으로 추가(작업이느림)
fruits.unshift('수박', '키위');
console.log(fruits);

//shift : remove an item from the beginning_앞에서 제외(작업이느림)
fruits.shift();
console.log(fruits);

//splice: remove an item by index position
fruits.push('🍍','🍋');
console.log(fruits);
//fruits.splice(2); //2번 배열 이후 삭제
fruits.splice(2,1); //2번 배열부터 1개 삭제
console.log(fruits);

fruits.splice(1,1,'🍇','🍉');//1번 배열부터 1개 삭제 이후 그 자리에 추가
console.log(fruits);

//combine two arrays
const fruits2 = ['🍏','🍒']
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

//5.Searching
//find the index
console.clear(); //콘솔 삭제
console.log(fruits);
console.log(fruits.indexOf('딸기'));//딸기는 몇번째 배열에 있니?
console.log(fruits.indexOf('🍏'));

console.log(fruits.indexOf('코코넛')); //없을 시 '-1'로 표기

//include
console.log(fruits.includes('🍍')); //파인애플이 있니? (type of blooean)
console.log(fruits.includes('🍌')); 

//lastIndexOf
console.clear(); //콘솔 삭제
fruits.push('🍇');
console.log(fruits);
console.log(fruits.indexOf('🍇'));//첫번호
console.log(fruits.lastIndexOf('🍇'));//마지막번호