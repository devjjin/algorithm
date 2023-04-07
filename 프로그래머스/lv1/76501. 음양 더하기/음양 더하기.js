function solution(absolutes, signs) {
    let sum = 0;
    for(let i = 0; i < signs.length; i++) {
        (signs[i]) ? sum += absolutes[i] : sum -= absolutes[i];
    }
    return sum;
}