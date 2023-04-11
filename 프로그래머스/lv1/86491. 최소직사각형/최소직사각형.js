function solution(sizes) {
    let max_width = 0;
    let max_height = 0;
    for (let i = 0; i < sizes.length; i++) {
        const [width, height] = sizes[i];
        max_width = Math.max(max_width, Math.max(width, height));
        max_height = Math.max(max_height, Math.min(width, height));
    }
    return max_width * max_height;
}