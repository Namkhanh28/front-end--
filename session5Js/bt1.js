let bookReturn = [];
let input = +prompt("Bạn muốn trả bao nhiêu cuốn sách");
for (let i = 1; i <= input; i++) {
  let bookName = prompt("Nhập tên cuốn sách thứ " + i + ":");
  bookReturn.push(bookName);
}
let totalReturn = 0;
for (let i = 0; i < bookReturn.length; i++) {
  totalReturn++;
}
console.log("Tổng số sách đã được trả: " + totalReturn);
for (let i = 0; i < bookReturn.length; i++) {
  console.log(bookReturn[i]);
}
