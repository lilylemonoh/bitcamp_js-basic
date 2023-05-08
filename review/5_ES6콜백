function showEvenNumber(n) {
    for(let i; i <=n; i++){
        if(i % 2 === 0) console.log(i);
    }
}

function showOddNumber(n){
    for (let i = 1; i <= n; i++) {
    if(i % 2 ===1) console.log(i);
    }
}

function showOddOrEvenNumber(n, delimeter) {
    for (let i = 1; i <= n; i++) {
        if(n % 2 === delimeter) console.log(i);
    }
}

function showMultipleNumber(n, m) {
    for(let i = 1; i <= n; i++) {
        if(i % m === 0) console.log(i);
    }
}

//콜백

function showNumber(n, something) {
    for(let i = 1; i <= n; i++) {
        if(something(i)) console.log(i);
    }
}

const something = i => i % 3 === 0;
showNumber(10, something);
