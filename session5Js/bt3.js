let booksId = [];
let booksName = [];
let inventoryQuantity = [];

let num  = Number(prompt("Có bao nhiêu loại sách cần kiểm tra bổ sung hôm nay?"));
for (let i = 0; i < num ; i++) {
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
        quantity = parseInt(prompt("Nhập số lượng tồn kho của sách thứ " + (i + 1)));
    } while (isNaN(quantity) || quantity < 0);

    booksId.push(id);
    booksName.push(name);
    inventoryQuantity.push(quantity);
}