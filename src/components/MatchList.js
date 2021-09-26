import Match from "./Match";

function MatchList(props) {

  const parsedMatches = props.matchData.map(match => {
    return (
      <Match
        key = {match.matchNumber}
        players={match.players}
        winner={match.winner}
        scoreDifference={match.scoreDifference}
      />
    )
  })

  return (
    <section className="PlayerList MatchList">
      <h1>Match list</h1>
      {/* Matches will be shown here */}
      {parsedMatches}
    </section>
  )
}

export default MatchList;