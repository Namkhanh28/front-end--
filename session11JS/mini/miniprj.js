let students = [];

function createStudent() {
  const student = {
    id: prompt("Nhập ID:"),
    name: prompt("Nhập tên:"),
    age: Number(prompt("Nhập tuổi:")),
    gpa: Number(prompt("Nhập GPA:")),
    status: prompt("Nhập trạng thái (active/inactive):"),
  };
  students.push(student);
  alert("Thêm sinh viên thành công ");
}
function readStudents() {
  if (students.length === 0) {
    console.log("Danh sách đang trống ");
    return;
  }

  console.log("===== STUDENT LIST =====");

  students.forEach((sv, index) => {
    console.log(
      `${index + 1}. ${sv.id} | ${sv.name} | Age:${sv.age} | GPA:${sv.gpa} | ${sv.status}`,
    );
  });
}

function filterScholarship() {
  const result = students.filter((sv) => sv.gpa > 8.0);
  console.log("===== SCHOLARSHIP STUDENTS =====");

  result.forEach((sv) => console.log(`${s.name} - GPA: ${s.gpa}`));
}

function updateStudent() {
  const id = prompt("Nhập ID sinh viên muốn đổi");
  const student = students.find((sv) => sv.id === id);

  if (!student) {
    alert("Không tìm thấy sinh viên");
    return;
  }
  student.name = prompt("Nhập tên mới :");
  student.gpa = Number(prompt("Điểm GPA:"));

  alert("Cập nhật thông tin sinh viên thành công ");
}
function deleteStudent() {
  const id = prompt("Tìm ID sinh viên muốn xóa :");
  const oldLength = students.length;
  students = students.filter((sv) => sv.id !== id);

  if (students.length < oldLength) alert("Xóa sinh viên thành công");
  else alert("Không tìm thấy sinh viên ");
}
function complianceCheck() {
  const hasMinor = students.some((sv) => sv.age < 18);
  console.log("Sinh viên này dưới 18 tuối:", hasMinor);
  const allActive = students.every((sv) => sv.status === "active");
  console.log("Tất cả đủ điều kiện :", allActive);
}
function gpaStatistics() {
  if (students.length === 0) {
    console.log("Không có dữ liệu sinh viên");
    return;
  }
  const totalGPA = students.reduce((sum, sv) => {
    return sum + sv.gpa;
  }, 0);

  const average = totalGPA / students.length;

  console.log("===== GPA =====");
  console.log("Điểm GPA:", average.toFixed(2));
}
function menu() {
  let choice;
  do {
    choice = prompt(`
========= STUDENT MANAGEMENT =========
1. Create Student
2. Read All Students
3. Filter Scholarship Students
4. Update Student
5. Delete Student
6. Compliance Verification
7. GPA Statistics
0. Exit
Hãy nhập lựa chọn của bạn :
`);
    switch (choice) {
      case "1":
        createStudent();
        break;
      case "2":
        readStudents();
        break;
      case "3":
        filterScholarship();
        break;
      case "4":
        updateStudent();
        break;
      case "5":
        deleteStudent();
        break;
      case "6":
        complianceCheck();
        break;
      case "7":
        gpaStatistics();
        break;
      case "0":
        alert("Goodbye!");
        break;
      default:
        alert("Lựa chọn không hợp lệ !");
    }
  } while (choice !== "0");
}
menu();
