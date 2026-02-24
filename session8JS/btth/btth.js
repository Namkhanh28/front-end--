const club = [

    ["Nguyen Van A", 10, "FW"],

    ["Tran Van B", 5, "MF"],

    ["Le Van C", 2, "DF"],

    ["Pham Van D", 12, "FW"],

    ["Hoang Van E", 8, "GK"],

    ["Dang Van F", 7, "MF"]


];
let displayTeam =(club)=>{
    club.forEach((item)=>{ 
        console.log(`${item[0]}(${item[2]}) : ${item[1]}Bàn thắng`);
        
    });
};
function menuFootball() {
}
let choice