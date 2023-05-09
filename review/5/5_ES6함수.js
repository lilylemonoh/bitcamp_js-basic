function add(n1, n2) {
    return n1 + n2;
}

const plus = add;

console.log(`plus에 저장된 add 정보 : ${plus}, 그냥 add 정보 : ${add}`);

const sub = function(n1, n2) {
    return n1 - n2;
}

console.log(`익명함수를 sub에담아 호출한 결과 : ${sub(20, 10)}`);

const fArr = [10, 'hello', true, {}, [], add, function(){console.log('ㄱㄱ')}];

fArr[6]();

const dog = {
    name : '점박이',
    kind : '달마시안',

    bark : function(){
        console.log('왈왈!!!')
    },
}
dog.bark();