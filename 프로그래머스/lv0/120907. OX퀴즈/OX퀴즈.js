function solution(quiz) {
    const answer = [];
    for (const arr of quiz) {
        const [expression, result] = arr.split('=');
        const calculated = eval(expression);
        answer.push(calculated == result ? "O" : "X");
    }
    return answer;
}