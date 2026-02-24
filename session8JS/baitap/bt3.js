const players = [
  "Messi - Forward",
  "Ronaldo - Forward",
  "Neymar - Forward",
  "De Bruyne - Midfielder",
  "Kante - Midfielder",
  "Van Dijk - Defender",
  "Alisson - Goalkeeper",
];

const filterPlayersByPosition = (position, players) => {
  players.filter((player) => {
    const playerPosition = player.split(" - ")[1];
    return playerPosition === position;
  });
};
 const forwards = filterPlayersByPosition("Forward", players);
 const midfielders = filterPlayersByPosition("Midfielder", players);

console.log("Forwards:", forwards);
console.log("Midfielders:", midfielders);
