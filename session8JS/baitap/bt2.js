const players = [
  "Messi - Forward",
  "Ronaldo - Forward",
  "Neymar - Forward",
  "De Bruyne - Midfielder",
  "Kante - Midfielder",
  "Van Dijk - Defender",
  "Alisson - Goalkeeper"
];
let printUpperplayer =() =>{
    players.forEach(name =>{
        console.log(name.toUpperCase());
    })
}
printUpperplayer();