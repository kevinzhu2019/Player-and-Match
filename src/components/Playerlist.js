import Player from "./Player";
import playerData from "../data/playerData";
import matchData from "../data/matchData";
import { preparePlayerData, addWinsToPlayers } from "../helpers/playerHelpers";

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