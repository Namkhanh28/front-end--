//Sự khác nhau giữa toán tử so sánh "==" và  "==="
//Toán tử so sánh "==":Chỉ so sanh về mặt giá trị .không quan tâm đến kiểu dữ liệu 
//Toán tử so sánh "===":So sánh về cả giá trị và so sánh cả kiểu dữ liệu
const variable_1 =10; //type :number
const variable_2 ="10";//type :string;
console.log("khi so sánh với ==:",variable_1==variable_2);
console.log("khi so sánh với ===:",variable_1===variable_2);

console.log("khi so sánh với !=:",variable_1!=variable_2);//false 
console.log("khi so sánh với ===:",variable_1!==variable_2);//true
//Câu lệnh điều kiện 
//1.Nếu có 1 điều kiện 
const myAge=19;
if(myAge>=19){
console.log("Đủ tuổi lái xe");
}
//2.Nếu có 2 điều kiện 
if(myAge>=18){
console.log("đủ tuổi lái xe ");

}else{
console.log("Chưa đủ tuổi lái xe");

}

//Trên 2 điều kiện 
// if(myAge==18){
// console.log("đủ tuổi lái xe ");

// }else if(myAge){

// }else{

// }

//khi nào nên dùng if-else -else: Khi điều kiện nằm trong khoảng 

//Câu lệnh switch -case :Dùng toán tử so sánh ===
const day ="2";
if(day=2){
    console.log("Thứ 2");
    
}

switch (day) {
    case 2:
        console.log("Thứ 2");
        
        break;
  case 3:
        console.log("Thứ 3");
        
        break;
  case 4:
        console.log("Thứ 4");
        
        break;
    case 5:
        console.log("Thứ 5");
        
        break;
      case 6:
        console.log("Thứ 6");
        
        break;
    default:
        console.log("Không hợp lệ ");
        
        break;
}
let name ="Nguyễn Danh Nam Khánh";
let birthday = 11;
let monthofname =new Date().getMouth()+1;
console.log(`${nam.slice(-3)}_${monthofname}_${birthday}`);