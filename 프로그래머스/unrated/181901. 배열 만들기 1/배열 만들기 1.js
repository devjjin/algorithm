function solution(n, k) {
    let answer = [];
    const len = parseInt(n / k);    
    const max = len * k;
    for (let i = k; i <= max; i+= k) {
        answer.push(i);
    }
    return answer;
}