function solution(spell, dic) {
    const spellArr = spell.slice().sort().join("");
    const dicArr = dic.map(word => word.split("").sort().join(""));
    return dicArr.includes(spellArr) ? 1 : 2;
}