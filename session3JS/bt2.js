let bookReturn = Number(prompt("Hôm nay có bao nhiêu lượt trả sách?"));
let count = 0;

if (bookReturn <= 0) {
  console.log("Số lượt trả không hợp lệ!");
} else {
  for (let i = 1; i <= bookReturn; i++) {
    console.log(`Lượt trả thứ ${i}`);
    let borrower = prompt("Nhập tên người trả sách:");
    let bookName = prompt("Nhập tên sách:");
    let borrowDays;
    do {
      borrowDays = Number(prompt("Nhập số ngày đã mượn (số nguyên >= 1):"));
    } while (borrowDays < 1);

    if (borrowDays <= 14) {
      console.log("Trả đúng hạn");
    } else if (borrowDays <= 21) {
      console.log("Trả muộn nhẹ");
      console.log("Phạt nhắc nhở");
      count++;
    } else {
      console.log("Quá hạn nghiêm trọng");
      console.log("Cần ghi biên bản phạt");
      count++;
    }
  }

  console.log("Tổng số lượt trả sách: " + bookReturn);
  console.log("Số lượt trả muộn (>= 15 ngày): " + count);
}
