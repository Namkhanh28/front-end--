const player = {
  name: "Messi",
  position: "Forward",
  matchGame: 34,
  age: 36,
  goals: 25,
  assists: 15,
};

const addPerformanceScore = (player) => {
  let performancePerMatch = (player.goals + player.assists) / player.matchGame;
  return performancePerMatch;
};

const isKeyPlayer = (performancePerMatch) => {
  if (performancePerMatch >= 1.0) {
    console.log(true);
  } else {
    console.log(false);
  }
};

const performance = addPerformanceScore(player);
isKeyPlayer(performance);
