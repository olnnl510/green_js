const arr = [11, 22, 33, 44, 55, 66, 77, 88, 99];

// forEach 와 filter 굉장히 비슷.
// 더 유연 / 특화되어있음

// ex) 3의배수만 (true 만 들어있는 새로운 배열을 만들어줌)
// filter는 return 메소드임.
// forEach 는 보이드 메소드. 새로운 배열 만들어주지 않음.
const arr2 = arr.filter(item => {
    return item % 3 === 0;
});
console.log(arr2);

