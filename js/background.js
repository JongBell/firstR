/**
 * 2023.11.23
 * 소멘텀 메인 백그라운드 이미지
 * 랜덤으로 나오게 한다.
 */

const images = ['노동요.jpg', '도대체....jpg', '될 대로 되라지.png',
'오랫동안 당신을 기다렸다우.png', '짱구.jpg', "포뇨.jpg", "starry night.jpg"]
const selectedImage = images[Math.floor(Math.random()*images.length)];

const bgImage = document.createElement("img");
// console.log(bgImage);
bgImage.src = `img/${selectedImage}`;
document.body.appendChild(bgImage);