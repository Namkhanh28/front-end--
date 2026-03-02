let squad = [
  { id: 1, name: "Nguyen Van A", goals: 10, position: "FW" },

  { id: 2, name: "Tran Van B", goals: 5, position: "MF" },

  { id: 3, name: "Le Van C", goals: 0, position: "DF" },

  { id: 4, name: "Pham Van D", goals: 12, position: "FW" },

  { id: 5, name: "Dang Van E", goals: 0, position: "GK" },
];

let choice = +prompt(`--- FOOTBALL MANAGER PRO ---

1. Xem đội hình

2. Thêm cầu thủ

3. Tìm kiếm (theo ID)

4. Cập nhật bàn thắng

5. Xóa cầu thủ (Chuyển nhượng)

0. Thoát`);

const displayListPlayer = (listPlayer) => {
  listPlayer.forEach((player) => {
    console.log(`Mã :${player.id} - ${player.name} - ${player.goals} - ${player.position}
        `);
  });
};
const addPlayer = (listPlayer) => {
  let newName = prompt("MỜI bạn nhập tên");
  let newGoals = +prompt("MỜi nhập số bàn thắng");
  let newPos = prompt("Mời bạn nhập vị trí");
  let newPlayer = {
    id: Date.now(),
    name: newName,
    goals: newGoals,
    position: newPos,
  };

  listPlayer.push(newPlayer);
};
switch (choice) {
  case 1:
    displayListPlayer(squad);
    break;
  case 2:
    addPlayer(squad);
    console.log(squad);

    break;
  case 3:
    break;
  case 4:
    break;
  case 5:
    break;
  case 0:
    console.log("Bạn đã thoát chương trình ");
    break;
  default:
    break;
}
