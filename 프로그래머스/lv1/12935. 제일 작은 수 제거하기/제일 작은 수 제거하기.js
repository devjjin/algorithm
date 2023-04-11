function solution(arr) {
    const min = arr.reduce((acc, cur) => { return acc < cur ? acc : cur;});
    const answer = arr.filter((num) => num !== min);
    return answer.length > 0 ? answer : [-1];
}