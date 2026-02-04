//Cú pháp khai báo mảng 
const numbers = [1,2,3,4,5,6];
console.log(`${numbers}`);
//Các thông tin cơ bản của mảng 
console.log("độ dài mảng : ",numbers.length);

//1,Index bắt đầu ở vị trí 0 va kết thúc ở vị trí :độ dài mảng -1
//2,Cách truy suất phần tử trong mảng 
console.log("Phần tử đầu tiên của mảng ",numbers[0]);
//3.Duyệt mảng 
for(let i=0;1<numbers.length;i++){
    console.log("i",i);
    // i đại diện cho chỉ số của phần tử trong mảng 
    //Giá trị của phần tử
    console.log("number ",number[i]);
    
}
//Các thao tác làm việc với mảng (CRUD)
//4. C : Create (thêm  phần tử vào mảng )
// 4.1.Them phần tử vào cuối mảng 
numbers.push(7,8,6,10);
console.log("numbers sau khi push",numbers);
// 5.2 Thêm phần tử vào đầu mảng 
numbers.unshift(-1,0);
console.log('Numbers sau khi unshift'+numbers);
//5.3 Chèn phần tử vào trong 1 vị trí chỉ định 
numbers.splice(1,0,100);
console.log("mảng sau khi splice(chèn)",numbers);

//6 R:Đọc mảng Read (duyệt mảng )
numbers[1]=200;
console.log("number sau khi cập nhật ",numbers);

//7 U :Update phần tử trong mảng 
//  6 ; Xóa phần tử trong mảng 
const numbersDeleteStart =number.shift();
// 6.1 Xóa phần tử ở đầu mảng
console.log("Phần tử vừa xía là : ",numbersDeleteStart);

console.log("Numbers sau khi shift ",numbers);
// 6.2 Xóa phần tử cở cuối mảng 
numbers.pop();
const numbersDeleteEnd =numbers.pop();

// 7 Tìm kiếm phần tử 
let resourceSearch=numbers.includes(6);
console.log("resourceSearch là ", resourceSearch);

// 9.Nối mảng
const firstString =[1,2,3,4,5];
const nextString =[6,7,7,8,9,8];
const newString = firstString.concat(nextString);
//Chuyển đổi từ chuổi thành mảng 
const fullName ="Nguyễn-Văn-Nam Khánh An Tâm";

fullName.split("");
let fullNameArrray=fullName.split("-");
console.log("Kết quả sau khi chuyển đổi :",fullNameArrray[fullNameArrray.length-1]);

//Chuyển đổi từ mảng thành chuỗi
const str =["H","e","l","l","o"];
console.log(str.join(""));
