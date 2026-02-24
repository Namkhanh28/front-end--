
let playerIds = ["P001", "P002", "P003"];
let playerNames = ["Quang Hai", "Tien Linh", "Van Hau"];
let playerJerseyNumbers = [19, 22, 5];

function printTeamRoster() {
    console.log("===DANH SÁCH ĐỘI BÓNG===");

    for (let i = 0; i < playerIds.length; i++) {
        console.log(
            (i + 1) + ". " +
            playerIds[i] + " - " +
            playerNames[i] + " - Số áo: " +
            playerJerseyNumbers[i]
        );
    }
}

function updatePlayerNameAndJersey(playerId, newName, newJerseyNumber) {

    for (let i = 0; i < playerIds.length; i++) {
        if (playerIds[i] === playerId) {

            playerNames[i] = newName;
            playerJerseyNumbers[i] = newJerseyNumber;

            return true; 
        }
    }

    return false;
}

printTeamRoster();

let idInput = prompt("Nhập mã cầu thủ muốn cập nhật (ví dụ: P001):");

let newName = "";
let newJersey = 0;

let found = false;
for (let i = 0; i < playerIds.length; i++) {
    if (playerIds[i] === idInput) {
        found = true;
        break;
    }
}

if (found) {

    newName = prompt("Nhập tên mới cho cầu thủ:");
    newJersey = parseInt(prompt("Nhập số áo mới (1-99):"));

    if (isNaN(newJersey) || newJersey < 1 || newJersey > 99) {
        console.log("Số áo không hợp lệ!");
    } else {
        let result = updatePlayerNameAndJersey(idInput, newName, newJersey);
        if (result) {
            console.log("=> Cập nhật thành công!");
            printTeamRoster();
        }
    }

} else {
    console.log("Không tìm thấy cầu thủ với mã này!");
}