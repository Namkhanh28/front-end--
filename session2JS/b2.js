let luongSach = Number(prompt("Hãy nhập số lượng sách "));
if (luongSach <= 10) {
  console.log("Lượng sách còn it sách");
} else if (luongSach >= 10 && luongSach <= 20) {
  console.log("lương sách có số lượng vừa đủ");
} else if (luongSach > 20) {
  console.log("Lượng sách còn rất nhiều");
}
