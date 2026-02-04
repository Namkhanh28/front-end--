let student = "Quý, Nam, Lan, Hùng, Nam";
let studentList = student.split(",");
console.log(studentList);

let students = studentList.reverse();
for (let i = 0; i < studentList.length; i++) {
  let findName = "Lan";
  if (studentList[i] === findName) {
    console.log("Tên Lan tồn tại trong mảng");
  } else {
    console.log("Lan Không tồn tại ");
  }
}
for (let i = 0; i < studentList.length; i++) {
  let name = "Nam";
  let indexName = name.split(";");
  for (let i = 0; i < name.length; i++) {
    if (name[i] == name[0]) {
      console.log(name[0]);
    }
  }
}
