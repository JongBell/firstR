/**
 * 2023.11.22
 * 소멘텀 메인에 뜨는 시계
 */

// 시간
const clock = document.getElementById("clock");

function getClock() {
    const date = new Date();
    let hour = date.getHours();
    hour =  String(hour).padStart(2,"0");
    let minute = date.getMinutes();
    minute = String(minute).padStart(2,"0")
    let second = date.getSeconds();
    second = String(second).padStart(2,"0")

    clock.innerText = `${hour} : ${minute} : ${second}`
}
getClock();
setInterval(getClock);