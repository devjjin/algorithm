function solution(n) {
  let answer = 0;
  while (n > 0) {
    answer++;
    if (answer % 3 !== 0 && !answer.toString().includes('3')) {
      n--;
    }
  }
  return answer;
}