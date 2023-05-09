const multi = (n1, n2) => n1*n2;

const r1 = multi(10, 3);
console.log(`multi 함수의 결과 : ${r1}`);

let sayHello = () => console.log('안녕하세요');

sayHello();

const kim = {
    name : '김자스', 
    age : 25,
    greeting : sayHello,
    study : () => console.log('빡공갑니다.'),
};

kim.study();

const pow = n => n ** 2;

console.log(pow(150));
