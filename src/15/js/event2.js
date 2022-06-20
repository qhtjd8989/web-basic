// 문제1
const box1 = document.querySelector(".box1");
const resize = document.querySelector(".btn1");
// 문제2
const box2 = document.querySelector(".box2");
const changeBgc = document.querySelector(".btn2");

resize.onclick = () => {
    box1.classList.toggle("box-resize");
}

changeBgc.onclick = () => {
    box2.classList.toggle("box-bg-change");
}

box1.onmouseover = () => {
    box1.classList.toggle("box-bg-change");
}

box1.onmouseout = () => {
    box1.classList.toggle("box-bg-change");
}


