function solution(arr1, arr2) {
    return arr1.map(row => arr2[0].map((v, i) => 
        row.reduce((acc, v, j) => acc + v * arr2[j][i], 0))
    );
}
