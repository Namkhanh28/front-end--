
let numbers = [12, 45, 7, 89, 23, 56, 34, 9, 67, 18];
let maxValue = numbers[0];
let maxIndex = 0;
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > maxValue) {
        maxValue = numbers[i];
        maxIndex = i;
    }
}
console.log("Mảng số nguyên:", numbers);
console.log("Giá trị lớn nhất trong mảng là:", maxValue);
console.log("Vị trí của phần tử lớn nhất là:", maxIndex);


