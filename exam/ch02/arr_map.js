const arr = [11, 22, 33, 44, 55, 66, 77, 88, 99];

/*
filter : 길이가 달라질 수 있음. 안쪽내용 달라질 수 없음
map : 길이는 바꿀 수 없음(리턴되는 값도 똑같이 9개). 안쪽값(내용)은 바꿀 수 있음

return 해주는것은 비슷함. 둘다 비파괴. 원본 건드리지 않음.
*/

const arr2 = arr.map(item => {
    return item - 1;
});
console.log(arr2);