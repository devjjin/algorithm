function solution(array, commands) {    
    let answer = [];
    answer = array.slice(2, 5, 3);
    for (let i = 0; i <= commands.length; i++) {
        array.slice(commands[i], commands[i+1], commands[i+2]);
    }
    console.log(array);
    // return answer;
}