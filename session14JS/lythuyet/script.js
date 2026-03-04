//Dom

//Element :Các thẻ HTML

//Thuộc tính

//Text

//Cách lấy các thể trong JS
console.log(document);

let itemElement = document.getElementById("item01");
console.log(itemElement);

let ulElement = document.getElementById("list");
console.log(ulElement);

let listItemElement = document.getElementsByClassName("item");
console.log(listItemElement);

Array.from(listItemElement).forEach((element) => {
  console.log(element.innerText);
  console.log(element.innerHTML);
});

let listDivElement = document.getElementsByTagName("ul");

console.log(listDivElement);

const firstIntro = document.querySelector(".intro");
console.log(firstIntro.textContent);

document.querySelector("#btn").addEventListener("click", () => {
  title.textContent = "Nội dung đã được thay đổi!";
});

let itemChange = document.querySelectorAll("#item ")[0];
itemChange.innerText='Xem Phim '
console.log(itemChange.classList);
