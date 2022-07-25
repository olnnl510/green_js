console.log('arr.js');

// 터미널로 사용할 수 있는 이유
// : vue 떄문에 노드js가 설치되어있기 때문에 터미널에서 실행됨.
// (노드js : 자바스크립트를 실행할 수 있는 런타임환경을 만들어 줌. 사람으로치면 운동장을 만들어 줌.
//
// node arr.js (Ctrl + alt + n)

const arr = [10, 20, 30, 40, 50, 60, 70, 80, 90];
/*
// 배열은 [] 대괄호. 문자열, 숫자, 불린 섞어쓰지말기. 같은 타입으로만 쓰기! (다른타입 : 배열 대신 객체를 사용하자.)

console.log('arr[0] : ' + arr[0]); // 10

arr[0] = 11; // = 만이 유일하게 값을 바꿀 수 있다. = 말고 유일하게 증감식 ++

arr[0]++; // 11 ++ = 12
console.log('arr[0] : ' + arr[0]); // 12

// 배열은 for문과 같이 쓰려고 배움!

// const n1 = 10;
// const n2 = 20;
// const n3 = 30;
// const n4 = 40;
// const n5 = 50;

// console.log(n1);
// console.log(n2);
// console.log(n3);
// console.log(n4);
// console.log(n5);

*/
for(let i=0; i<arr.length; i++) {
    console.log(`arr[${i}] : ${arr[i]}`);
}
console.log('----------');
// 배열에 이미 foreach 라는 메소드를 가지고 있음. 호출하면 됨. (외부에있는 foreach 사용x)
// for($arr in $item) // php에서는 외부에있는 foreach 사용.

// 아규먼트로 콜백함수 보냄. arr.foreach(콜백함수);
/*
arr.forEach(function(item) {

});
*/

/*

arr.forEach()
(n1, n2) => {

} // 2개일시 반드시 () 소괄호 적어줘야함.

*/

//파라미터 1개여서 소괄호 생략 가능.

arr.forEach(item => {
    console.log('값: ' +item);
});

// 콜백함수 : 원래 함수는 호출하면 끝냄. forEach를 실행함. 콜했더니 백(돌아온다해서) 콜백함수.
// length 만큼 호출해줌.