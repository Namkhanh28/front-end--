
let playerIds = [];
let playerPositions = [];

function printKTRoster() {
    console.log("Đội bóng hiện tại (" + playerIds.length + " cầu thủ):");

    for (let i = 0; i < playerIds.length; i++) {
        console.log((i + 1) + ". " + playerIds[i] + " - " + playerPositions[i]);
    }
}
function findPlayersByPosition(position) {
    let indexes = [];

    for (let i = 0; i < playerPositions.length; i++) {
        if (playerPositions[i] === position) {
            indexes.push(i);
        }
    }

    return indexes;
}


let value = Number(prompt("Có bao nhiêu cầu thủ cần nhập vào đội bóng?"));
for (let i = 0; i < value; i++) {
    console.log("\nNhập cầu thủ " + (i + 1) + ":");
    let id;
    let isDuplicate;

    do {
        isDuplicate = false;
        id = prompt("Mã cầu thủ:");

        for (let j = 0; j < playerIds.length; j++) {
            if (playerIds[j] === id) {
                isDuplicate = true;
                console.log("Mã cầu thủ đã tồn tại! Nhập lại.");
                break;
            }
        }

    } while (isDuplicate);

    playerIds.push(id);

    let choice = prompt(
        "Vị trí (1: Thủ môn 2: Hậu vệ 3: Tiền vệ 4: Tiền đạo):"
    );

    let position;

    switch (choice) {
        case 1:
            position = "Thủ môn";
            break;
        case 2:
            position = "Hậu vệ";
            break;
        case 3:
            position = "Tiền vệ";
            break;
        case 4:
            position = "Tiền đạo";
            break;
        default:
            position = "Không xác định";
    }

    playerPositions.push(position);
}
let searchChoice = prompt(
    "Nhập vị trí cầu thủ muốn đếm số lượng (1: Thủ môn, 2: Hậu vệ, 3: Tiền vệ, 4: Tiền đạo):"
);

let searchPosition;

switch (searchChoice) {
    case "1":
        searchPosition = "Thủ môn";
        break;
    case "2":
        searchPosition = "Hậu vệ";
        break;
    case "3":
        searchPosition = "Tiền vệ";
        break;
    case "4":
        searchPosition = "Tiền đạo";
        break;
    default:
        searchPosition = "";
}
printKTRoster();

let resultIndexes = findPlayersByPosition(searchPosition);

console.log("Số cầu thủ ở vị trí " + searchPosition + ": " + resultIndexes.length);
console.log("Các chỉ số cầu thủ ở vị trí " + searchPosition + ": " + resultIndexes.join(", "));