const userNames = ['김철수', '강감찬', '박영희'];

const [kim, kang, park] = userNames;

console.log(`kim : ${kim}, park : ${park}, kang : ${kang}`);

let first = 10;
let second = 20;

console.log(`교환 전 : first : ${first}, second : ${second}`);
[second, first] = [first, second];
console.log(`교환 후 : first : ${first}, second : ${second}`);

const numbers = [1, 3, 5, 7, 9, 11];
const [one, three, ...others] = numbers;
console.log(`one : ${one}, three : ${three}, 나머지 : ${others}`);

const foods = ['돈까스', '감자탕', '내장탕', '보쌈'];

const newFoods = [foods, '초밥', '햄버거'];
console.log(`추가 확인 : ${newFoods}`);
foods[0] = '크로켓';
console.log(`foods : ${foods}, newFoods : ${newFoods}`);

const advFoods = [...foods, '초밥', '햄버거'];
console.log(`advFoods의 이중배열 여부 : ${advFoods.length}`);

foods[1] = '치킨마요덮밥';
console.log(`foods : ${foods}, advFoods : ${advFoods}`);