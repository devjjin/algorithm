function solution(s) {
  let answer = '';
  let idx = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === ' ') {
      idx = 0;
      answer += ' ';
    } else {
      answer += (idx % 2 === 0) ? s[i].toUpperCase() : s[i].toLowerCase();
      idx++;
    }
  }
  return answer;
}