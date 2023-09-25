function solution(n) {
    let nval = n.toString(2).match(/[1]/g).length;

    for(let i = n + 1 ; i < 1000001; i++) {
        let ival = i.toString(2).match(/[1]/g).length;
        if (ival == nval) return i;
    }
}