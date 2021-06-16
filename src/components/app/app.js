import React, { useState } from "react";

import Field from "../field/field";

const App = () => {
  /* State Hooks */

  const [fieldSize, SetFieldSize] = useState({
    x: 10,
    y: 10,
  });

  const [minesCount, SetMinesCount] = useState(10);

  const [status, SetStatus] = useState("not_started"); // not_started, started, won, died

  /* End of State Hooks */

  const SetFieldState = (difficulty) => {
    const field_size = {
      x: 10,
      y: 10,
    };
    let mines_count = 10;
    switch (difficulty) {
      case "beginner":
        field_size.x = 10;
        field_size.y = 10;
        mines_count = 10;
        break;
      case "amateur":
        field_size.x = 15;
        field_size.y = 15;
        mines_count = 40;
        break;
      case "profi":
        field_size.x = 20;
        field_size.y = 15;
        mines_count = 65;
        break;
      default:
        field_size.x = 10;
        field_size.y = 10;
        mines_count = 10;
    }
    SetFieldSize(field_size);
    SetMinesCount(mines_count);
    console.log(fieldSize, minesCount);
  };

  return (
    <Field fieldSize={fieldSize} minesCount={minesCount} status={status} />
  );
};
export default App;
