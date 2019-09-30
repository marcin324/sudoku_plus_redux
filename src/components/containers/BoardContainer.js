import { connect } from "react-redux";
import Board from "../presentational/Board";

const mapStateToProps = state => ({
  board: state.sudokuReducers.board
});

export default connect(mapStateToProps)(Board);
