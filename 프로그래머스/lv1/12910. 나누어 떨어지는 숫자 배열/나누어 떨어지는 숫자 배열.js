function solution(arr, divisor) {
    let answer = [];
    
    for(let x of arr) if(x % divisor === 0 ) answer.push(x);
    if(answer.length === 0) answer.push(-1);
    answer.sort((a, b) => { return a - b;});
    
    return answer;
}