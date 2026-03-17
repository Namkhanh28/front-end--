let contacts = [
  {
    name: "Nguyễn Văn An",
    phone: "0901234567",
    email: "nguyenvanan@email.com",
    address: "123 Đường ABC, Quận 1, TP.HCM",
  },
  {
    name: "Trần Thị Bình",
    phone: "0912345678",
    email: "tranthibinh@email.com",
    address: "456 Đường XYZ, Quận 2, TP.HCM",
  },
];

const form = document.getElementById("contact-form");
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("contact-name")[0].value.trim();
  const phone = document.getElementById("contact-phone")[0].value.trim();
  const email = document.getElementById("contact-email")[0].value.trim();

  if (!validateContact(name, phone, email, address)) {
    return;
  }
});
function validateContact(name, phone, email, address) {
  if (!name || name.trim() === "") {
    alert("Tên không được để trống ");
  }
  if(name.trim().length < 2){
    alert("Tên không được ít hơn 2 kí tự")
  }
  if (!phone || phone.trim() === "") {
    alert("Số điện thoại không được để trống ");
  }
  if(phone.trim().length >9){
    alert("số điện thoại phải đủ 10 số");

  }
  if(phone.trim().length[0]< 0){
    alert("Nhập đúng với số điện thoại vùng ")
  }
  if (!address || address.trim() === "") {
    alert("Địa chỉ không được để trống ");
  }
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.trim())) {
    alert('Email không hợp lệ!');
    return false;
  }
 const nameRegex = /^[a-zA-ZÀ-ỹ\s]+$/;
  if (!nameRegex.test(name.trim())) {
    alert('Họ tên không được chứa số hoặc ký tự đặc biệt!');
    return false;
  }
};
