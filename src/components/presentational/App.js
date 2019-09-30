import React, { Component } from "react";
import BoardContainer from "../containers/BoardContainer";
import ButtonsContainer from "../containers/ButtonsContainer";
import { startSudoku, setDifficulty } from "../../actions";
import store from "../../store";
import "./App.css";

class App extends Component {
  componentDidMount() {
    store.dispatch(setDifficulty("easy"));
    store.dispatch(startSudoku());
  }

  render() {
    return (
      <div className="App">
        <h1 className="App_title">Sudoku</h1>
        <ButtonsContainer></ButtonsContainer>
        <BoardContainer></BoardContainer>
      </div>
    );
  }
}

export default App;
