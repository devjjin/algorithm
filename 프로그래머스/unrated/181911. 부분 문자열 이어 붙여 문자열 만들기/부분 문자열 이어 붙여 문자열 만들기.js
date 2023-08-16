function solution(my_strings, parts) {
    const answer = my_strings.map((string, idx) => {
        const [start, end] = parts[idx];
        return string.substring(start, end + 1);
    });
    return answer.join('');
}
