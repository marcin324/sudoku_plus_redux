import { connect } from "react-redux";
import Tile from "../presentational/Tile";
import { updateBoard } from "../../actions";

const mapStateToProps = state => ({
  initialBoard: state.sudokuReducers.initialBoard
});

const mapDispatchToProps = dispatch => ({
  updateBoard: (value, id) => dispatch(updateBoard(value, id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tile);
