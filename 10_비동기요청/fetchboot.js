// fetch()를 이용해서 rest 서버에 요청을 넣거나 결과를 받아올 수 있습니다.
async function loadPersonList(){
    // fetch의 첫번째 파라미터는 요청 주소입니다.
    const response = await fetch("http://localhost:8080/resttest/person-list"); //GET 요청
    // response에는 json데이터와 헤더가 담겨있음. 
    //response.json()으로 요청의 결과로 받은 response 객체의 body에 담긴 json만 추출해 줍니다.
    const jsonArray = await response.json();
    console.log(jsonArray);
    console.log('---------------------------');
    for(jsonData of jsonArray){ //향상된 for문 형식으로 개별 json 분리
        console.log(jsonData.id); // json 내부 자료에 대해 멤버변수처럼 호출
        console.log(jsonData.name);
        console.log(jsonData.age);
    }

    // #personInfo 태그 얻어오기
    const $personInfo = document.getElementById('personInfo');
    // 문자열 변수 생성 후, 각 정보를
    // 번호 : XXX, 이름 : XXX, 나이 : XXX 형식으로 문자로 저장해주세요.
    // 반복문을 활용해주세요.
    let str = '';
    for(jsonData of jsonArray){
        str += `<h1>번호 : ${jsonData.id}, 이름 : ${jsonData.name}, 나이 : ${jsonData.age}</h1>`;
    }
    // #personInfo에 innerHTML을 이용해 끼워넣어주세요.
    $personInfo.innerHTML = str;
   
}

// 버튼 태그 얻어오기
const $button = document.getElementById('getPersonList');
// 클릭이벤트로 loadPersonList 함수 연결하기
$button.addEventListener('click', loadPersonList);