function solution(s) {
    let middle = Math.floor(s.length/2);
    return s.length % 2 === 0 ? s[middle-1] + s[middle] : s[middle];
}