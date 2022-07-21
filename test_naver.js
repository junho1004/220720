<<<<<<< HEAD
// const menus = document.querySelector("#NM_FAVORITE").textContent.split("\n");

// const arr = [];

// for (let i = 1; i <= 28; i++) {
//   if (menus[i] != "    ") {
//     arr.push(menus[i]);
//   }
// }
// console.log(arr);

// 위 방법으로 글자 앞 공백("    메일")을 지울 수 없어 아래 코드로 제출합니다.

const menus = document.querySelectorAll(".nav");
const menus_2 = document.querySelector(".btn_more");

const arr = [];

for (let i = 0; i < 16; i++) {
  arr.push(menus[i].textContent);
}
arr.push(menus_2.textContent);
console.log(arr);
=======
// const menus = document.querySelector("#NM_FAVORITE").textContent.split("\n");

// const arr = [];

// for (let i = 1; i <= 28; i++) {
//   if (menus[i] != "    ") {
//     arr.push(menus[i]);
//   }
// }
// console.log(arr);

// 위 방법으로 글자 앞 공백("    메일")을 지울 수 없어 아래 코드로 제출합니다.

const menus = document.querySelectorAll(".nav");
const menus_2 = document.querySelector(".btn_more");

const arr = [];

for (let i = 0; i < 16; i++) {
  arr.push(menus[i].textContent);
}
arr.push(menus_2.textContent);
console.log(arr);
>>>>>>> f959a813fa19dd95e645f3d789ccc48bf3b51853
