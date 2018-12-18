import React, { Component } from 'react';
import './App.css';
import WinScreen from "./components/WinScreen"
import MenuScreen from './components/MenuScreen';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      board: Array(9).fill(null),
      player: "X",
      winner: null,
      showWinScreen: false,
      showMenuScreen: this.props.showMenuScreen,
      twoplayerdif: this.props.twoplayerdif,
      normalDif: true,
      hardDif: this.props.hardDif,
    }
  }

  checkWinner() {
 
    let winLines =
      [
        ["0", "1", '2'],
        ["3", "4", '5'],
        ["6", "7", '8'],
        ["0", "3", '6'],
        ["1", "4", '7'],
        ["2", "5", '8'],
        ["0", "4", '8'],
        ["2", "4", '6'],
      ]
    this.checkMatch(winLines)
  }

  checkMatch(winLines) {
    for (let index = 0; index < winLines.length; index++) {
      const [a, b, c] = winLines[index];
      let board = this.state.board
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        this.setState({
          winner: this.state.player,
          showWinScreen: true
        })
        this.reset()
      }
    }
  }

  TwoPlayer(index) {
    if (this.state.player && !this.state.winner) {
      let newBoard = this.state.board
      if (this.state.board[index] === null) {
        newBoard[index] = this.state.player
        this.setState({
          board: newBoard,
          player: this.state.player === "X" ? "O" : "X"
        })
        this.checkWinner()
      }
    }
  }

  NormalDifficulty(index) {
    if (this.state.player && !this.state.winner) {
      let newBoard = this.state.board
      if (this.state.board[index] === null) {
        newBoard[index] = this.state.player
        this.setState({
          board: newBoard,
          player: this.state.player === "X" ? "O" : "X"
        })
        this.checkWinner()
      }
    }
  }

  HardDifficulty(index) {

  }

  handleClick(index) {
 
    this.setState({
      player: this.state.player === "X" ? "O" :"X"
    })
    console.log(this.state.twoplayerdif)
    if(this.state.twoplayerdif) {
      this.TwoPlayer(index);
    }
    if(this.state.normalDif) {
      this.NormalDifficulty(index);
    }
    if(this.state.hardDif) {

    }
  }

  renderBoxes() {

    return this.state.board.map(
      (box, index) =>
        <div className="box" key={index}
          onClick={() => this.handleClick(index)}>
          {box} </div>
    )
  }
  
  reset() {
    this.setState({
      player: this.state.player === "X" ? "O" :"X",
      winner: null,
      board: Array(9).fill(null)
    })
  }

  render() {
    
    if(this.state.showMenuScreen ) {
      return <MenuScreen />
    }

    if(this.state.showWinScreen) {
      return <WinScreen />
    }

    return (
      <div className="container">
        <h1>Tic Tac Toe</h1>
        
        <div className="board">
          {this.renderBoxes()}
        </div> 

      </div>
    );
  }
}

export default App;