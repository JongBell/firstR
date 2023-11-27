/**
 * 2023.11.23
 * 소멘텀 메인에 뜨는 날씨
 * 위치 기반으로 날씨를 알려 준다.
 * 날씨 API를 사용한다.
 */

function onSucces(position){
    console.log(position.coords.latitude);
    console.log(position.coords.longitude);
    const API_KEY = '9c99a55b031eeac12d489bd26dfefe89';
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    console.log(`당신이 위치한 곳은 위도${latitude}, 경도${longitude}입니다.`)

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`

    fetch(url).then(response => response.json()).then(data => {
        console.log(data.name, data.weather[0].description, data.main.temp);
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        weather.innerText = data.weather[0].description;
        city.innerText = data.name;
    })
}

function onFail(){
    console.log("위치를 찾을 수 없습니다.");
}

navigator.geolocation.getCurrentPosition(onSucces, onFail);

//https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}



//https://api.openweathermap.org/data/2.5/weather?lat={37.5494}&lon={126.8573}&appid={9c99a55b031eeac12d489bd26dfefe89}

