const arr = [11, 22, 33, 44, 55, 66, 77, 88, 99];

let sum = 0;

// arr, forEach를 활용하여 70이하의 값들만 전부 더하세요.

/*나의 답

arr.forEach(item => {
    if(item <= 70) {
        sum += item;
    }
})
*/

// idx 넣으면 인자값도 받을 수 있음
arr.forEach((item, idx)=> {
    console.log(idx);
    if(item <= 70) {
        sum += item;
    }
});
console.log(`sum : ${sum}`);