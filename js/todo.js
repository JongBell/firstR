/**
 * 최초작성일 : 2023.11.24
 * 최초작성자 : 채종현
 * 수정자 : 
 * 이력 : 2023.11.24 최초 작성
 * 기능 : todo 리스트를 제어한다.
 *        todo 리스트 추가
 *        todo 
 */

const frmToDo = document.getElementById("frmToDo");
const lstToDo = document.getElementById("lstToDo");
const inputTodo = frmToDo.querySelector("input");
let todos = [];
const KEY_TODOS = "todos";

/**
 * 
 */
 function saveTodos() {
    console.log(todos);
    localStorage.setItem(KEY_TODOS, JSON.stringify(todos));
 }


/**
 * todo 리스트에서 항목을 삭제한다.
 */

function deleteTodo(event) {
    console.log("delete 함수 시작");
    // console.log(evnet);
    // console.dir(event);
    // console.log(event.target.parentElement);
    const li = event.target.parentElement;
    todos = todos.filter((todos => todos.id !== parseInt(li.id)));
    li.remove(); 
    saveTodos();
}


/**
 * todo 리스트 목록을 출력한다. 
 */
function displayTodo(arg) {
    console.log("hi", arg);

    // 입력한 텍스트를 넣을 요소들
    // 리스트(ul)에 추가하기
    //ul > li > span
    // li 추가
    const li = document.createElement("li");
    li.id = arg.id; 
    //span 추가
    const span = document.createElement("span");
    //span에 할일(arg) 추가
    span.innerHTML = arg.text;
    // X버튼 추가
    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click", deleteTodo);

    li.appendChild(span);
    li.appendChild(button);
    lstToDo.appendChild(li);

    // 로컬 스토리지에 저장
   

    // 정인님이 하신 코드.
    // let ul = document.querySelector("ul");  
    // let li = document.createElement("li");    
    // li.innerHTML = `<span>${arg}</span>`; 
    // ul.appendChild(li);
}

function handleSubmitTodo(event) {
    event.preventDefault(); // 이벤트 발생을 사전에 막는거
    const inputTodov = inputTodo.value;
    //console.log(inputTodov);
    inputTodo.value = "";
    const newToDoObj = {
        text : inputTodov,
        id : Date.now(),
    };
    todos.push(newToDoObj);
    console.log(todos);

    displayTodo(newToDoObj);
    saveTodos();
}
frmToDo.addEventListener("submit", handleSubmitTodo);

// 로컬 스토리지에서 가져온 
const lsSaveTodos = localStorage.getItem(KEY_TODOS);
console.log(lsSaveTodos);
if(lsSaveTodos !== null) {
    console.log("lsSaveTodos" ,lsSaveTodos);
    console.log(JSON.parse(lsSaveTodos));
    const parseLsSaveTodos = JSON.parse(lsSaveTodos);
    todos = parseLsSaveTodos;
    parseLsSaveTodos.forEach(displayTodo)
    // parseLsSaveTodos.forEach(item => { 
    //     span.innerHTML = arg;
        
    // });
}