export const START_SUDOKU = "START_SUDOKU";
export const SET_DIFFICULTY = "SET_DIFFICULTY";
export const RESTART_SUDOKU = "RESTART_SUDOKU";
export const SOLVE_SUDOKU = "SOLVE_SUDOKU";
export const CHECK_SUDOKU = "CHECK_SUDOKU";
export const UPDATE_BOARD = "UPDATE_BOARD";
export const GET_CANDIDATES = "GET_CANDIDATES";
export const UNDO = "UNDO";

export const startSudoku = () => ({
  type: START_SUDOKU
});

export const setDifficulty = difficulty => ({
  type: SET_DIFFICULTY,
  difficulty
});

export const restartSudoku = () => ({
  type: RESTART_SUDOKU
});

export const solveSudoku = () => ({
  type: SOLVE_SUDOKU
});

export const checkSudoku = () => ({
  type: CHECK_SUDOKU
});

export const updateBoard = (value, id) => ({
  type: UPDATE_BOARD,
  value,
  id
});

export const getCandidates = () => ({
  type: GET_CANDIDATES
});

export const undo = () => ({
  type: UNDO
});
