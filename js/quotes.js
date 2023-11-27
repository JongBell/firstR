/**
 * 2023.11.23
 * 소멘텀 메인에 뜨는 명언
 * 랜덤으로 나오게 한다.
 */

// const  quote = document.getElementById("quote");
const quotes = [
    {
        quote : "사랑은 사람들을 재주꾼으로 만든다",
        author : "몰리에르",
    }, 
    {
        quote : "세상에서 보고 싶은 변화가 있다면 직접 그 변화가 되어라",
        author : "마하트마 간디",
    }, 
    {
        quote : "우리의 인생은 우리가 노력한 만큼 가치가 있다.",
        author : "프랑수아 모리아크",
    }, 
    {
        quote : "의욕적인 목표가 인생을 즐겁게 한다.",
        author : "로버트 슐러",
    }, 
    {
        quote : "자신을 내보여라. 그러면 재능이 드러날 것이다.",
        author : "발 타시르 그라시안",
    }, 
    {
        quote : "이 세상에 위대한 사람은 없다. 단지 평범한 사람들이 일어나 맞서는 위대한 도전이 있을 뿐이다.",
        author : "윌리엄 프레데릭 홀시",
    }, 
    {
        quote : "긍정적인 감정은 능력을 부여하고, 부정적인 감정은 능력을 앗아간다.",
        author : "게리 주커",
    }, 
    {
        quote : "수백 번의 이상적인 생각보다 한 번의 실행이 변화의 시작이다.",
        author : "셰릴 샌드버그",
    }, 
    {
        quote : "시간은 말로써 나타낼 수 없을 만큼 멋진 만물의 소재이다.",
        author : "아널드 버넷",
    }, 
    {
        quote : "눈물과 더불어 빵을 먹어 보지 않은 자는 인생의 참다운 맛을 모른다. ",
        author : "괴테"
    }
];



// const quotenseries = new Array();
// for(i = 0; i < quotes.length; i++) {
//     if(!(todayQuote.quote in imgnseries)) {
//         quotenseries.push(todayQuote.quote);
//         quote.innerText = todayQuote.quote;
//         author.innerText = todayQuote.author;
//     }
// }

// if(quotenseries.length == images.length) {
//     imgnseries = []
// }

const quote = document.querySelector('#quote span:first-child')
const author = document.querySelector('#quote span:last-child')


quote.innerText = "오늘의 명언";
author.innerText = "오늘의 작가";

console.log(quotes[Math.round(Math.random()*quotes.length)]);
const todayQuote = quotes[Math.floor(Math.random()*quotes.length)];
console.log(todayQuote);
// quote.innerText = todayQuote.quote;
// author.innerText = todayQuote.author;