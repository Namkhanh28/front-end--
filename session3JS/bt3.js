let successCount = 0;
let failCount = 0;
while (true) {
  let request = prompt("Có yêu cầu gia hạn mới không? (có/không)");
  if (request === "không") {
    break;
  }
  if (request !== "có") {
    alert("Dữ liệu không hợp lệ!");
    continue;
  }
  let readerName = prompt("Nhập tên bạn đọc:");
  let bookName = prompt("Nhập tên sách:");

  let currentDays = Number(prompt("Nhập số ngày đã mượn hiện tại (lớn hơn 1):"));
  let extendDays = Number(prompt("Nhập số ngày muốn gia hạn thêm (lớn hơn 1):"));
  if (isNaN(currentDays) ||isNaN(extendDays) ||currentDays < 1 ||extendDays < 1) {
    alert("Thông tin không hợp lệ!");
    failCount++;
    continue;
  }
  let totalDays = currentDays + extendDays;
  if (totalDays > 60) {
    console.log("Không được gia hạn .Đã quá 60 ngày");
    failCount++;
  } else if (currentDays > 45) {
    console.log("Không được gia hạn: Đã mượn quá lâu ");
    failCount++;
  } else if (totalDays <= 30) {
    console.log("Gia hạn thành công");
    successCount++;
  } else {
    console.log("Không được gia hạn");
    failCount++;
  }
}
console.log("Số lần gia hạn thành công:"+successCount);
console.log("Số lần gia hạn không thành công:"+failCount);
