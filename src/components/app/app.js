import React, { useState, useEffect } from "react";

import Field from "../field/field";
import Options from "../options/options";

const App = () => {
  /* State Hooks */

  useEffect(() => {
    console.log("app restarted");
  });

  const [difficulty, setDifficulty] = useState("beginner");

  const [status, setStatus] = useState("not_started");

  /* End of State Hooks */

  const changeDifficulty = (new_difficulty) => {
    setStatus("not_started");
    setDifficulty(new_difficulty);
  };

  const startGame = () => {
    setStatus("started");
    // callback();
  };

  const loseGame = () => {
    setStatus("lost");
  };

  const winGame = () => {
    setStatus("won");
  };

  const restartGame = () => {
    setStatus("not_started");
  };

  return (
    <main className="app">
      <Field
        difficulty={difficulty}
        status={status}
        onStart={startGame}
        onWin={winGame}
        onLose={loseGame}
        onRestart={restartGame}
      />
      <Options onChangeDifficulty={changeDifficulty} onRestart={restartGame} />
    </main>
  );
};
export default App;
