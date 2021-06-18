import React, { useState, useEffect } from "react";

const FieldCell = ({
  value,
  is_pressed,
  onPress: openCellWithStr,
  onNewGame: newGame,
  key_str,
  x,
  y,
}) => {
  useEffect(() => setPressed(is_pressed), [is_pressed]);
  const [isPressed, setPressed] = useState(false);

  const thisPress = () => {
    newGame({
      y: y,
      x: x,
    });
    openCellWithStr(key_str);
  };

  const extra_class =
    value === -1 ? " field__cell_exploded" : " field__cell_discovered";
  return (
    <div
      className={"field__cell" + (isPressed ? extra_class : "")}
      onClick={(e) => thisPress(e)}
      data-x={key_str.charAt(0)}
      data-y={key_str.substr(1)}
    >
      {isPressed && value !== -1 ? value : null}
    </div>
  );
};

export default FieldCell;
