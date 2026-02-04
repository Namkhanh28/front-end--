
let booksId = [];
let booksName = [];
let bookStatus = [];

let num = parseInt(prompt("Có bao nhiêu cuốn sách cần kiểm tra tình trạng hôm nay?"));

for (let i = 0; i < num; i++) {
    let id;
    do {
        id = prompt("Nhập mã sách thứ " + (i + 1));
    } while (id === "");
    let name;
    do {
        name = prompt("Nhập tên sách thứ " + (i + 1));
    } while (name === "");
    let statusChoice;
    let status = "";

    do {
        statusChoice = parseInt(prompt(
            "Chọn tình trạng ban đầu:\n" +
            "1 - Hỏng nhẹ\n" +
            "2 - Hỏng nặng\n" +
            "3 - Cần sửa gấp"
        ));
    } while (statusChoice < 1 || statusChoice > 3);

    switch (statusChoice) {
        case 1:
            status = "Hỏng nhẹ";
            break;
        case 2:
            status = "Hỏng nặng";
            break;
        case 3:
            status = "Cần sửa gấp";
            break;
    }
    booksId.push(id);
    booksName.push(name);
    bookStatus.push(status);
}
console.log("DANH SÁCH BAN ĐẦU:");
for (let i = 0; i < booksId.length; i++) {
    console.log(
        (i + 1) + ". " +
        booksId[i] + " | " +
        booksName[i] + " | " +
        bookStatus[i]
    );
}
let choice;
do {
    choice = parseInt(prompt(
        "Chọn chức năng:\n" +
        "1 - Sửa tình trạng sách\n" +
        "2 - Loại bỏ (xóa) sách\n" +
        "0 - Kết thúc"
    ));

    switch (choice) {
        case 1:
            let findId = +prompt("Nhập mã sách cần sửa:");
            let foundIndex = -1;

            for (let i = 0; i < booksId.length; i++) {
                if (booksId[i] === findId) {
                    foundIndex = i;
                    break;
                }
            }

            if (foundIndex !== -1) {
                let newStatusChoice = Number(prompt(
                    "Chọn tình trạng mới:\n" +
                    "1 - Hỏng nhẹ\n" +
                    "2 - Hỏng nặng\n" +
                    "3 - Cần sửa gấp\n" +
                    "4 - Đã sửa xong\n" +
                    "5 - Loại bỏ"
                ));

                switch (newStatusChoice) {
                    case 1:
                        bookStatus[foundIndex] = "Hỏng nhẹ";
                        break;
                    case 2:
                        bookStatus[foundIndex] = "Hỏng nặng";
                        break;
                    case 3:
                        bookStatus[foundIndex] = "Cần sửa gấp";
                        break;
                    case 4:
                        bookStatus[foundIndex] = "Đã sửa xong";
                        break;
                    case 5:
                        bookStatus[foundIndex] = "Loại bỏ";
                        break;
                }
            } else {
                console.log("Không tìm thấy mã sách!");
            }
            break;

        case 2:
            let deleteId = prompt("Nhập mã sách cần xóa:");
            let deleteIndex = -1;

            for (let i = 0; i < booksId.length; i++) {
                if (booksId[i] === deleteId) {
                    deleteIndex = i;
                    break;
                }
            }

            if (deleteIndex !== -1) {
                booksId.splice(deleteIndex, 1);
                booksName.splice(deleteIndex, 1);
                bookStatus.splice(deleteIndex, 1);
                console.log("Đã xóa sách khỏi danh sách.");
            } else {
                console.log("Không tìm thấy mã sách!");
            }
            break;

        case 0:
            console.log("Kết thúc chỉnh sửa.");
            break;

        default:
            console.log("Lựa chọn không hợp lệ!");
    }
    console.log("DANH SÁCH HIỆN TẠI:");
    for (let i = 0; i < booksId.length; i++) {
        console.log(
            (i + 1) + ". " +
            booksId[i] + " | " +
            booksName[i] + " | " +
            bookStatus[i]
        );
    }

} while (choice !== 0);
let repairedCount = 0;
let removedCount = 0;

for (let i = 0; i < bookStatus.length; i++) {
    if (bookStatus[i] === "Đã sửa xong") {
        repairedCount++;
    }
    if (bookStatus[i] === "Loại bỏ") {
        removedCount++;
    }
}
console.log("Tổng số sách còn lại: " + booksId.length);
console.log("Số sách đã sửa xong: " + repairedCount);
console.log("Số sách loại bỏ: " + removedCount);
