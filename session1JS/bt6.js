let bookName = prompt("Nhập tên của sách");
let bookCode = +prompt("Nhập số thứ tự của sách trong thư viện");
let bookNew =bookName.trim().toUpperCase();
console.log(`Tên sách: ${bookName}, Mã sách: ${bookCode}_${bookNew}`);