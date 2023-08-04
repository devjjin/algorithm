function factorial(num) {
    if (num <= 1) {
        return 1;
    }
    return num * factorial(num - 1);
}

function solution(balls, share) {
    return Math.round(factorial(balls) / (factorial(share) * factorial(balls - share)));
}

