import React from "react";
import Tile from "../containers/TileContainer";

const Board = ({ board }) => {
  const sudokuBoard = [...board];
  return (
    <div className="Board">
      {sudokuBoard.map((tile, id) => (
        <Tile key={id} id={id} tile={tile}></Tile>
      ))}
    </div>
  );
};

export default Board;
