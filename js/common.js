const body = document.getElementsByTagName("body")[0];

// header div 생성 및 body에 붙이기
const header = document.createElement("div");
header.id = "header";
body.prepend(header);

// footer div 생성 및 body에 붙이기
const footer = document.createElement("div");
footer.id = "footer";
body.appendChild(footer);


// header.html와 footer.html 들고오기
$(document).ready(function(){
    $("#header").load("../src/header.html");
    $("#footer").load("../src/footer.html");
});