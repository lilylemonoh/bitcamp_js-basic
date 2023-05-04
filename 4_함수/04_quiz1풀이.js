/* 

*/

function calcDivisor(targetNumber) {
    var divisor = [];
    for (var i = 1; i <= targetNumber; i++) {
        if( targetNumber % i === 0 ) {
            divisor.push(i);
        } 
    }
    console.log(`${targetNumber}의 약수의 개수 : ${divisor}`);
    return divisor.length;
}

console.log(calcDivisor(12590));

// 코테 풀 때 팁? 절반까지만 돌리면 됨. 절반 이후는 자기 자신밖에 없음
// 예 : 12590의 약수의 개수 : 1,2,5,10,1259,2518,6295,12590
// 8개