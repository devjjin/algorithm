function solution(arr) {
    const answer = [];
    const stack = [];
    stack.push(arr[0]);
    for (let i = 1; i < arr.length; i++) {
        const top = stack[stack.length - 1];
        if (top !== arr[i]) {
        stack.push(arr[i]);
        }
    }   
    stack.forEach((num) => answer.push(num));
    return answer;
}