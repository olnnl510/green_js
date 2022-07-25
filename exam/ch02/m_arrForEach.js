const arr = [11, 22, 33, 44, 55, 66, 77, 88, 99];

let odd = 0 , even = 0 ;

// forEach문을 활용하여 arr의 홀수는 odd에 전부 더하고, 짝수는 even에 전부 더하시오.

/* 나의 답

for (let i=0; i<arr.length; i++) {
    if (arr[i] % 2 === 1) {
        odd += arr[i];
    } else {
        even += arr[i];
    }
}
*/

// item 에 arr 에 있는 값이 하나씩 들어온다
arr.forEach(item => {
    if(item % 2 === 0) {
        even += item;
    } else {
        odd += item;
    }
})
console.log(`홀수 : ${odd}`);
console.log(`짝수 : ${even}`);