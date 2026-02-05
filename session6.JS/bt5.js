let arr = ["a", "3", 5, "b", 10, "7", "@", 2 , 9 ,"8"];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
    if (!isNaN(arr[i])) {
        sum += Number(arr[i]);
    }
}
console.log("Tổng các ký tự là số trong mảng là:", sum);
