function solution(n) {
  let num = '' ;
  while (n > 0) {
    num += n % 3;
    n = Math.floor(n / 3);    
  }
    let answer = 0;
    for (let i = num.length - 1, trit = 1; i >= 0; i--, trit *= 3) {
        answer += parseInt(num[i]) * trit;
    }
  return answer;
}