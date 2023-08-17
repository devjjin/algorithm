function solution(participant, completion) {
    let answer = '';
    let map = new Map(); 
     for (let x of completion) {
        if (map.has(x)) {
            map.set(x, map.get(x) + 1);
        } else {
            map.set(x, 1);
        }
    }
    for (let x of participant) {
        if (!map.has(x) || map.get(x) === 0) {
            answer = x;
            break;
        } else {
            map.set(x, map.get(x) - 1);
        }
    }
    return answer;
}