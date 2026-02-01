
let bookName = prompt("Nhập tên sách:");
let borrower = prompt("Nhập tên người mượn:");
let bookStatus = prompt( "Nhập tình trạng sách (có sẵn / đã mượn  / không có sẵn ):");
let borrowDays = Number(prompt("Nhập số ngày mượn:"));
let hasLibraryCard = prompt("Bạn có thẻ thư viện không? (có / không):");


if (bookStatus.toLowerCase() === "có sẵn" && hasLibraryCard.toLowerCase() === "có") {
  console.log("Chúc mừng, bạn có thể mượn sách này");

} else if (bookStatus.toLowerCase() === "đã mượn" && borrowDays < 30) {

  if ( hasLibraryCard.toLowerCase() === "có") {
    console.log("Sách đang được mượn");
  } else {
    console.log("Bạn không thể mượn sách do không có thẻ thư viện");
  }

} else if (bookStatus.toLowerCase() === "không có sẵn ") {
  console.log("Sách này hiện tại không có sẵn trong thư viện");

} else {
  console.log("Thông tin không hợp lệ, vui lòng nhập lại");
}
