
let array = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];

//khai báo hàm 
//Khi xây dựng hàm cần phải xác định các thông tin sau 
//1 Tên hàm 
//2 Số lượng tham số và đối số
//3 logic xử lý 
//4 kết quả trả về 

//function declaration 
function totalArray(firstNumber,secondNumber){
    console.log("Hàm tính tổng ", firstNumber+secondNumber);
    return firstNumber+secondNumber;
}
//gọi Hàm 
totalArray(50,82);
//LẤY KẾT quả trả về từ hàm 
const result =totalArray(50,82);
console.log("kết quả ",result);
//function expression 
function expressionFunc(num_1,num_2) {
    return num_1+num_2;
}
expressionFunc(12,50);


const getName = (userName)=> `Tên tôi là :${userName}`;
console.log(getName("Nguyễn Văn A"));
//QUY TÁC comment hàm theo JSDoc
/**
 * @desctiption Hàm định dạnh chuỗi họ và tên 
 * 
 * @param {*} firstName Họ và tên dệmd
 * @param {*} fullName tên 
 * @returns Họ và tên đầy đủ 
 * @author Ngọ Văn Quý (08/03/20026)
 * @modified:Nguyễn Văn Nam 
 */
const getFullName=(firstName,fullName)=>`Fullname :${firstName}${fullName}`;
//IIFE 