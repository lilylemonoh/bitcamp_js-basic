// OR 연산 : 첫 번째 truthy를 반환
console.log('hello' || 'world');
console.log(0 || '안녕'); //첫 번째가 falsy이므로 두 번째 반환

// AND 연산 : 첫 번째 falsy를 반환
console.error('Hello' && 'world');
console.error(null && '메롱');

//더 이상 판단이 필요없어질 때 검사한 걸 반환함.
//(마지막으로 판단한 지점 반환)