
let tenSach = prompt("Nhập tên sách:");
let tacGia = prompt("Nhập tên tác giả:");
let namXuatBan = Number(prompt("Nhập năm xuất bản:"));
let namHienTai = new Date().getFullYear();

console.log("Tên sách: " + tenSach);
console.log("Tác giả: " + tacGia);
console.log("Năm xuất bản: " + namXuatBan);

if (namXuatBan === namHienTai) {
    console.log("Đây là sách mới!");
} else if (namHienTai - namXuatBan <= 5) {
    console.log("Sách khá mới");
} else {
    console.log("Sách đã cũ");
}
