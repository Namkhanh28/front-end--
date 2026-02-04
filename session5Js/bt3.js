let booksId = [];
let booksName = [];
let inventoryQuantity = [];

let num = Number(
  prompt("Có bao nhiêu loại sách cần kiểm tra bổ sung hôm nay?"),
);
for (let i = 0; i < num; i++) {
  let id;
  do {
    id = prompt("Nhập mã sách thứ " + (i + 1));
  } while (id === "");

  let name;
  do {
    name = prompt("Nhập tên sách thứ " + (i + 1));
  } while (name === "");
  let quantity;
  do {
    quantity = Number(prompt("Nhập số lượng tồn kho của sách thứ " + (i + 1)));
  } while (quantity < 0);

  booksId.push(id);
  booksName.push(name);
  inventoryQuantity.push(quantity);
}
console.log("Tổng số loại sách đang kiểm tra: " + booksId.length);
let countLowStock = 0;
for (let i = 0; i < inventoryQuantity.length; i++) {
  if (inventoryQuantity[i] <= 5) {
    countLowStock++;
  }
}
console.log("Số sách cần ưu tiên bổ sung: " + countLowStock);
console.log("Danh sách mã sách đã hết hàng:");
for (let i = 0; i < inventoryQuantity.length; i++) {
  if (inventoryQuantity[i] === 0) {
    console.log("- " + booksId[i]);
  }
}
console.log("Danh sách chi tiết các loại sách:");
for (let i = 0; i < booksId.length; i++) {
  console.log(
    i +
      1 +
      ". Mã sách: " +
      booksId[i] +
      " | Tên sách: " +
      booksName[i] +
      " | Tồn kho: " +
      inventoryQuantity[i],
  );
}
