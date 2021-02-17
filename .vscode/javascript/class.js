'use strict';
//Object-oriendted programming
//class: template
//Object: instance of a class
//javaScript classes
//-introduced in ES6
//-syntactical sugar over prototype-based inheritance

// 1.Class declarations
class Person{
    //constructor
    constructor(name, age){
        //fields
        this.name = name;
        this.age = age;
    }

    //methods
    speak(){
        console.log(`${this.name}: hello!`);
    }
}    
const ellie = new Person('ellie', 20);
console.log(ellie.name); 
console.log(ellie.age);
ellie.speak();


//2. Gatter and Setter
class User{
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get age(){
        return this._age;
    }

    set age(value){
        this._age = value < 0 ? 0 : vlaue;
    }
}

const user1 = new User('steve', 'Jbb', -1);
console.log(user1.age);

//5.Inheritance
//a way for one class to extend another class
class Shape{
    constructor(width, height, color){
        this.width = width;
        this.height = height;
        this.color = color;
    }

draw() {
    console.log(`drawing ${this.color} color of`);
}

getArea(){
    return width * this.height;
}
}

class Rectangle extends Shape{}
class Triangle extends Shape{
    //오버라이딩
    draw(){
        super.draw(); //부모
        console.log('🔺')
    }

    getArea(){
        return (this.width * this.height) / 2;
    }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();

const triange = new Triangle(20, 20, 'red');
triange.draw();
console.log(triange.getArea());

//6. Class shecking : instance of
console.log(rectangle instanceof Rectangle); //true
console.log(triange instanceof Rectangle); //false
console.log(triange instanceof Triangle);//true
console.log(triange instanceof Shape);//true
console.log(triange instanceof Object);//true
