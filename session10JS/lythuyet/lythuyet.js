// const student = {
//   name: "An",
//   age: 20,
//   study() {
//     console.log("Dang hoc...");
//   },
// };
// console.log(student);

function generateplayerseasonreport(playername, teamhistory) {
let p = null;
for (let i = 0; i < teamhistory.length; i++) {
       if (teamhistory[i].name === playername) {
       p = teamhistory[i];
break;
}
}

if (!p) return "Không tìm thấy cầu thủ" + playername;

let totalmatches = 0, totalgoals = 0, totalassists = 0, totalyellowcards = 0;
 let bestseason = null;

for (let s in p.seasons) {
let data = p.seasons[s];
totalmatches += data.matches;
totalgoals += data.goals;
totalassists += data.assists;
totalyellowcards += data.yellowcards;

if (!bestseason) {
bestseason = { season: s, goals: data.goals, assists: data.assists };
} else {
if (data.goals > bestseason.goals) {
bestseason = { season: s, goals: data.goals, assists: data.assists };
} else if (data.goals === bestseason.goals && data.assists > bestseason.assists) {
bestseason = { season: s, goals: data.goals, assists: data.assists };
}
}
}

let baocao = {
  name: p.name,
  position: p.position,
  nationality: p.nationality,
  careerstats: {
  totalmatches: totalmatches,
  totalgoals: totalgoals,
  totalassists: totalassists,
  totalyellowcards: totalyellowcards,
  averagegoalspermatch: parseFloat((totalgoals / totalmatches).toFixed(2)),
  averageassistspermatch: parseFloat((totalassists / totalmatches).toFixed(2))
},
bestseason: bestseason
};
console.log(baocao);
}