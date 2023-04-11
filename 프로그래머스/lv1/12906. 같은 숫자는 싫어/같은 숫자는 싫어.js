function solution(arr) {
    const answer = [];
    let prev = null;
    arr.forEach((num) => {
        if(num !== prev) {
            answer.push(num);
            prev = num;
        }
    })
    return answer;
}