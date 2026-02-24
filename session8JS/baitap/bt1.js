const players = [
  "Messi - Forward",
  "Ronaldo - Forward",
  "Neymar - Forward",
  "De Bruyne - Midfielder",
  "Kante - Midfielder",
  "Van Dijk - Defender",
  "Alisson - Goalkeeper"
];
const showPlayers = () => {
  players.forEach((player, index) => {
    console.log(`${index + 1}. ${player}`);
  });
};

showPlayers();