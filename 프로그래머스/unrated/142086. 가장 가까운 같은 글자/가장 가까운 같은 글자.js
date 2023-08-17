function solution(s) {
    const answer = [];
    const idxMap = new Map();
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (idxMap.has(char)) {
            answer.push(i - idxMap.get(char)); 
        } else {
            answer.push(-1);
        }
        idxMap.set(char, i);
    }
    return answer;
}