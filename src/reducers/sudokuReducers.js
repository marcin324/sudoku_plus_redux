import {
  START_SUDOKU,
  SET_DIFFICULTY,
  RESTART_SUDOKU,
  SOLVE_SUDOKU,
  CHECK_SUDOKU,
  UPDATE_BOARD,
  GET_CANDIDATES,
  UNDO
} from "../actions";
import sudoku from "sudoku-umd";

const initialState = {
  initialBoard: "",
  board: "",
  pastBoard: [],
  difficulty: ""
};

const sudokuReducers = (state = initialState, action) => {
  let board;
  let pastBoard;
  switch (action.type) {
    case SET_DIFFICULTY:
      return {
        ...state,
        difficulty: action.difficulty
      };
    case START_SUDOKU:
      const level = state.difficulty;
      const newSudoku = sudoku.generate(level);
      return {
        difficulty: level,
        initialBoard: [...newSudoku],
        board: [...newSudoku],
        pastBoard: []
      };
    case UPDATE_BOARD:
      board = [...state.board];
      pastBoard = [...state.pastBoard];
      pastBoard.push([...board]);
      const tileValue = action.value;
      const correctTileValue =
        [...tileValue].length > 1
          ? [...tileValue].splice(0, 1).join("")
          : tileValue;
      board.splice(action.id, 1, correctTileValue);
      if ([...tileValue].length > 1 || correctTileValue === "0") {
        return {
          ...state
        };
      } else {
        return {
          ...state,
          board,
          pastBoard
        };
      }

    case RESTART_SUDOKU:
      return {
        ...state,
        board: state.initialBoard,
        pastBoard: []
      };
    case CHECK_SUDOKU:
      const checkSudoku = sudoku.solve(state.board);
      if (!checkSudoku) {
        alert(`There is no solution.\nImprove your sudoku.`);
      } else {
        alert(`You're on the right way!\nKeep going!`);
      }
      return {
        ...state
      };
    case SOLVE_SUDOKU:
      const solveSudoku = sudoku.solve(state.initialBoard);
      board = [...state.board];
      pastBoard = [...state.pastBoard];
      pastBoard.push([...board]);
      return {
        ...state,
        board: [...solveSudoku],
        pastBoard
      };
    case GET_CANDIDATES:
      let getCandidates = sudoku.get_candidates(state.initialBoard);
      board = [...state.board];
      pastBoard = [...state.pastBoard];
      getCandidates = getCandidates.reduce(
        (prev, curr) => [...prev, ...curr],
        []
      );
      pastBoard.push([...board]);
      return {
        ...state,
        board: getCandidates,
        pastBoard
      };
    case UNDO:
      pastBoard = [...state.pastBoard];
      board = pastBoard.pop();
      if (pastBoard.length) {
        return {
          ...state,
          board,
          pastBoard
        };
      } else {
        return {
          ...state,
          board: state.initialBoard,
          pastBoard
        };
      }
    default:
      return state;
  }
};

export default sudokuReducers;
