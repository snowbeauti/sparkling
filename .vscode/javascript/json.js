'use strict';

//JSON
//JavaScript Object Nottation
//오버로딩 -함수의 이름은 동일하지만 어떤, 몇개의 함수를 저장하느냐에 따라 달라짐


//1.Ojbect to JSON
//stringify(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']); //=>["apple","banana"]
console.log(json);

const rabbit = {
    name: 'tori',
    color: 'white',
    size: null,
    birthDate: new Date(),
    /*
    jump: () =>{
        console.log(`${name} can jump!`);
    },
    */
}
//notice! 함수나 Symbol은 반영되지 않음!

json = JSON.stringify(rabbit);
console.log(json);

json = JSON.stringify(rabbit, ['name'], ['size']);
//원하는 property만 전달가능
console.log(json);

json = JSON.stringify(rabbit, (key, value) =>{
    console.log(`key: ${key}, value: ${value}`);
    return key === 'name' ? 'ellie' : value; //name 키값이 있으면 value를 ellie로 없으면 value로 
});
console.log('--------------');
console.log(json);

//2.JSON to Object
//어떤 타입의 오브젝트를 받아서 String으로 변환시켜줌
//parse(json)
console.clear();
json = JSON.stringify(rabbit);

const obj = JSON.parse(json, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'birthDate' ? new Date(value) : value; 
});
//출력 가능한 값은 String 이기 때문에 


console.log(obj);
console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate.getDate());

