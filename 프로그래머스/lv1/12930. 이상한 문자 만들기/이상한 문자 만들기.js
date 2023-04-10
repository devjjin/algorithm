function solution(s) {
    let answer = '';
    let idx = 0;
    for (let word of s) {
        answer += (idx % 2 === 0) ? word.toUpperCase() : word.toLowerCase();
        idx++;
        if (word === ' ') idx = 0;
    }
    return answer;
}