import React from "react";

const Buttons = ({
  startSudoku,
  restartSudoku,
  checkSudoku,
  solveSudoku,
  setDifficulty,
  difficulty,
  getCandidates,
  undo
}) => {
  return (
    <div className="btn_container">
      <select
        className="btn_select"
        name="difficulty"
        value={difficulty}
        onChange={e => {
          setDifficulty(e.target.value);
          startSudoku();
        }}
      >
        <option value="easy">easy</option>
        <option value="medium">medium</option>
        <option value="hard">hard</option>
        <option value="very-hard">very hard</option>
        <option value="insane">insane</option>
        <option value="inhuman">inhuman</option>
      </select>

      <button onClick={startSudoku}>New Game</button>
      <button onClick={restartSudoku}>Restart</button>
      <button onClick={checkSudoku}>Check</button>
      <button onClick={solveSudoku}>Solve</button>
      <button onClick={getCandidates}>Candidates</button>
      <button onClick={undo}>Undo</button>
    </div>
  );
};

export default Buttons;
