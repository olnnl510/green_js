const arr = [11, 22, 39, 44, 58, 66, 77, 88, 99];

const result = arr.reduce((preVal, curVal) => {
    // console.log(preVal); // 한번 찍어보기! 맨처음 제외, 리턴값이 들어옴!
    return preVal + curVal; // 제일 마지막에 return한 값이 리턴됨. 9번 보낸 콜백함수가 실행됨.
});

console.log(result);

let sum = 0;
arr.forEach(item => {
    sum += item;
});
console.log(`sum : ${sum}`);


// 똑같이 504가 나옴.
//preVal, curVal
// 11 22 = 33 리턴
// 33 39 = 72 리턴
// 72 44 = 116 리턴
// 116 58 = 174 리턴

// 0번방 1번방
// 리턴값 2번방
// 리턴값 3번방

// (preVal 제일처음 빼고 리턴해준 값이 계속 들어감)