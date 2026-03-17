console.log("helllo word");
localStorage.setItem("name", "Chu Đình Minh"); //setItem: Tạo key và value
let nameByLocal = localStorage.getItem("name"); //lấy value của key
console.log(nameByLocal);
//removeItem
localStorage.removeItem("name");
localStorage.clear(); //xóa hết
//Các lưu giá trị là Mảng hoặc Object trên Localstorage
let todo = [
  {
    id: 0,
    name: "Chơi game",
    status: true,
  },
  {
    id: 2,
    name: "Chạy bộ ",
    status: false,
  },
];
//Kiểu dữ liệu JSON

localStorage.setItem("listTodo", JSON.stringify(todo));
let data = JSON.parse(localStorage.getItem("listTodo"));
console.log(data);
//JSOn.stringify :chuyển mảng hoặc object về JSON
//JSON>parse :CHuyển dạng JSON về kểu dữ liệu mảng hoặc object
