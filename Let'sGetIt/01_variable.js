function minus1(x, y) {
    const a = 100;
    return (x - y) * a;
}
console.log(minus1(5, 3));

// 함수 안에서 변수나 상수 선언할 수 있음.
// 함수 바깥에 위치한 변수나 상수를 사용할 수 있음.
// 모든 상수나 변수에 접근할 수는 없고 스코프에 따라 접근 가능 여부가 달라진다.

const a = 100;
function minus2(x, y) {
    return (x - y) * a;
}
console.log(minus2(5, 3));

// minus1 : 순수함수(자신의 매개 변수나 내부 변수 또는 상수만 사용)
// minus2는 순수함수가 아니다.