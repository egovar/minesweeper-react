import React from "react";

const Options = ({ onChangeDifficulty }) => {
  return (
    <select
      className="options"
      defaultValue="beginner"
      onChange={(e) => onChangeDifficulty(e.currentTarget.value)}
    >
      <option value="beginner">Новичок</option>
      <option value="amateur">Любитель</option>
      <option value="profi">Профи</option>
    </select>
  );
};

export default Options;
