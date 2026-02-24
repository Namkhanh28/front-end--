let players = [
  "P001-Nguyễn Văn A-Thủ môn",
  "P002-Trần Thị B-Hậu vệ",
  "P003-Lê Văn C-Hậu vệ",
  "P004-Phạm Văn D-Tiền vệ",
  "P005-Hoàng Thị E-Tiền đạo",
  "P006-Vũ Minh F-Tiền đạo",
  "P007-Đặng Văn G-Thủ môn",
];
function findPlayersWithLongestName() {
  let longestName = "";
  let maxLength = 0;

  for (let i = 0; i < players.length; i++) {
    let name = players[i].split("-")[1];

    if (name.length > maxLength) {
      maxLength = name.length;
      longestName = name;
    }
  }

  return longestName;
}
function countPlayersStartingWithLetter(letter) {
  let count = 0;

  for (let i = 0; i < players.length; i++) {
    let name = players[i].split("-")[1];

    if (name.toLowerCase().startsWith(letter.toLowerCase())) {
      count++;
    }
  }

  return count;
}
console.log("Các vị trí duy nhất:", getAllPositions());

console.log("Cầu thủ có tên dài nhất:", findPlayersWithLongestName());

console.log(
  "Số cầu thủ bắt đầu bằng chữ 'N':",
  countPlayersStartingWithLetter("N"),
);
