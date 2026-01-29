//khai báo biên 
let bookName ="lập trình Web với JavaScript";
let author="Nguyễn Văn Nam";
let publish=2022;
let price =100.000;
let quantity=100;
//Chuẩn hóa dữ liệu 
// - Tên sách: Loại bỏ khoảng trắng thừa ở 2 đầu (trim) và chuyển tất cả thành chữ in hoa.
console.log("bookName:",bookName.trim());
console.log("Tên sách:",bookName.toUpperCase());

// - Tên tác giả: Chuyển thành chữ in hoa.
console.log("Tên tác giả ",author.toLocaleUpperCase());
//tạo mã định danh 
console.log("3 kí tự đầu tên của tác giả ",author.slice(0,3));
console.log('Năm xuất bản:',publish);
console.log("Số ngãu nhiên các só từ 1 đến 1000:",Math.ceil(Math.random()*1000));

let bookCode = `${author.slice(0,3)}${publish}${Math.ceil(Math.random()*1000)}`;
console.log("Mã sach",bookCode);
console.log("Thời gian hiện tại",new Date());
//Lấy ra năm 
let year=new Date().getFullYear();
let month =new Date().getMouth()+1;
let day=new Date().getDate();
let hour=new Date().getHour();
let minute=new Date().getMinutes();
let second=new Date().getSeconds();

//Tính tuổi của sách 
let bookage = year -publish ;
console.log("Tuổi của sach :",bookage);
let totalPrice = price*quantity;
console.log("Tổng giá trị của kho sách ",totalPrice);
//In ra phiến 
console.log(`
    --- PHIẾU NHẬP KHO ---

Mã sách: ${bookCode}

Tên sách: ${bookName.trim().toUpperCase()}

Tác giả:${author.toLocaleUpperCase()}

Năm xuất bản: ${publish}

Tuổi sách: ${bookage}

Tổng giá trị: ${totalPrice}
    
    `);

//Tạo mã ngẫu nhiên với fomat sau : 
//lây 3 kí tự cuối trong họ và tên của bản thân 
//cộng với tháng hiện tại và ngày sinh 

//Nam_11_28

let name ="Nguyễn Danh Nam Khánh";
let birthday = 11;
let monthofname =new Date().getMouth()+1;
console.log(`${nam.slice(-3)}_${monthofname}_${birthday}`);


