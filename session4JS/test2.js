let num = Number(prompt("Nhập một giá trị bất kì(từ 1-50)"));
let count = 0;
if (num > 50 || num < 1) {
  console.log("Hãy nhập lại đúng yêu cầu");
} else if (num % 3 === 0 && num % 5 === 0) {
  console.log("FizzBuzz");
} else if (num % 3 === 0) {
  console.log("Fizz");
  count++;
  console.log(count);
} else if (num % 5 === 0) {
  console.log("Buzz");
} else {
  console.log(num);
}
