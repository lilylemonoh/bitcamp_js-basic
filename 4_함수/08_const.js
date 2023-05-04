const TODAY_SALE_RATE = 0.2;
const PI = 3.14159265;

const kim = {
    name : '김철수',
    age : 25,
}; // 새롭게 kim을 덮어씌우는 것을 막는것임. 
// 주소값을 바꾸는 걸 막는 것
// kim이 100번지라고 하면, 200번지로 바꾸는 것을 막는것이지
// kim의 name(힙에 있음)의 내용을 바꾸는 건 가능.


// kim = {
//     name : '새철수',
//     age : 15,
// }

kim.name = '김칠수';

console.log(kim);