import React, { useState } from "react";

import Field from "../field/field";
import Options from "../options/options";

const App = () => {
  /* State Hooks */

  const [difficulty, SetDifficulty] = useState("beginner");

  const [status, SetStatus] = useState("not_started"); // not_started, started, won, died

  const [fieldData, SetFieldData] = useState({
    x: 10,
    y: 10,
    mines_count: 10,
  });

  /* End of State Hooks */

  const setField = (difficulty) => {
    switch (difficulty) {
      case "amateur":
        SetFieldData({
          x: 15,
          y: 15,
          mines_count: 40,
        });
        break;
      case "profi":
        SetFieldData({
          x: 20,
          y: 15,
          mines_count: 65,
        });
        break;
      default:
        SetFieldData({
          x: 10,
          y: 10,
        });
    }
  };

  const NewDifficulty = (new_difficulty) => {
    SetStatus("not_started");
    SetDifficulty(new_difficulty);
    setField(new_difficulty);
  };

  const StartGame = () => {
    SetStatus("started");
  };

  return (
    <main className="app">
      <Field
        field_data={fieldData}
        difficulty={difficulty}
        status={status}
        onStartGame={StartGame}
      />
      <Options onChangeDifficulty={NewDifficulty} />
    </main>
  );
};
export default App;
