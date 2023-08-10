function solution(score) {
    const answer = [];
    const avgArr = score.map(score => (score[0] + score[1]) / 2);
    const rankArr = [...avgArr].sort((a, b) => b - a);
    
    for(let i of avgArr){
        answer.push(rankArr.indexOf(i)+1);
    }
    return answer;
}