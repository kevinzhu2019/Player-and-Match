const a = (o) => {
  let resultArr = [];
  for(const idx in playerList) {
    resultArr.push({
      [idx]: playerList[idx],
    });
  }
  return resultArr
}

let playerList = 
{
  "Disguised Lizard":{
    gamerTag: "Disguised Lizard",
    firstName: "Daria ",
    lastName: "Stark",
  },
  // more players below...
  "ab":{
    gamerTag: "ab",
    firstName: "a ",
    lastName: "b",
  }
}

console.log(a(playerList))