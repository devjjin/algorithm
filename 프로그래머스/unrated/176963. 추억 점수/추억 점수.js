function solution(name, yearning, photo) {
    const answer = [];
    const map = new Map();
    
    for (let i = 0; i < name.length; i++) {
        map.set(name[i], yearning[i]);
    }
    
    for (const person of photo) {
        let sum = 0;
        for (const name of person) {
            if (map.has(name)) {
                sum += map.get(name);
            }
        }
        answer.push(sum);
    }
    return answer;
}
