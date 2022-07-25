const arr = [10, 20, 30, 40, 50, 60, 70, 80, 90];

const fnPrint = item => {
    console.log('값: ' + item);
} // 콜백함수

/*
fnPrint(arr[0]); // 10
fnPrint(arr[1]); // 20
*/

for(let i=0; i<arr.length; i++) {
    fnPrint(arr[i]);
} //forEach가 하는 일 (내부가 이렇게 되어있음)