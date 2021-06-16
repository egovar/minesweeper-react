import React, { useState, useEffect } from "react";

import "./field.css";

const Field = ({ field_data, difficulty, status, onStartGame }) => {
  const letters = "АБВГДЕЖЗИКЛМНОПРСТУФ".split("");

  /* State Hooks and Variables*/

  let mines_array = [];

  let field_matrix = [];

  let field_divs = [];

  /* End of State Hooks and Variables */

  /* Functions with Setters */

  const RandomMine = (field_data, opened) => {
    while (true) {
      let mine = {
        x: Math.floor(Math.random() * field_data.x),
        y: Math.floor(Math.random() * field_data.y),
      };
      if (mine.x !== opened.x || mine.y !== opened.y) {
        return mine;
      }
    }
  };

  const setMines = (field_data, opened) => {
    mines_array = [];
    for (let i = 0; i < field_data.mines_count; i++) {
      while (true) {
        const mine = RandomMine(field_data, opened);
        const index = mines_array.findIndex(
          (el) => el.x === mine.x && el.y === mine.y
        );
        if (index === -1 && (mine.x !== opened.x || mine.y !== opened.y)) {
          mines_array.push(mine);
          break;
        }
      }
    }
    console.log(mines_array);
  };

  /* End of Functions with Setters */

  /* Generation Functions */

  const GenerateFieldDivs = (field_size) => {
    field_divs = [];
    field_divs.push(<div key="-А0"></div>);
    for (let i = 0; i < field_size.x; i++) {
      field_divs.push(<div key={letters[i]}>{letters[i]}</div>);
    }
    for (let i = 1; i <= field_size.y; i++) {
      field_divs.push(<div key={i}>{i}</div>);
      for (let j = 0; j < field_size.x; j++) {
        field_divs.push(
          <div
            className={"field__cell"}
            key={letters[j] + i}
            data-y={i}
            data-x={letters[j]}
          ></div>
        );
      }
    }
    return field_divs;
  };

  const SetMine = (x, y) => {
    field_matrix[x][y] = -1;
    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        if (
          (i !== 0 || j !== 0) &&
          x + i < field_data.x &&
          x + i >= 0 &&
          y + j < field_data.y &&
          y + j >= 0 &&
          field_matrix[x + i][y + j] !== -1
        ) {
          field_matrix[x + i][y + j] += 1;
        }
      }
    }
  };

  const GenerateFieldMatrix = (field, mines, opened) => {
    field_matrix = [];
    for (let i = 0; i < field.y; i++) {
      field_matrix.push([]);
      for (let j = 0; j < field.y; j++) {
        field_matrix[i].push(0);
      }
    }

    mines.forEach((mine) => {
      SetMine(mine.x, mine.y);
    });

    console.log(field_matrix);
  };

  const NewGame = (e) => {
    const opened_div = e.target;
    if (
      opened_div.classList.contains("field__cell") &&
      status === "not_started"
    ) {
      const opened = {
        x: opened_div.dataset.x,
        y: opened_div.dataset.y,
      };
      onStartGame();
      setMines(field_data, opened);
      GenerateFieldMatrix(field_data, mines_array, opened);
    }
  };

  /* End of Generation Functions */

  GenerateFieldDivs(field_data);

  return (
    <div className={"field field_" + difficulty} onClick={(e) => NewGame(e)}>
      {field_divs}
    </div>
  );
};

export default Field;
