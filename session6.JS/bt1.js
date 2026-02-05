let numbers = [1, 22, 12, 8, 7, 9, 10, 15, 3, 20];
let array = [];
let count = 0;
console.log("Mảng số nguyên:", numbers);
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] >= 10) {
    count++;
    array.push(numbers[i]);
  }
}
console.log("Số lượng số nguyên lớn hơn hoặc bằng 10 là:", count);
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}
