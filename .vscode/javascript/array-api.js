'use strict';

// Q1. make a string out of an array ______________'join()'
//배열을 문자로 변환
{
    const fruits = ['apple', 'banana', 'orange'];
    const result = fruits.join();
    console.log(result);

    const result2 = fruits.join(' | ');
    console.log(result2);
  }

  
  // Q2. make an array out of a string _____________'split()'
  {
    const fruits = '🍎, 🥝, 🍌, 🍒';
    const result = fruits.split(',');
    console.log(result);

    const result2 = fruits.split(',', 2); //2개를 전달받고 싶을 때
    console.log(result2);
  }
  
  // Q3. make this array look like this: [5, 4, 3, 2, 1] ________________'reverse()'
  {
    const array = [1, 2, 3, 4, 5];
    const result = array.reverse();
    console.log(result);
    console.log(array); //배열 자체를 변경함
  }
  
  // Q4. make new array without the first two elements______________________'slice()'
  {
    const array = [1, 2, 3, 4, 5];
    const result = array.splice(0,2);
    
    console.log(result);//삭제된 배열__배열이 변경되기때문에 적합하지 x
    console.log(array);// 남은 배열__배열이 변경되기때문에 적합하지 x

    const array2 = [1, 2, 3, 4, 5];
    const result2 = array2.slice(2,4); //배열 2부터 4까지 출력
    console.log(result2);
    console.log(array2); //배열은 변하지 않음

  }
  
  class Student {
    constructor(name, age, enrolled, score) {
      this.name = name;
      this.age = age;
      this.enrolled = enrolled;
      this.score = score;
    }
  }
  const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
  ];
  
  // Q5. find a student with the score 90_________________________'find()'
  {
      const result = students.find(function(student, index){
         // console.log(student, index);
            return student.score === 90;
        });
        console.log(result);

        const result2 = students.find((student) => student.score ===90);
        console.log(result2);
    }
  // Q6. make an array of enrolled students__________________________'filter()'
  {
      const result = students.filter((student) => student.enrolled);// true 값 필터링
      console.log(result);
  }
  
  // Q7. make an array containing only the students' scores_________________________'map()'
  // result should be: [45, 80, 90, 66, 88]
  {
      const result = students.map((student) => student.score);//원하는 배열로 재정립 
      console.log(result);  
    }
  
  // Q8. check if there is a student with the score lower than 50___________________'some()'
  {
    console.clear();

    const result = students.some((students) => students.score < 50); //하나라도 만족하면 true;
    console.log(result);  

    const result2 = students.every((students) => students.score < 50); //모두 만족해야 true;
    console.log(result2);  
    console.log(!result2); // = some()
  }
  
  // Q9. compute students' average score______________________________________'reduce()'
  {
      const result = students.reduce((prev, curr) =>{
          console.log('-----------');
          console.log(prev);
          console.log(curr);
          return prev + curr.score;
      }, 0);

      console.log('합: '+result);

      const average = result / students.length;
      console.log(average);
  }
  
  // Q10. make a string containing all the scores
  // result should be: '45, 80, 90, 66, 88'
  {
      const result = students.map((students) => students.score);
      const scorearray = result.join();
      console.log(scorearray);  
  }

  {
      const result = students
      .map((student) => student.score)
      .filter((score) => score >= 50)
      .join();

      console.log(result);
  }
  
  // Bonus! do Q10 sorted in ascending order_____________'sort()'
  // result should be: '45, 66, 80, 88, 90'
  {
      const result = students
      .map((student) => student.score)
      .sort((a, b) =>a - b) //내림차순 배열
      .join();
      console.log(result);
  }
  