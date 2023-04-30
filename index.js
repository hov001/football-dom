import aplClubs from "./src/assets/data/leagues/apl.json" assert { type: "json" };
import aplMatches from "./src/assets/data/matches/apl.json" assert { type: "json" };
import { matchesResultOption } from "./src/constants/matches.constants.js";

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

function calcClubStat(clubStat = {}, scores = [], matchResult) {
  const defaultStat = {
    ...clubStat,
    mp: clubStat.mp + 1,
    gf: clubStat.gf + scores[0],
    ga: clubStat.ga + scores[1],
  };

  defaultStat.gd = defaultStat.gf - defaultStat.ga;

  switch (matchResult) {
    case matchesResultOption.WIN:
      defaultStat.w = clubStat.w + 1;
      defaultStat.pts = clubStat.pts + 3;
      break;
    case matchesResultOption.LOSE:
      defaultStat.l = clubStat.l + 1;
      break;
    case matchesResultOption.DRAW:
      defaultStat.d = clubStat.d + 1;
      defaultStat.pts = clubStat.pts + 1;
      break;
  }

  return defaultStat;
}

function getClubsStat(matches = []) {
  const defaultStat = {
    mp: 0,
    w: 0,
    d: 0,
    l: 0,
    gf: 0,
    ga: 0,
    gd: 0,
    pts: 0,
  };

  return matches.reduce((acc, { team1, team2, score }) => {
    const team1Stat = acc[team1] ?? { ...defaultStat };
    const team2Stat = acc[team2] ?? { ...defaultStat };

    const [team1Score, team2Score] = score.ft;

    const clubsResult = {
      team1: matchesResultOption.DRAW,
      team2: matchesResultOption.DRAW,
    };

    if (team1Score > team2Score) {
      clubsResult.team1 = matchesResultOption.WIN;
      clubsResult.team2 = matchesResultOption.LOSE;
    } else if (team1Score < team2Score) {
      clubsResult.team1 = matchesResultOption.LOSE;
      clubsResult.team2 = matchesResultOption.WIN;
    }

    acc[team1] = calcClubStat(
      team1Stat,
      [team1Score, team2Score],
      clubsResult.team1
    );
    acc[team2] = calcClubStat(
      team2Stat,
      [team2Score, team1Score],
      clubsResult.team2
    );

    return acc;
  }, {});
}

console.log(getClubsStat(aplMatches.matches));
