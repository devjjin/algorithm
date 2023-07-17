function solution(t, p) {
    let answer = 0;
    for (let i = 0; i <= t.length - p.length; i++) {
        let tmp = t.substr(i, p.length);
        if (Number(p) >= Number(tmp)) {
            answer ++;            
        } 
    }
    return answer;
}