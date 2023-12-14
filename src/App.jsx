import { useState } from "react";
import dice from "./assets/dice.svg";


const Team = ({ team }) => <div className="p-4 border grid grid-cols-2 text-center m-2 rounded-lg">
  <p>{team[0]}</p>
  <p>{team[1]}</p>
</div>;

const App = () => {
  const [playerInput, setPlayerInput] = useState("");
  const [teams, setTeams] = useState([]);

  const createTeams = (pseudonyms) => {
    const shuffledPlayers = pseudonyms.sort(() => Math.random() - 0.5);

    const teams = [];
    for (let i = 0; i < shuffledPlayers.length; i += 2) {
      const team = [shuffledPlayers[i], shuffledPlayers[i + 1]];
      teams.push(team);
    }

    return teams;
  };

  const extractPseudonyms = (players) => {
    return players
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean)
      .map((playerInfo) => {
        const words = playerInfo.split(" ");
        return words.slice(0, words.length - 4).join(" ");
      })
      .filter(Boolean);
  };

  const generateTeams = () => {
    const pseudonyms = extractPseudonyms(playerInput);
    const generatedTeams = createTeams(pseudonyms);
    setTeams(generatedTeams);
  };

  return (
    <div className="max-w-2xl mx-auto mt-8 p-6 bg-white rounded shadow-md">
      <h1 className="text-4xl font-bold mb-4">Arena Team Maker</h1>
      <textarea
        id="playerInput"
        rows="4"
        className="w-full p-2 border border-accent rounded-lg mt-1 bg-background text-text/60 placeholder-text/30"
        value={playerInput}
        placeholder="Paste lobby chat here..."
        onChange={(e) => setPlayerInput(e.target.value)}
      ></textarea>
      <button onClick={generateTeams} className="bg-primary text-background text-lg py-2 px-4 rounded mt-4 hover:bg-secondary flex">
        Generate Teams
        <span className="ml-2">
          <img src={dice} alt="dice" className="w-6 h-6" />
        </span>
      </button>

      <div className="mt-6 grid grid-cols-2">
        {teams.map((team, index) => (
          <Team key={index} team={team} />
        ))}
      </div>
    </div>
  );
};

export default App;
