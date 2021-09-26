function preparePlayerData(playerData) {
  return Object.values(playerData);
}

function addWinsToPlayers(playerDataArray, matchData) {
  return playerDataArray.map(player => {
    const currentWins = matchData.reduce((accumulator, currMatch) => {
      if(player.gamerTag === currMatch.winner) {
        return accumulator += 1;
      } else {
        return accumulator;
      }
    }, 0)
    player[wins] = currentWins;

    return player;
  });
}