let prices = [100, 200, 300, 400];
let count;

for (let i = 0; i <= prices.length; i++) {
  if (prices[i] % 2 == 0) {
    count++;
  }
}
for (let value of prices) {
  console.log(value);
}
for (let prising in prices) {
  console.log("phần tử" + prising + " ở vị trí thứ" + i);
}
console.log(`Tổng các phần tử chẵn trong mảng là :${count}`);
