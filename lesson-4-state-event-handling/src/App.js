import { useState } from "react";
import "./App.css";
import AddPlayer from "./components/AddPlayer";
import Player from "./components/Player";

const VALID_NUMBER_PLAYER = 5;
const initialState = [
  {
    id: 1,
    name: "Cristian Ronaldo",
    position: "ST",
    age: 38,
    rate: 10,
    avatar: "images/ronaldo.jpeg",
  },
  {
    id: 2,
    name: "Van Persi",
    position: "ST",
    age: 41,
    rate: 9,
    avatar: "images/ronaldo.jpeg",
  },
  {
    id: 3,
    name: "B. Leno",
    position: "GK",
    age: 20,
    rate: 8,
    avatar: "images/ronaldo.jpeg",
  },
  {
    id: 4,
    name: "T. Henry",
    position: "ST",
    rate: 100,
    age: 20,
    avatar: "images/ronaldo.jpeg",
  },
];
function App() {
  const [players, setPlayers] = useState([]);

  const onAddPlayerHandler = (playerInfo) => {
    playerInfo = {
      ...playerInfo,
      id: players.length + 1,
      avatar: "images/ronaldo.jpeg",
    };
    const newState = [...players, playerInfo];
    setPlayers(newState);
  };

  const onFilterPlayer = () => {
    const filtedState = players.filter(
      (player) => player.rate >= VALID_NUMBER_PLAYER
    );
    setPlayers(filtedState);
  };

  const onDeletePlayerHandler = (id) => {
    const newState = players.filter((player) => player.id !== id);
    setPlayers(newState);
  };

  const playList = players.map((player, index) => (
    <Player
      key={index}
      player={player}
      onDeletePlayer={onDeletePlayerHandler}
    />
  ));
  return (
    <div className="App">
      <h1>Football manager</h1>
      <button onClick={onAddPlayerHandler} className="btn">
        + Player
      </button>
      <button
        onClick={onFilterPlayer}
        className="btn"
        style={{
          marginTop: "16px",
        }}
      >
        Filter player
      </button>

      {/* Form */}
      <AddPlayer onAddPlayer={onAddPlayerHandler} />
      <div className="players__container">{playList}</div>
    </div>
  );
}

export default App;
//Component Tree
// Desctructering: object, array
// Method array: map, filter, reduce, some, every
