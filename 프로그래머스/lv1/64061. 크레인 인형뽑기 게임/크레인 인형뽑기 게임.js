function solution (board, moves) {
    const basket = [];
    let result = 0;
    
    moves.forEach((move, i)=>{
        const foundLine = board.find(line => line[move - 1] > 0);
        if (foundLine)  {
            basket.push(foundLine[move - 1]);
            foundLine[move - 1] = 0;
        }
        const index = basket.findIndex((v,i)=> v === basket[i + 1]);
        if (index > -1) {
            basket.splice(index, 1);
            basket.splice(index, 1);
            result++;
        }
    })
    return result * 2;
}
