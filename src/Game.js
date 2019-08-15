import React, { Component } from 'react';
import './App.css';
import WinScreen from './components/WinScreen';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      board: Array(9).fill(null),
      player: "X",
      winner: null,
      totalMoves: 0,
      currentPlayer: null,
      difficulty: this.props.difficulty,
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
    
    //Draw if board does not have null
    if(!this.state.board.includes(null)) {
      this.setState({
        winner: "Draw",
        showWinScreen: true,
      })
    }

    for (let index = 0; index < winLines.length; index++) {

      const [a, b, c] = winLines[index];
      let board = this.state.board

      if (board[a] && board[a] === board[b] && board[a] === board[c]) { //Game won Player 1 or 2 is equal to winLines
        this.setState({
          winner: board[a],
          showWinScreen: true
        })
        break;
      }
    }
  }

  TwoPlayer(index) {
    if (!this.state.winner) {  //Can only play if winner is undetermined

      let newBoard = this.state.board //newBoard is a temporary playing field

      if (this.state.board[index] === null) { //Can only place in empty boxes
        newBoard[index] = this.state.player
        this.setState({
          board: newBoard, 
          player: this.state.player === "X" ? "O" : "X",
        })
        
        this.checkWinner()
      }
    }
  }

  getPossibleMoves(){
    let possibleMoves = []
   
    for(var i=0;i<=8;i++) {

      if(this.state.board[i] === null) {  //Get positions equal to null
        possibleMoves.push(i)
      }
    }
    return possibleMoves;
  }

  NormalDifficulty(index) {
    if (!this.state.winner) {

      let newBoard = this.state.board

      if (this.state.board[index] === null) {
        newBoard[index] = this.state.player
        this.setState({
          board: newBoard,
          player: "X",
        })

        this.checkWinner()

        //Computer chooses moves randomly
        let possibleMoves = this.getPossibleMoves()
        const randomMove = possibleMoves[Math.floor(Math.random() * possibleMoves.length)]
        newBoard[randomMove] = "O";

        this.checkWinner()
      }
    }
  }

  //Unfinished
  HardDifficulty(index) {
    if (!this.state.winner) {

      let newBoard = this.state.board

      if (this.state.board[index] === null) {
        newBoard[index] = this.state.player
        this.setState({
          board: newBoard,
          player: "X",
        })

        let possibleMoves = this.getPossibleMoves()
        const bestMove = possibleMoves[Math.floor(Math.random() * possibleMoves.length)]
       
        newBoard[bestMove] = "O";

        this.checkWinner()
      }
    }
  }

  handleClick(index) {
    if(this.state.difficulty === 'twoPlayer') {
      this.TwoPlayer(index);
    }

    if(this.state.difficulty === "normal") {
      this.NormalDifficulty(index);
    }

    if(this.state.difficulty === "hard") {
      this.HardDifficulty(index);
    }
  }

  //Builds the board and gives boxes an index
  renderBoxes() {
    return this.state.board.map(
      (box, index) =>
        <div className="box" key={index}
          onClick={() => this.handleClick(index)}>
          {box} </div>
          )
  }

  render() {
    //Passing props to winScreen if game is over
    if(this.state.showWinScreen) {
      return <WinScreen 
        winner={this.state.winner}
        difficulty={this.state.difficulty} //Passed so if player chooses rematch the difficulty stays the same
        board={this.state.board}/>
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