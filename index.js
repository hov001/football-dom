import aplClubs from "./src/assets/data/leagues/apl.json" assert { type: "json" };
import aplMatches from "./src/assets/data/matches/apl.json" assert { type: "json" };
import { matchesResultOption } from "./src/constants/matches.constants.js";
import getClubsStat from "./src/services/matches.services.js";

// console.log("aplClubs:::", aplClubs);
// console.log("aplMatches:::", aplMatches);

/*

{
  'Team Name': {
    mp: 0,
    w: 0,
    d: 0,
    l: 0
    gf: 0,
    ga: 0
    gd: 0,
    pts: 0
  }
}

*/

console.log(getClubsStat(aplMatches.matches, matchesResultOption));
