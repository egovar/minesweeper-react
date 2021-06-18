import React from "react";

const Options = ({ onChangeDifficulty: changeDifficulty }) => {
  return (
    <select
      className="options"
      defaultValue="beginner"
      onChange={(e) => changeDifficulty(e.currentTarget.value)}
    >
      <option value="beginner">Новичок</option>
      <option value="amateur">Любитель</option>
      <option value="profi">Профи</option>
    </select>
  );
};

export default Options;
