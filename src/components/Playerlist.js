import Player from "./Player";

function Playerlist(props) {

  const playerList = props.parsedPlayerData.map(player => {
    return (
      <Player
        id={player.gamerTag}
        gamerTag={player.gamerTag}
        firstName={player.firstName}
        lastName={player.lastName}
        wins={player.wins}
      />
    )
  })

  return (
    <section className="PlayerList">
      <h1>Current participating players</h1>
      {/* Players will be shown here */}
      {playerList}
    </section>
  )

}

export default Playerlist;