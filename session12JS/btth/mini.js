let warriors = [
  { id: "W001", name: "Musashi", class: "Samurai", attack: 85, defense: 60 },
  { id: "W002", name: "Ragnar", class: "Viking", attack: 92, defense: 70 },
  { id: "W003", name: "Spartacus", class: "Gladiator", attack: 80, defense: 65 },
  { id: "W004", name: "Lancelot", class: "Knight", attack: 75, defense: 85 },
  { id: "W005", name: "Leonidas", class: "Spartan", attack: 88, defense: 72 },
];



function showWarriors() {
  console.table(warriors);
}
function addWarrior() {
  const warrior = {
    id: prompt("Nhập ID chiến binh"),
    name: prompt("Nhập tên chiến binh muốn thêm"),
    class: prompt("Nhập loại chiến binh"),
    attack: Number(prompt("Nhập chỉ số tấn công")),
    defense: Number(prompt("Nhập chỉ số phòng thủ")),
  };

  warriors.push(warrior);

  alert("Thêm chiến binh thành công!");
}



function deleteWarrior() {
  const name = prompt("Nhập tên chiến binh cần xóa");

  const index = warriors.findIndex(
    w => w.name.toLowerCase() === name.toLowerCase()
  );

  if (index === -1) {
    alert("Không tìm thấy chiến binh");
  } else {
    warriors.splice(index, 1);
    alert("Đã xóa thành công");
  }
}


function updateWarrior() {
  const name = prompt("Nhập tên chiến binh cần cập nhật");

  const warrior = warriors.find(
    w => w.name.toLowerCase() === name.toLowerCase()
  );

  if (!warrior) {
    alert("Không tìm thấy chiến binh");
    return;
  }

  warrior.attack = Number(prompt("Nhập attack mới"));
  warrior.defense = Number(prompt("Nhập defense mới"));

  alert("Cập nhật thành công!");
}


function searchWarrior() {
  const keyword = prompt("Nhập tên hoặc class");
  const result = warriors.filter(
    w =>
      w.name.toLowerCase() === keyword.toLowerCase() ||
      w.class.toLowerCase() === keyword.toLowerCase()
  );

  if (result.length === 0) {
    alert("Không tìm thấy");
  } else {
    console.table(result);
  }
}

function calculatePower() {
  const totalAttack = warriors.reduce(
    (sum, w) => sum + w.attack, 0
  );

  const totalDefense = warriors.reduce(
    (sum, w) => sum + w.defense, 0
  );

  alert(`Tổng Attack: ${totalAttack} | Tổng Defense: ${totalDefense}`);
}

function sortWarriors() {
  const sorted = [...warriors].sort(
    (a, b) => a.attack - b.attack
  );
  console.table(sorted);
}


function simulateBattle() {
  const name1 = prompt("Chiến binh 1:");
  const name2 = prompt("Chiến binh 2:");

  const w1 = warriors.find(w => w.name === name1);
  const w2 = warriors.find(w => w.name === name2);

  if (!w1 || !w2) {
    alert("Một trong hai chiến binh không tồn tại!");
    return;
  }

  const damage1 = Math.floor(w1.attack - w2.defense / 2);
  const damage2 = Math.floor(w2.attack - w1.defense / 2);

  if (damage1 > damage2) {
    alert(`${w1.name} chiến thắng!`);
  } else if (damage2 > damage1) {
    alert(`${w2.name} chiến thắng!`);
  } else {
    alert("Hòa!");
  }
}
let choice;

do {
  choice = Number(
    prompt(`
============================================
1. Hiển thị danh sách
2. Thêm chiến binh
3. Xóa chiến binh
4. Cập nhật
5. Tìm kiếm
6. Tổng sức mạnh
7. Sắp xếp theo attack
8. Battle 1v1
0. Thoát
============================================
Nhập lựa chọn:
`)
  );

  switch (choice) {
    case 1: showWarriors(); break;
    case 2: addWarrior(); break;
    case 3: deleteWarrior(); break;
    case 4: updateWarrior(); break;
    case 5: searchWarrior(); break;
    case 6: calculatePower(); break;
    case 7: sortWarriors(); break;
    case 8: simulateBattle(); break;
    case 0: console.log("Thoát chương trình"); break;
    default: alert("Lựa chọn không hợp lệ");
  }

} while (choice !== 0);