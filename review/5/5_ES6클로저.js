function calculator(n1, n2) {
   
    function add(){
        return n1 + n2;
    }
    return add;
}

const closure = calculator(5, 6);
console.log(closure);
console.log(typeof closure);

const n = closure();
console.log(`closure()의 결과 : ${n}`);

const start = (() => {
    console.log("즉시실행 구문이 붙었군요!");
})();

