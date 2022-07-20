const btn = document.createElement("button");
// 클래스 변경 가능
btn.setAttribute("class", "sample-btn");
const txt = document.createTextNode("민코월드");

btn.append(txt);
console.log(btn)
document.querySelector("body").append(btn);