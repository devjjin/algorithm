function solution(answers) {
    const answer = [];
    const person1 = [1, 2, 3, 4, 5];
    const person2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const person3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    
    const person1_answer = answers.filter((answer, index) => answer === person1[index % person1.length]).length;
    const person2_answer =  answers.filter((answer, index) => answer === person2[index % person2.length]).length;
    const person3_answer =  answers.filter((answer, index) => answer === person3[index % person3.length]).length;

    const max = Math.max(person1_answer, person2_answer, person3_answer);
    
    if(person1_answer === max) answer.push(1);
    if(person2_answer === max) answer.push(2);
    if(person3_answer === max) answer.push(3);

    return answer;
}