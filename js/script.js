// div
const frmLogin = document.getElementById("Login");

// inputbox
const inputLogin = document.querySelector("#name");

// login 버튼 구성
// const btnLogin = document.getElementById("btnLogin");

// h1
const h1 = document.getElementById("h1");

//className  상수화
const CLASS_HIDDEN = "hidden";
const KEY_USERNAME = "username"



function clicklogin(event) {
    event.preventDefault();

    // form 숨긴다
    frmLogin.classList.add(CLASS_HIDDEN)

    const username = inputLogin.value;
    // h1은 보여주고
    
    window.localStorage.setItem(KEY_USERNAME, username);
    displayGreeting(username);
}

/**
 * 
 * @param {*} argsName 
 */
function displayGreeting(argsName) {
    h1.classList.remove(CLASS_HIDDEN);
    h1.innerHTML = `안녕! ${argsName}`;
}
    
/**
 * 로컬 스토리지에서 가져온 사용자 이름
 */
    const lsUsername = localStorage.getItem(KEY_USERNAME);
    console.log(lsUsername);
    if(lsUsername === null) {
        frmLogin.classList.remove(CLASS_HIDDEN);
        frmLogin.addEventListener("submit", clicklogin);
    } else {
        frmLogin.classList.add(CLASS_HIDDEN);
        displayGreeting(lsUsername);
    }
    console.log("클릭!");
    console.log(inputLogin.value);

    frmLogin.addEventListener("submit", clickLogin);

   










