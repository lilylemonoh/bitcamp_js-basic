// async function loadMovieList(){
//     const response = await fetch('http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20230505');
//     const jsonData = await response.json();
//     console.log(jsonData);
// } 
// async와 await은 함께 쓰임. 근데 잘 안 쓰이는 방식. 자주 쓰이는 방식은 아래

function loadMovieList(){
    fetch('http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20230505')
    .then((response) => response.json()) // (response)는 이전 fetch(주소)의 리턴자료
    .then((result) => {
        console.log(result)
    
        const $movieInfo = document.getElementById('movieInfo');

        let str="";
        for(movieData of result.boxOfficeResult.dailyBoxOfficeList) {
            str += `${movieData.rnum}위 : ${movieData.movieNm}<br>`
        }
    
        $movieInfo.innerHTML = str;

    }); // (result)는 response.json()으로 얻어진 json 자료

    // then은 이전 명령의 실행결과를 이번 실행의 파라미터로 사용함

}

    const $button = document.getElementById('getMovieInfo');
    $button.addEventListener("click", loadMovieList);


