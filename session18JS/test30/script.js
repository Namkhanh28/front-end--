const todos = [
  { id: "P01", task: "Mua bánh chưng", isDone: false },
  { id: "P02", task: "Dọn nhà đón Tết", isDone: false },
  { id: "P03", task: "Gói bánh chưng", isDone: false },
  { id: "P04", task: "Trang trí nhà cửa", isDone: false },
];
let listTaskElement = document.getElementById("list-task");
let inputElement = document.getElementById("input");
let buttonElement = document.getElementById("add");
let renderData = () => {

  todos.forEach((todo) => {
    listTaskElement.innerHTML="";

    todos = 
    localStorage.setItem("listTodo",JSON.stringify(todos));
    let itemElement = document.createElement("li");
    itemElement.innerHTML = todo.task;
    listTaskElement.appendChild(itemElement);
  });
};
const handleAddElement =
  ("click",
  () => {
    let nameTask = inputElement.value.trim();
    let newTask = {
      id: date.Now(),
      task: nameTask,
      isDone: false,
    };
    todos.push(newTask);
    renderData();
    inputElement.value="";
  });
