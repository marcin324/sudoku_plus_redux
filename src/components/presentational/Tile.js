import React from "react";

const Tile = ({ id, tile, initialBoard, updateBoard }) => {

  let tileClassName;

  if (tile.length > 6) {
    tileClassName = "tileSmall";
  } else if (tile.length > 3) {
    tileClassName = "tileMedium";
  } else {
    tileClassName = "tileLarge";
  }

  return (
    <div className="Tile">
      <input
        className={tileClassName}
        type="number"
        min="1"
        max="9"
        disabled={initialBoard[id] !== "." ? true : false}
        value={tile}
        onChange={e => updateBoard(e.target.value, id)}
      />
    </div>
  );
};

export default Tile;
