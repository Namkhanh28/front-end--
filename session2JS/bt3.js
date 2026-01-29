let bookName = prompt("Nhập tên cuốn sách:");
let type = prompt("Thể loại sách là gì (Khoa học, Lịch sử, Văn học, Truyện):");
let tinhtrang = prompt("Nhập tình trạng sách (có sẵn/không có sẵn):");

type = type.trim();
tinhtrang = tinhtrang.trim().toLowerCase();

if (type === "Khoa học" || type === "Lịch sử") {
  if (tinhtrang === "có sẵn") {
    console.log("Sách này có sẵn trong thư viện");
  } else {
    console.log("Sách đã được mượn");
  }
} else if (type === "Văn học" || type === "Truyện") {
  console.log("Sách này có thể đọc giải trí");
} else {
  console.log("Không xác định được loại sách");
}
