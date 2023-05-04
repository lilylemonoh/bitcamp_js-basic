/* 
약수의 개수 구하기 문제
*/



function calcDivisor(n) {
    var count = 0;
    for (var i = 1; i <= n; i++) {
        if( n % i === 0 ) {
            console.log(i);
            count++;
        } 
    }
    console.log(`약수의 개수 : ${count}`);
}

calcDivisor(10);