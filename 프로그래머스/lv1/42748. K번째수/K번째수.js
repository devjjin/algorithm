function solution(array, commands) {    
    let answer = [];
    for (let i = 0; i < commands.length; i++) {
        let[strIdx, endIdx, cnt] = commands[i];
        let newArr = array.slice(strIdx - 1, endIdx).sort((a, b) => a-b);
        answer.push(newArr[cnt - 1]);
    }
    return answer;
}