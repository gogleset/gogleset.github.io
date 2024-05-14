---
title: "백준 2525번 오븐 시계"
author: Jin
date: 2022-03-31 10:55:00 +0800
categories: "Algorithm"
description: "백준 알고리즘 풀이."
path: "/posts/backjoon"
tag: [백준]
comments: true
---

# 백준 2525번 오븐 시계

```js {1,3-4} showLineNumbers
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const current = input[0].split(" ");

const currentHour = parseInt(current[0]);
const currentMinute = parseInt(current[1]);
const cookTime = Number(input[1]);

function getHour(time1, time2) {
  let hour = (time1 + time2) / 60;
  return Math.floor(hour);
}

function getMinute(time1, time2) {
  let minute = (time1 + time2) % 60;
  return minute;
}

let hour = getHour(currentMinute, cookTime);
let minute = getMinute(currentMinute, cookTime);

if (hour + currentHour > 23) {
  console.log(`${hour + currentHour - 24} ${minute}`);
} else {
  console.log(`${currentHour + hour} ${minute}`);
}
```

- 시간 함수, 분 함수를 따로 구해서 실제 구현하는 코드는 되게 짧다.
