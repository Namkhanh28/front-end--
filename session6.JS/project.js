
let username, password;
let loginSuccess = false;
let attempts = 0;

while (attempts < 3) {
  username = prompt("Nhập tài khoản:");
  password = prompt("Nhập mật khẩu:");
  if (username === "admin" && password === "12345") {
    loginSuccess = true;
    break;
  } else {
    attempts++;
    console.log("Sai tài khoản hoặc mật khẩu!");
  }
}

if (!loginSuccess) {
  console.log("Tài khoản đã bị khóa");
} else {
  console.log("Đăng nhập thành công!");

  let libraries = [];
  let running = true;

  while (running) {
    let choice = prompt(
      "1. Nhập thêm lô sách mới\n" +
      "2. Hiển thị danh sách sách\n" +
      "3. Tìm kiếm sách\n" +
      "4. Cập nhật tên sách\n" +
      "5. Đảo ngược thứ tự kệ sách\n" +
      "6. Nhập kho từ nguồn khác\n" +
      "7. Thoát chương trình\n" +
      "Nhập lựa chọn (1-7):"
    );

    switch (choice) {
      case "1": 
        let input = prompt(
          "Nhập danh sách sách mới (cách nhau bởi dấu phẩy):"
        );

        if (input !== null && input.trim() !== "") {
          let newBooks = input.split(",");
          for (let i = 0; i < newBooks.length; i++) {
            libraries.push(newBooks[i].trim());
          }
          console.log("Đã thêm " + newBooks.length + " cuốn sách.");
        } else {
          console.log("Dữ liệu không hợp lệ!");
        }
        break;
      
      case "2": 
        console.log("Danh sách sách hiện có:");
        for (let i = 0; i < libraries.length; i++) {
          console.log((i + 1) + ". " + libraries[i]);
        }
        break;
    
      case "3": 
        let findBook = prompt("Nhập tên sách cần tìm:");
        let index = libraries.indexOf(findBook);

        if (index !== -1) {
          console.log(
            "Sách \"" + findBook + "\" được tìm thấy tại vị trí " + index
          );
        } else {
          console.log("Không tìm thấy sách");
        }
        break;
      
      case "4": 
        let oldName = prompt("Nhập tên sách cần sửa:");
        let pos = libraries.indexOf(oldName);

        if (pos !== -1) {
          let newName = prompt("Nhập tên sách mới:");
          libraries[pos] = newName;
          console.log("Cập nhật tên sách thành công!");
        } else {
          console.log("Sách không tồn tại!");
        }
        break;
      
      case "5": 
        libraries.reverse();
        console.log("Danh sách sau khi đảo ngược:");
        for (let i = 0; i < libraries.length; i++) {
          console.log(i + ": " + libraries[i]);
        }
        break;
      
      case "6": 
        let otherBranch = ["Sách Kỹ Năng", "Truyện Tranh"];
        libraries = libraries.concat(otherBranch);
        console.log("Đã gộp kho sách thành công");
        break;
      
      case "7": 
        console.log("Hẹn gặp lại!");
        running = false;
        break;
      

      default:
        console.log("Lựa chọn không hợp lệ!");
    }
  }
}
