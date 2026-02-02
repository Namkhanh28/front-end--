let login = 0;
let isAuthenticated = false;
while (login < 3) {
  let username = prompt("Nhập tài khoản:");
  let password = prompt("Nhập mật khẩu:");

  if (username === "admin" && password === "12345") {
    alert("Đăng nhập thành công!");
    isAuthenticated = true;
    break;
  } else {
    login++;
    let remain = 3 - login;

    if (username !== "admin" && password !== "12345") {
      alert("Sai tài khoản và mật khẩu! Còn " + remain + " lần");
    } else if (username !== "admin") {
      alert("Sai tài khoản! Còn " + remain + " lần");
    } else {
      alert("Sai mật khẩu! Còn " + remain + " lần");
    }
  }
}

if (!isAuthenticated) {
  alert("Tài khoản đã bị khóa!");
  return;
}
let choice;

do {
  choice = Number(prompt(
    "===== MENU =====\n" +
    "1. Phân loại mã số sách\n" +
    "2. Thiết kế sơ đồ kho sách\n" +
    "3. Dự toán phí bảo trì sách\n" +
    "4. Tìm mã số sách may mắn\n" +
    "5. Thoát\n" +
    "Nhập lựa chọn:"
  ));

  switch (choice) {
    case 1: {
      let total = 0 ;
      let even = 0;
      let odd = 0;
      alert("Nhập mã sách (nhập 0 để kết thúc)");

      while (true) {
        let code = Number(prompt("Nhập mã sách:"));

        if (isNaN(code)) {
          alert("Vui lòng nhập số!");
          continue;
        }

        if (code === 0) break;

        total++;
        if (code % 2 === 0) even++;
        else odd++;
      }

      console.log("Tổng số mã sách:", total);
      console.log("Số mã chẵn:", even);
      console.log("Số mã lẻ:", odd);
      break;
    }
    case 2: {
      let rows = Number(prompt("Nhập số hàng:"));
      let cols = Number(prompt("Nhập số cột:"));

      if (isNaN(rows) || isNaN(cols) || rows <= 0 || cols <= 0) {
        alert("Dữ liệu không hợp lệ!");
        break;
      }

      console.log("SƠ ĐỒ KHO SÁCH");
      for (let i = 1; i <= rows; i++) {
        let line = "";
        for (let j = 1; j <= cols; j++) {
          line += (i === j) ? "* " : "O ";
        }
        console.log(line);
      }
      break;
    }
    case 3: {
      let quantity = Number(prompt("Nhập số lượng sách:"));
      let cost = Number(prompt("Nhập phí bảo trì 1 cuốn:"));
      let years = Number(prompt("Nhập số năm dự toán:"));
      if (
        isNaN(quantity) || isNaN(cost) || isNaN(years) ||
        quantity <= 0 || cost <= 0 || years <= 0
      ) {
        alert("Dữ liệu không hợp lệ!");
        break;
      }
      console.log("BẢNG DỰ TOÁN PHÍ BẢO TRÌ");
      for (let y = 1; y <= years; y++) {
        console.log("Năm " + y + ": " + (quantity * cost).toFixed(2));
        cost *= 1.1;
      }
      break;
    }
    case 4: {
      let n = Number(prompt("Nhập n:"));
      if (isNaN(n) || n <= 0) {
        alert("Dữ liệu không hợp lệ!");
        break;
      }
      let count = 0;
      let list = "";

      for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 !== 0) {
          count++;
          list += i + " ";
        }
      }
      console.log("Danh sách mã sách may mắn:", list);
      console.log("Tổng số mã:", count);
      break;
    }
    case 5:
      alert("Thoát hệ thống!");
      break;

    default:
      alert("Lựa chọn không hợp lệ!");
  }

} while (choice !== 5);
