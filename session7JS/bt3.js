
let players = [];
function pushPlayer(playerString) {
    players.push(playerString);
}
function printTeamRoster() {

    console.log("=== DANH SÁCH ĐỘI BÓNG ===");

    for (let i = 0; i < players.length; i++) {
        let parts = players[i].split("-");

        let id = parts[0];
        let name = parts[1];
        let position = parts[2];

        console.log((i + 1) + ". Mã: " + id +
                    " | Tên: " + name +
                    " | Vị trí: " + position);
    }
}


let num = parseInt(prompt("Có bao nhiêu cầu thủ cần nhập vào đội bóng?"));

for (let i = 0; i < num; i++) {
    console.log("Nhập cầu thủ " + (i + 1) + ":");
    let id;
    let isDuplicate;

    do {
        isDuplicate = false;
        id = prompt("Nhập mã cầu thủ:");
        for (let j = 0; j < players.length; j++) {
            let existingId = players[j].split("-")[0];
            if (existingId === id) {
                isDuplicate = true;
                console.log("Mã đã tồn tại! Nhập lại.");
                break;
            }
        }
    } while (isDuplicate);
    let name;
    do {
        name = prompt("Nhập tên cầu thủ:");
        if (name.trim() === "") {
            console.log("Tên không được để trống!");
        }
    } while (name.trim() === "");
    let choice = prompt(
        "Vị trí (1: Thủ môn 2: Hậu vệ 3: Tiền vệ 4: Tiền đạo):"
    );

    let position;

    switch (choice) {
        case "1":
            position = "Thủ môn";
            break;
        case "2":
            position = "Hậu vệ";
            break;
        case "3":
            position = "Tiền vệ";
            break;
        case "4":
            position = "Tiền đạo";
            break;
        default:
            position = "Không xác định";
    }
    let playerString = id + "-" + name + "-" + position;
    pushPlayer(playerString);
}

printTeamRoster();