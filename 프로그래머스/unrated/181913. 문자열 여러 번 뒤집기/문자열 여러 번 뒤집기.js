function solution(my_string, queries) {
    let array = [...my_string];
    for (let [str, end] of queries) {
        const rev = array.slice(str, end + 1).reverse();
        array.splice(str, end - str + 1, ...rev);
    }
    return array.join('');
}
