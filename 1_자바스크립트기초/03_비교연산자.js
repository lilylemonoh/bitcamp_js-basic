var a = 5;
var b = '5';

console.log(a === b);
console.log(a !== b);

console.log("==========2개비교===========");
// == 비교는 결과 예측대로 흘러가지 않는 경우가 많음.
console.log(0 == '0'); //true
console.log('0' == ''); // false
console.log(0 == ''); // true
console.log(false == 'false'); // false
console.log(false =='0'); // true

console.log("===========3개비교==========");
console.log(0 === '0'); //false
console.log('0' === ''); // false
console.log(0 === ''); // false
console.log(false === 'false'); // false
console.log(false ==='0'); // false

// 문자열 대소비교
console.log("------------------------------");
console.log('aa' < 'az');