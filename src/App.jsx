import { useState } from "react";
import dice from "./assets/dice.svg";



const App = () => {
  const [playerInput, setPlayerInput] = useState("");
  const [teams, setTeams] = useState([]);
  const [active, setActive] = useState(true);

  const createTeams = (pseudonyms) => {
    const shuffledPlayers = pseudonyms.sort(() => Math.random() - 0.5);

    const teams = [];
    for (let i = 0; i < shuffledPlayers.length; i += 2) {
      const team = [shuffledPlayers[i], shuffledPlayers[i + 1]];
      teams.push(team);
    }
    return teams;
  };

  const generateTeams = () => {
    if (!active) return;
    setActive(false);
    setTeams([]);
    const pseudonyms = playerInput.split("\n").filter((player) => !player.includes(":")).filter((player) => player.includes("#")).map((player) => player.split("#")[0].trim()).filter(Boolean);
    const generatedTeams = createTeams(pseudonyms);

    const delayBetweenTeams = 1500;

    generatedTeams.forEach((team, index) => {
      setTimeout(() => {
        setTeams((teams) => [...teams, team]);
      }, index * delayBetweenTeams);
    }
    );
    setTimeout(() => {
      setActive(true);
    }, generatedTeams.length * delayBetweenTeams);
  };

  return (
    <>
      <main className="max-w-2xl mx-auto mt-8 p-6 bg-white rounded">
        <h1 className="text-4xl font-bold mt-8 mb-4">Arena Team Maker</h1>
        <textarea
          id="playerInput"
          rows="4"
          className="w-full p-2 border border-accent rounded-lg mt-1 bg-background text-text/60 placeholder-text/30"
          value={playerInput}
          placeholder="Paste lobby chat here..."
          onChange={(e) => setPlayerInput(e.target.value)}
        ></textarea>
        <button onClick={generateTeams} className="bg-primary text-background text-lg py-2 px-4 rounded mt-4 hover:bg-secondary flex">
          <span className="my-auto">Generate Teams</span>
          <span className="ml-2">
            <img src={dice} alt="dice" className="w-12 h-10" />
          </span>
        </button>

        <div className="mt-6 grid grid-cols-1 space-y-8">
          {teams.map((team, index) => (
            <div className="grid grid-cols-2 text-center" key={index}>
              <p className={`border p-4 rounded-l-lg  bg-primary/10 animate-slideL delay-100`}>{team[0]}</p>
              <p className="border p-4 rounded-r-lg bg-primary/10 animate-slideR">{team[1]}</p>
            </div >
          ))}
        </div>
      </main>
      <footer className="fixed left-1/2 transform -translate-x-1/2 bottom-12 opacity-20 mx-auto -z-10">© 2023 - tprat - All rights reserved.</footer>
    </>
  );
};

export default App;
