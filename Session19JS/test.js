let name = document.getElementById("name");
let nameLogin = document.getElementById("loginName");
let password = document.getElementById("password");
let confirm = document.getElementById("confirm");
let button = document.getElementById("submit");

const form = document.getElementsByTagName("form");
button.addEventListene("click", (e) => {
  e.preventDefault();

  const nameUser = document.getElementById("name")[0].value.trim();
  const user = document.getElementById("nameLogin")[0].value.trim();
  const passWord = document.getElementById("password")[0].value.trim();
  if (user.length < 4) {
    alert("Tên phải có trên 4 kí tự,yêu cầy nhập lại");
  }
  if (passWord.length < 6) {
    alert("Mật khẩu phải từ 6 kí tự trở lên ")
  }
  
});
