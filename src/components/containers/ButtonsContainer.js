import { connect } from "react-redux";
import Buttons from "../presentational/Buttons";
import {
  startSudoku,
  restartSudoku,
  checkSudoku,
  solveSudoku,
  setDifficulty,
  getCandidates,
  undo
} from "../../actions";

const mapDispatchToProps = dispatch => ({
  startSudoku: () => dispatch(startSudoku()),
  restartSudoku: () => dispatch(restartSudoku()),
  checkSudoku: () => dispatch(checkSudoku()),
  solveSudoku: () => dispatch(solveSudoku()),
  setDifficulty: difficulty => dispatch(setDifficulty(difficulty)),
  getCandidates: () => dispatch(getCandidates()),
  undo: () => dispatch(undo())
});

const mapStateToProps = state => ({
  difficulty: state.difficulty
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Buttons);
