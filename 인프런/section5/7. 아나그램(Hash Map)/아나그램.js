function solution(str1, str2) {
    let answer = 'YES';
    let strMap = new Map();

    for (let s of str1) {
        if (strMap.has(s)) {
            strMap.set(s, strMap.get(s) + 1);
        } else {
            strMap.set(s, 1);
        }
    }
    
    for (let s of str2) {
        if (!strMap.has(s) || strMap.get(s) === 0) return 'No';
        strMap.set(s, strMap.get(s) -1);
    }
    return answer;
}

let str1 = 'AbaAeCe';
let str2=  'baeeACA';
// let str1 = 'abaCC';
// let str2=  'Caaab';
console.log(solution(str1, str2));

