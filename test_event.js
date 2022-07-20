function showAlert() {
  alert("야호");
}

// 변수명은 camel스타일
const sampleBtn = document.querySelector(".sample-btn");

sampleBtn.addEventListener("click", showAlert);

// 함수를 한 번 쓰고 말거니까 아래와 같이 쓰는 것이 보편적임.
/* sampleBtn.addEventListener("click", function () {
  alert("야호");
}); */
// 파라미터로들어가는 함수 = callback함수, 특정한 조건을 만족시켰을 때 발생한다.
