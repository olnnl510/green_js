const arr = [11, 22, 33, 44, 55, 66, 77, 88, 99];

/*
나의 답
let i = 1;
const arr2 = arr.map(item => {
    return item -= i++;
})
console.log(arr2);
*/

const arr2 = arr.map(item => {
    // return parseInt(item * 0.1) * 10;
    return item - (item %10);
});
console.log(arr2);