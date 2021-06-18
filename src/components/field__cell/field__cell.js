import React, { useState, useEffect } from "react";

import "./field__cell.css";

const FieldCell = ({
  value,
  is_pressed,
  is_flagged,
  onRightClick: toggleFlag,
  onPress: openCellWithStr,
  onNewGame: newGame,
  key_str,
  x,
  y,
}) => {
  const [isPressed, setPressed] = useState(false);
  const [isFlagged, setFlagged] = useState(false);

  useEffect(() => {
    setPressed(is_pressed);
    setFlagged(is_flagged);
  }, [is_pressed, is_flagged]);

  const thisPress = () => {
    newGame({
      y: y,
      x: x,
    });
    openCellWithStr(key_str);
  };

  const extra_class_opened =
    value === -1 ? " field__cell_exploded" : " field__cell_discovered";
  return (
    <div
      className={
        "field__cell" +
        (isPressed
          ? extra_class_opened
          : isFlagged
          ? " field__cell_flagged"
          : "")
      }
      onClick={thisPress}
      onContextMenu={(e) => toggleFlag(e, y, x)}
      data-x={key_str.charAt(0)}
      data-y={key_str.substr(1)}
    >
      {isPressed && value !== -1 ? value : null}
    </div>
  );
};

export default FieldCell;
