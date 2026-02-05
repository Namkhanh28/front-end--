let chars = ['a', '1', 'b', '5', 'c', '9'];
let count = 0;

for (let i = 0; i < chars.length; i++) {
    let value = Number(chars[i]);

    if (Number.isInteger(value)) {
        count++;
    }
}

console.log("Số ký tự là số:", count);
