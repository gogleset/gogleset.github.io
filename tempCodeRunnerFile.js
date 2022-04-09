// const fs = require('fs');
// const array = fs.readFileSync('/dev/stdin').toString().split('\n');

// 그룹 단어란 단어에 존재하는 모든 문자에 대해서,
// 각 문자가 연속해서 나타나는 경우만을 말한다. 예를 들면,
// ccazzzzbb는 c, a, z, b가 모두 연속해서 나타나고,
// kin도 k, i, n이 연속해서 나타나기 때문에 그룹 단어이지만,
// aabbbccb는 b가 떨어져서 나타나기 때문에 그룹 단어가 아니다.

// 단어 N개를 입력으로 받아 그룹 단어의 개수를 출력하는 프로그램을 작성하시오.

const fs = `1
z
`;
let input = fs.toString().trim().split("\n");

function getGroup(array) {
  let count = 0;
  for (let i = 1; i < array.length; i++) {
    let arrayCount = 0;
    let [...arr] = new Set(Array.from(array[i]));
    for (let j = 0; j < arr.length; j++) {
      let firstIndex = array[i].indexOf(arr[j]);
      let lastIndex = array[i].lastIndexOf(arr[j]);
      if (firstIndex !== lastIndex || firstIndex !== lastIndex - 1) {
        for (let k = firstIndex; k < lastIndex + 1; k++) {
          if (arr[j] !== array[i][k]) {
            arrayCount++;
          }
        }
      }
    }
    if (arrayCount > 0) {
      count++;
    }
  }
  return console.log(array[0] - count);
}

getGroup(input);