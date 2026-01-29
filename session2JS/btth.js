let userName = "Nguyễn Văn A";
let roleName = "admin";
let balance = 1000000;
let cardStatus = true;
let expirationDate = 0;

const ADMIN ="admin";
const GUEST ="guest";
const STUDENT="student";
switch (roleName.toLowerCase()) {
  case "ADMIN":
    console.log("Chào admin ,bạn có toàn quyền hệ thống  ");

    break;
  case "GUEST":
    console.log("Chào khách bạn có thể đọc sách tại chỗ");

    break;
  case "STUDENT":
    console.log("Chào sinh viên bạn có thể mượn sách ");
    if(userName && balance >0 && cardStatus){
        console.log("Dược cho phép mượn sách");
    if(expirationDate<=0){
        console.log('cảm ơn bạn đã trả đúng hạn ');
        
    }else if(expirationDate>=1&&expirationDate<=5){
          console.log("Số tiền phạt ",expirationDate*5000);
    }else if(expirationDate>=6 && expirationDate<=10){
         console.log("Số tiền phạt ",expirationDate*10000);
    }else{
        console.log("Số tiền phạt :",2000000);
        console.log('Khóa tài khoản');
        
    }
    }else{
        if(!userName){
        console.log("Yêu cầu bị từ chối /Lý do :Tên đang bị để trống ");
    }else if(balance<=0){
        console.log("Yêu cầu bị từ chối /Lý do :số dư không đủ");
    }else if(!cardStatus){
        console.log("Yéu cầu bị từ chối Ly do: thẻ đã bị khóa");
    }else{
        console.log("Yêu cầu bị từ chối ,lý do không rõ ");
    }   
    }
    break;
  default:
    console.log("lỗi:Vai trò không hợp lệ ");

    break;
}
