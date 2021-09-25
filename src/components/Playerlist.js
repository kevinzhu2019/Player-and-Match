import Player from "./Player";

function Playerlist() {
  return (
    <section className="PlayerList">
      <h1>Current participating players</h1>
      {/* Players will be shown here */}
      <Player />
    </section>
  )

}

export default Playerlist;