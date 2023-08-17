function solution(str) {
    let answer;
    let strMap = new Map();
    for (let s of str) {
        if (strMap.has(s)) {    
            strMap.set(s, strMap.get(s)+1);
        } else {
            strMap.set(s, 1);
        }
    }

    let max = Number.MIN_SAFE_INTEGER;
    for (let [key, val] of strMap) {
        if (val > max) {
            max = val;
            answer = key;
        }
    }
    return answer;
}
let str = 'BACBACCACCBDEDE';
console.log(solution(str));