// const fs = require('fs');
// const array = fs.readFileSync('/dev/stdin').toString().split('\n');

// 그룹 단어란 단어에 존재하는 모든 문자에 대해서,
// 각 문자가 연속해서 나타나는 경우만을 말한다. 예를 들면,
// ccazzzzbb는 c, a, z, b가 모두 연속해서 나타나고,
// kin도 k, i, n이 연속해서 나타나기 때문에 그룹 단어이지만,
// aabbbccb는 b가 떨어져서 나타나기 때문에 그룹 단어가 아니다.

// 단어 N개를 입력으로 받아 그룹 단어의 개수를 출력하는 프로그램을 작성하시오.
function makeCounter() {
    let privateNum = 0;

    function change(num) {
        privateNum += num;
    }
    return {
        plus: function() {
            change(1);
        },
        minus: function() {
            change(-1);
        },
        value: function() {
            return privateNum;
        }
    };   
};

let counter = makeCounter();
counter.plus(); //1
counter.plus(); //2
counter.minus(); //1
console.log(counter.value()); //1
