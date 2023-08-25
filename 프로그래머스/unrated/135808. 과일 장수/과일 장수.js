function solution(k, m, score) {
  score.sort((a, b) => b - a);

  const repeat = parseInt(score.length / m);
  let sum = 0;

  for (let i = m - 1; i < m * repeat; i += m) {
    sum += score[i];
  }
  return sum * m;
}