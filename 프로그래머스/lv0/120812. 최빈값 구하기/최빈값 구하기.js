function solution(array) {  
    const frequencyArr = new Array(Math.max(...array) + 1).fill(0);
    let maxCnt = 0;
    let answer = 0;

    array.forEach((num) => {
        frequencyArr[num]++;
        if (frequencyArr[num] > maxCnt) {
            maxCnt = frequencyArr[num];
            answer = num;
        } else if (frequencyArr[num] === maxCnt) {
            answer = -1;
        }
    });
    return answer;
}