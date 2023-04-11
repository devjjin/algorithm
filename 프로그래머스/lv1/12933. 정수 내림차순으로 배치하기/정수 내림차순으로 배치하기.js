function solution(n) {  
    const answer = [];
    while (n > 0) { 
        answer.push(n % 10);
        n = Math.floor(n / 10);
    }
    answer.sort((a, b) => b - a);
    return answer.reduce((acc, cur) => acc * 10 + cur, 0);
}