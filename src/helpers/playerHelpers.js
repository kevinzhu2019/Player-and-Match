export const preparePlayerData = playerData => {
  return Object.values(playerData);
}

export const addWinsToPlayers = (playerDataArray, matchData) => {
  return playerDataArray.map(player => {
    // const currentWins = matchData.reduce((accumulator, currMatch) => {
    //   if(player.gamerTag === currMatch.winner) {
    //     return accumulator += 1;
    //   } else {
    //     return accumulator;
    //   }
    // }, 0)
    let count = 0;
    for(let i = 0; i < matchData.length; i++) {
      if(matchData[i].winner === player.gamerTag) count++;
    }

    player.wins = count;

    return player;
  });
}