//2단부터 9단까지 출력하는 구구단 로직을
//중첩 반복문을 이용해서 만들어주세요.
//출력양식 `a*b=(a*b)`

for(var hang = 2; hang <= 9; hang++) {
    console.log(`${hang}단 출력`);
    for(var dan = 1; dan <= 9; dan++){
        console.log(`${hang} * ${dan} = ${hang*dan}`);
    }
    console.log("===================");
}
