
// 소수점 버리고 숫자 가져오기
function getRoundNum (num, round) {
    let number = num.toFixed(round);
    return Number(number);
}
console.log(getRoundNum(2.134, 0)); 