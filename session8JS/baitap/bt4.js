const players = [
  "Messi - Forward",
  "Ronaldo - Forward",
  "Neymar - Forward",
  "De Bruyne - Midfielder",
  "Kante - Midfielder",
  "Van Dijk - Defender",
  "Alisson - Goalkeeper",
];

function reversePlayers(players) {
  return players.slice().reverse();
}
const reversed = reversePlayers(players);
console.log("Reversed:", reversed);
