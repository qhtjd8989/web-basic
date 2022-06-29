const brandLogo = document.querySelector(".brand-logo-border");
const converButton = document.querySelector(".article-footer button");
const textarea = document.querySelector(".article-body-textarea textarea");
const pre = document.querySelector(".article-body pre");

const inputUrl = document.querySelector("#web-url");
const linkButton = document.querySelector(".button-url button");


brandLogo.onclick = () => {
    // location.href = "https://papago.naver.com/";
    // location.href : 히스토리가 남아서 뒤로가기 가능

    // location.replace("https://papago.naver.com/");
    // location.replace : 히스토리가 안남음 뒤로가기 불가능

    location.href = "http://192.168.1.3:5500/papago/index.html";
    
}

converButton.onclick = () => {
    pre.textContent = textarea.value;
}

textarea.onkeyup = () => {
    pre.textContent = textarea.value;
}

linkButton.onclick = () => {
    let protocols = new Array();
    protocols.push("http://");
    protocols.push("https://");

    for(let i = 0; i < protocols.length; i++){
        if(inputUrl.value.includes(protocols[i])){
            location.href = inputUrl.value;
            return;
        }
    }
    location.href = "https://" +  inputUrl.value;
}

inputUrl.onkeypress = () => {
    if(window.event.keyCode == 13){
        linkButton.click(); // linkButton 클릭동작을 하는것과 동일함
    }
}
