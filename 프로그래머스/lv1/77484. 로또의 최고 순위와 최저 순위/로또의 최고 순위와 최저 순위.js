function solution(lottos, win_nums) {
  const rank = [6, 6, 5, 4, 3, 2, 1];
  let zeroCnt = 0;
  let matchCnt = 0;

  for (let i = 0; i < lottos.length; i++) {
    const num = lottos[i];
    if (num === 0) {
      zeroCnt++;
    } else if (win_nums.includes(num)) {
      matchCnt++;
    }
  }
  const maxRank = rank[matchCnt + zeroCnt];
  const minRank = rank[matchCnt];
  return [maxRank, minRank];
}