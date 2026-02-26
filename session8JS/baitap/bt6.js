const players = [
  "Messi - Forward - 25-34-56",
  "Ronaldo - Forward -34-45-65",
  "Neymar - Forward-23-34-45",
  "De Bruyne - Midfielder-45-53-24",
  "Kante - Midfielder 23-32-42",
  "Van Dijk - Defender-5 -3-36",
  "Alisson - Goalkeeper-0-1-34",
];
const filterPlayerByPosition = (pos, players) => {
  let listPlayer = players.filter((player) => {
    return player.toLowerCase().includes(pos.toLowerCase().trim());
  });
  console.log(listPlayer);
};
filterPlayerByPosition("goal", players);

let reportByPosition = (players) => {
  let listPlayerByForward = filterPlayerByPosition("Forward", players);
  console.log(`Só lượng cầu thủ :${filterPlayerByPosition.length}`);
  let newListPlayerByForward = listPlayerByForward.map((player) => {
    return player.split("-");
  });

  let totalGoal = newListPlayerByForward.reduce((acc, player) => {
    return (acc += player[2]);
  }, 0);
  console.log(`Tổng số bàn thắng : ${totalGoal}`);

  let totalAss = newListPlayerByForward.reduce((acc, player) => {
    return (acc += player[3]);
  }, 0);
  console.log(`Tổng số kiến tạo : ${totalAss}`);
};

reportByPosition(players);
