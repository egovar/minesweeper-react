import React from "react";

import "./options.css";

const Options = ({
  onChangeDifficulty: changeDifficulty,
  onRestart: restartGame,
}) => {
  return (
    <div className="options">
      <button className="options__restart" onClick={restartGame}>
        Новая игра
      </button>
      <select
        className="options__difficulty"
        defaultValue="beginner"
        onChange={(e) => changeDifficulty(e.currentTarget.value)}
      >
        <option value="beginner">Новичок</option>
        <option value="amateur">Любитель</option>
        <option value="profi">Профи</option>
      </select>
    </div>
  );
};

export default Options;
