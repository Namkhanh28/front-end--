console.log("Hello JavaScript");
//Khai báo biến :var,let ,const
var userName ="faker";
console.log("userName trc khi khai báo lại =",userName);
//Khả năng khai báo lại giá trị 
var userName ="Lê văn B";
console.log("userName sau khi khai báo lại",userName);
//Hosting 
age=20;
console.log("age :",age);
var age=10;
//Nhược điểm là code khó bảo trì khó kiểm soát được biến ,khó phát hiện lỗi 
//Từ năm 2015,Js phát hành phiên bản ES6(thêm hai từ khóa let và const)
// let studentName ="Nguyễn Minh Nam";
//Khai báo lại 
// let studentName ="Lê văn B ";
//Gán lại giá trị 
studentName ="Lê Văn C";
console.log("studentName sau khi gán lại ",studentName);
//Phạm vi (block){}
//Hoisting có temporal dead zone 
// console.log(student);
// let student ="Sv0008"
const PI =3.14;
//không thê khai báo lại với const 
// có hoisting và tương tự như let 
// Các kiểu sữ liệu cơ bản 
//1,kiểu số 
const firstNumber =10;
const secondNumber=22;

console.log("firstNumber",firstNumber);
console.log("secondNumber",secondNumber);
console.log("Kiểu dữ liệu của biển firstNumber",typeof firstNumber);
console.log("10+22=",firstNumber+secondNumber);

console.log(firstNumber+"+"+secondNumber +"=",firstNumber+secondNumber);
console.log(firstNumber+"-"+secondNumber +"=",firstNumber-secondNumber);

console.log(firstNumber+"%"+secondNumber +"=",firstNumber%secondNumber);

console.log(firstNumber+"/"+secondNumber +"=",firstNumber/secondNumber);
//2,kiểu chuỗi 
const email = "nva09@gmail.com";
const address='Thanh Xuân ,Hà Nội'
console.log("email="+email+"-"+"Địa chỉ ="+address);

// Template string
console.log(`Email=${email},Address=${address}`);
//Kiểu boolean
console.log(false);
//kiểu undefined
let gander ;
console.log("gender:",gender);
//Kiểu null :KHi khai báo một biến ,nếu chúng ta chưa hay không muốn xác định 
//trước được giá trị của biến đó thì mực định gán giá trị là null
const user =null
//Kiêu NaN (Not a Number)
console.log("Kiểu dữ liệu của NaN",typeof NaN);
//Chuyển dổi dữ liệu 

const score =90;
const historyScore ="5";
//Chuyển đổi từ một chuỗi thành một số 
console.log(Number(historyScore));
console.log(parseInt(historyScore));
console.log(+historyScore);
//Chuyển một số thành 1 chuỗi 
console.log(String(score));
console.log(score.toString());
// 3,Chuyển đổi thành boolean 
console.log(Boolean(1));
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(false));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));

//Cơ chế nhập xuất trong Js 
// const myName = prompt("Nhập tên của bạn ");
// const myAge =+prompt("Nhâp tuổi của bạn :");
// console.log("my name",myName);
// // Cơ chế xuất dữ liệu
// alert(myName);
// alert(myAge);
// Cơ chế lựa chọn 
const isConfirm =confirm("Bạn có xác nhận đăng xuất không ?");
console.log("isConfirm",isConfirm);













