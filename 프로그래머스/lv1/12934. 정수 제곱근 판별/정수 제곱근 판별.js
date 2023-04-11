function solution(n) {
  let num = Math.sqrt(n);
  return (n % num === 0) ? ((num+1) ** 2) : -1;
}