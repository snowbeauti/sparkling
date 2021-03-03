'use strict';



//Synchronoust callback
function printImmdiately(print){
    print();
}

//Asynchronous callback
function printWithDelay(print, timeout){
    setTimeout(print, timeout);
}


//JavaScript is synchronous.
//Execute code block by orfer after hoistion.
//hoisting : var. function declaration
console.log('1');
setTimeout(()=> console.log('2'), 1000); //1000->1초, 1초가 지나고 출력 

console.log('3');


printImmdiately(() => console.log('hello'));



printWithDelay(() =>console.log('async callback'), 2000);

//callback Hell example
class UserStorage{
    loginUser(Id, password, onSuccess, onError) {
    setTimeout(()=>{
        if(
            (id=== 'ellie' && password === 'dream')||
            (id ==='coder' && password === 'academy')
        ) {
            onSuccess(id);
        } else {
            onError(new Error('not found'));
        } 
    }, 2000);
}

    getRoles(user, onSuccess, onError){
        setTimeout(() => {
            if(user === 'ellie') {
                onSuccess({name:'ellie', rloe:'admin'});
            } else{
            onError(new Error('no access'));
            }
        }, 1000);
    }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');

UserStorage.loginUser(
    id, 
    password, 
    user => {
        userStorage.getRoles(
            user,
            userWithRole => {
                alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`)
            },
            error => {
            console.log(error);
            }
        );
    },
    error => {
        console.log(error);
    }
);

//콜백지옥 => 한눈에 보기 어려움
//디버깅하기 어려움