let n = Number(prompt("Nhập một giá trị bất kì:")) ;
if(n%2===0){
    console.log(`Số ${n} là số chẵn`);   
}
if(n %2===1){
    console.log(`số ${n}là số lẻ`);
    
}
if(n > 0){
    for( let i =0 ;i <= n ;i++){
        console.log(`${i}`);
    }
}
if(n < 0){
    console.log(`số ${n} không hợp lệ để tạo ra các dãy số`);
    
}

