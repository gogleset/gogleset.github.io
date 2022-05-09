// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');


const f1 = () => {
    return new Promise((res, rej) => {
      setTimeout(() => {
        res("1번 완료");
      }, 1000);
    });
  };
  
  const f2 = (message) => {
    console.log(message);
    return new Promise((res, rej) => {
      setTimeout(() => {
        res("2번 완료");
      }, 2000);
    });
  };
  
  const f3 = (message) => {
    console.log(message);
    return new Promise((res, rej) => {
      setTimeout(() => {
        res("3번 완료");
      }, 3000);
    });
  };
  
  
  
