function solution(food) {
    let answer = '';
    // console.log(food);
    // 1 22 333 0 333 222 1
    // 111303111 // 홀수이면 못먹음
    for (let i = 1; i < food.length; i++) {
        // answer에 food[i]/2 만큼 i를 넣어준다.
        // 둘의 가운데에 0 넣어준다!(물 먹기)
        answer += String(i).repeat(Math.floor(food[i]/2));
        // reverse해서 더해주기?
    }
    return answer + 0 + [...answer].reverse().join('');
}