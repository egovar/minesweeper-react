import React from "react";

import "./inputs.css";

const Inputs = ({ openCell, toggleFlag }) => {
  const dispatchActions = (e) => {
    e.preventDefault();
    const open_str = document
      .getElementById("input_open")
      .value.replaceAll(" ", "");
    const flag_str = document
      .getElementById("input_flag")
      .value.replaceAll(" ", "");
    if (flag_str || open_str) {
      if (flag_str === "") {
        openCell(open_str);
      } else if (open_str === "") {
        toggleFlag(e, flag_str);
      } else {
        openCell(open_str);
        toggleFlag(e, flag_str);
      }
    }
  };
  return (
    <form className="inputs" onSubmit={(e) => dispatchActions(e)}>
      <label htmlFor="input_open">
        Введите координаты поля, которое хотите открыть
      </label>
      <input type="text" id="input_open" placeholder="Пример: а1" />
      ИЛИ
      <label htmlFor="input_flag" id="label_flag">
        Введите координаты поля, на которое хотите поставить / с которого хотите
        убрать флаг
      </label>
      <input type="text" id="input_flag" placeholder="Пример: б2" />
      <button type="submit" className="inputs__button">
        Применить
      </button>
    </form>
  );
};

export default Inputs;
