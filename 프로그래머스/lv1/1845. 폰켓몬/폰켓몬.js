function solution(nums) {
    let answer = 0;
    let myBall = [...new Set(nums)];
    let limit = nums.length / 2;
    
    return (myBall.length > limit) ? limit : myBall.length;
}