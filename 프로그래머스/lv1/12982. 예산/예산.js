function solution(d, budget) {
    let answer = 0;
    let cnt = 0;
    d.sort((a, b) => a - b);
    for (let money of d) {
        if (budget - money >= 0) {
            budget -= money;
            cnt++;
        } else { 
            break;
        }
    }
    return cnt;
}