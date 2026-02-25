const club = [
  ["Nguyen Van A", 10, "FW"],

  ["Tran Van B", 5, "MF"],

  ["Le Van C", 2, "DF"],

  ["Pham Van D", 12, "FW"],

  ["Hoang Van E", 8, "GK"],

  ["Dang Van F", 7, "MF"],
];
const displayListPerson = (listPlayer) => {
  listPlayer.forEach((player) => {
    console.log(`${player[0]} (${player[2]} : ${player[1]} Goal)`);
  });
};

const filterPlayer = (searchPlayer, listPlayer) => {
  let findUser = listPlayer.find((player) => {
    return player[0].toLowerCase().includes(searchPlayer.toLowerCase().trim());
  });
  if ((findUser = undefined)) {
    console.log("khong tim thay cau thu");
  } else {
    console.log(`${findUser[0]} (${findUser[2]} : ${findUser[1]} Goal)`);
  }
};

let choice;
const displayMenu = () => {
  choice = Number(
    prompt(`--- QUẢN LÝ ĐỘI BÓNG ---

1. Xem danh sách

2. Tìm kiếm (Find)

3. Lọc vị trí (Filter)

4. Tổng bàn thắng (Reduce)

5. Kiểm tra hiệu suất (Some/Every)

0. Thoát`),
  );
};
displayMenu();
do {
  displayMenu();
  switch (choice) {
    case 1:
      displayListPerson(club);
      break;
    case 2:
      let searchName = prompt("Moi ban nhap ten cau thu ");
      filterPlayer(searchName, club);
      break;
    case 3:
      break;
    case 5:
      break;

    default:
      break;
  }
} while (choice != 0);
