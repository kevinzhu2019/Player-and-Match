import MatchList from "./components/MatchList";
import Playerlist from "./components/Playerlist";
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Tourney Matches <span>Where Coding and Tournaments found their Match!</span></h1>
      <Playerlist />
      <MatchList />
    </div>
  );
}

export default App;
