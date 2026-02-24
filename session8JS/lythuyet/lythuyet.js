 let listNumber =[12,20,30,45,43];

 listNumber.forEach((item,index,array)=>{
    console.log(`${index}:${item}:${array}`);
    return 
 })
    
// const numbers = [10, 20, 30];

// numbers.forEach((num, index) => {
//     console.log(`Chỉ số ${index}: ${num * 2}`); // Nhân đôi giá trị
// });
// // Kết quả:
// // Chỉ số 0: 20
// // Chỉ số 1: 40
// // Chỉ số 2: 60
let newNumber;
let newArray =listNumber.map ((number,index)=>{
    if(number %2 ==0){
        newNumber =number*2;
    }
    return newNumber;
});