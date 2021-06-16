import React, { useState } from "react";

const Field = ({ fieldSize, minesCount, status }) => {
  /* State Hooks */

  const [mines, SetMines] = useState([]);

  /* End of State Hooks */

  const RandomMine = (field_size, opened) => {
    while (true) {
      let mine = {
        x: Math.floor(Math.random() * field_size.x),
        y: Math.floor(Math.random() * field_size.y),
      };
      if (mine.x !== opened.x || mine.y !== opened.y) {
        return mine;
      }
    }
  };

  const SetMinesState = (field_size, mines_count, opened) => {
    const mines_array = [];
    for (let i = 0; i < mines_count; i++) {
      while (true) {
        const mine = RandomMine(field_size, opened);
        const index = mines_array.findIndex(
          (el) => el.x === mine.x && el.y === mine.y
        );
        if (index === -1 && (mine.x !== opened.x || mine.y !== opened.y)) {
          mines_array.push(mine);
          break;
        }
      }
    }
    SetMines(mines_array);
    console.log(mines_array);
  };

  const GenerateEmptyField = (field_size) => {
    const letters = "АБВГДЕЖЗИКЛМНОПРСТУФ".split("");
    const cell_divs = [];
    for (let i = field_size.y; i > 0; i--) {
      cell_divs.push(<div key={i}>{i}</div>);
      for (let j = 0; j < field_size.x; j++) {
        cell_divs.push(<div key={letters[j] + i} data-y={i} data-x={letters[j]}></divkey>);
      }
    }
    cell_divs.push(<div key="-А0"></div>);
    for (let i = 0; i < field_size.x; i++) {
      cell_divs.push(<div key={letters[i]}>{letters[i]}</div>);
    }
    return cell_divs;
  };

  
};

export default Field;
