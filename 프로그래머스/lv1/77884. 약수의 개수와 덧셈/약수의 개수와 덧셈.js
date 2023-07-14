function solution(left, right) {
    let answer = 0;
    for(let i = left; i <= right; i++) {
        let cnt = 0;    // 약수의 개수
        // 약수 개수 구하기
        for(let j = 1; j <= i; j++) {
            if(i % j === 0) {
                cnt++;
            }    
        }
        // 약수의 개수가 짝,홀인지 구분
        if(cnt % 2 === 0) {
            answer += i;
        } else { 
            answer -=i;
        }
    }
    return answer;
}