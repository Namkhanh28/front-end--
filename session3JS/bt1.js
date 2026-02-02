
let borrowings = Number(prompt("Hôm nay có bao nhiêu lượt mượn sách?"));
let count = 0; 
if (totalBorrows <= 0) {
  console.log("Số lượt mượn không hợp lệ!");
} else {
  for (let i = 1; i <= totalBorrows; i++) {
    console.log(`Lượt mượn thứ ${i}`);
    let borrower = prompt("Nhập tên người mượn:");
    let bookName = prompt("Nhập tên sách:");
    let borrowDays = Number(prompt("Nhập số ngày mượn (không quá 30 ngày):"));
    if (borrowDays > 14 && borrowDays <= 30) {
      console.log("Cảnh báo: Thời gian mượn vượt quy định (tối đa 14 ngày)");
      count++;
    } else if (borrowDays >= 1 && borrowDays <= 14) {
      console.log("Mượn thành công");
      count++;
    } else {
      console.log("Số ngày mượn không hợp lệ");
    }
  }
  console.log("Tổng số lượt mượn: " + count);
}
