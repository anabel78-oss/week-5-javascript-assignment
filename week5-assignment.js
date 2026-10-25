
 // QUESTION 1: STUDENT GRADING SYSTEM

// 1. Student Information
let firstName = "Anabel";
let lastName = "Obieze";

// 2. Subject Scores
let javascriptScore = 25;
let htmlScore = 30;
let cssScore = 25;

// 3. Calculate Total Score
let totalScore = javascriptScore + htmlScore + cssScore;

// 4. Determine Student's Remark
let remark;

if (totalScore >= 70) {
    remark = "Excellent";
} else if (totalScore >= 50 && totalScore <= 69) {
    remark = "Good";
} else if (totalScore >= 35 && totalScore <= 49) {
    remark = "You can do better";
} else {
    remark = "Fail";
}









// QUESTION 2: FIZZBUZZ CHALLENGE

for (let number = 1; number <= 100; number++) {

    if (number % 3 === 0 && number % 5 === 0) {
        console.log("FizzBuzz");

    } else if (number % 3 === 0) {
        console.log("Fizz");

    } else if (number % 5 === 0) {
        console.log("Buzz");

    } else {
        console.log(number);
    }

}

