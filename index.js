import aplClubs from "./src/assets/data/leagues/apl.json" assert { type: "json" };
import aplMatches from "./src/assets/data/matches/apl.json" assert { type: "json" };
import { matchesResultOption } from "./src/constants/matches.constants.js";
import getClubsStat from "./src/services/matches.services.js";

console.log(getClubsStat(aplMatches.matches, matchesResultOption));
