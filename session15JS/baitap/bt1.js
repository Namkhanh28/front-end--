 let defaultTodos = [
     { task: "Mua bánh chưng" },
     { task: "Dọn nhà đón Tết" },
    { task: "Gói bánh chưng" },
    { task: "Trang trí nhà cửa" }
  ];

 window.onload = function () {
   let data = localStorage.getItem("myTodos");
   if (data === null) {
     console.log("Lần đầu load -> lưu vào localStorage");
     localStorage.setItem("myTodos", JSON.stringify(defaultTodos));
     todos = defaultTodos;
  } else {
     console.log("Đã có dữ liệu trong localStorage");
    todos = JSON.parse(data);
   }
   renderTodos();
};
function renderTodos() {
  let ul = document.getElementById("todoList");
  ul.innerHTML = "";
  todos.forEach(function (todo) {
    let li = document.createElement("li");
    li.innerHTML = `
          <span>${todo.task}</span>
          <span>Chưa làm</span>
        `;
    ul.appendChild(li);
  });
}
