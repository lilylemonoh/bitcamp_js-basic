const emp = {
    empName : '빡빡이',
    age : 29,
    hireDate : '2014-01-01',
    birthDay : '1995-12-31',
}

// 기존 문법

// const empName = emp.empName;
// const age = emp.age;

// 구조분해할당

const {age, birthDay, empName} = emp;

console.log(`사원명 : ${empName}, 나이 : ${age}, 생일 : ${birthDay}`);

// 구조분해할당 + 변수명 수정

const {age : a, birthDay : d, empName : n} = emp;

console.log(`age : ${a}, birthDay : ${d}, empName : ${n}`);
