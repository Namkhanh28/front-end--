let totalBooks = 0;
let lostBooks = 0;
let outOfStockBooks = 0;
let manyStockBooks = 0;
let normalStockBooks = 0;

while (true) {
  let choice = prompt("Tiếp tục kiểm kê sách tiếp theo? (có/không)");

  if (choice === "không") {
    break;
  }
  if (choice !== "có") {
    alert("Chỉ được nhập 'có' hoặc 'không'");
    continue;
  }
  let bookCode;
  do {
    bookCode = prompt("Nhập mã sách:");
  } while (bookCode === "");
  let bookName = prompt("Nhập tên sách:");
  let quantity;
  do {
    quantity = Number(prompt("Nhập số lượng thực tế :"));
  } while (isNaN(quantity) || quantity < 0);

  let status;
  do {
    status = Number(prompt("Nhập tình trạng sách:(Bình thường - Mất)"));
  } while (status !== 1 && status !== 2);
  totalBooks++;
  if (status === 2) {
    console.log("Sách mất");
    lostBooks++;
  } else if (quantity === 0) {
    console.log("Sách hết (vẫn còn trong hệ thống)");
    outOfStockBooks++;
  } else if (quantity >= 10) {
    console.log("Sách tồn kho nhiều");
    manyStockBooks++;
  } else {
    console.log("Sách tồn kho bình thường");
    normalStockBooks++;
  }
}
console.log("Tổng số sách đã kiểm kê: " + totalBooks);
console.log("Số sách mất: " + lostBooks);
console.log("Số sách hết hàng: " + outOfStockBooks);
