
let bookName = prompt("Nhập tên cuốn sách:");
let static = prompt("Nhập trạng thái sách (có sẵn/đã mượn):");
let publishYear = parseInt(prompt("Nhập năm xuất bản:"));

let currentYear = new Date().getFullYear();
let yearDiff = currentYear - publishYear;

if (static.toLowerCase() === "có sẵn") {
    if (yearDiff <= 5) {
        console.log("Sách này mới và có sẵn để mượn");
    } else {
        console.log("Sách này có sẵn nhưng đã lâu năm");
    }
} else if (static.toLowerCase() === "đã mượn") {
    if (yearDiff <= 10) {
        console.log("Sách này đã mượn nhưng khá mới, có thể mượn lại sau");
    } else {
        console.log("Sách này đã mượn và khá cũ");
    }
} else {
    console.log("Trạng thái sách không hợp lệ");
}