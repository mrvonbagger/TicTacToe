import React, { Component } from 'react';
import '../App.css';
import App from '../App';


class MenuScreen extends Component {

    constructor() {
        super()
        this.state = {
          twoplayerdif: false,
          normalDif: false,
          hardDif: false,
          showMenuScreen: true,
        }
    }

    twoPlayerClick = () => {
        this.setState({
            twoplayerdif: true,
            normalDif: false,
            hardDif: false,
            showMenuScreen: false,
        })
    }
    NormalClick = () => {
        this.setState({
            twoplayerdif: false,
            normalDif: true,
            hardDif: false,
            showMenuScreen: false,
        })
    }
    HardClick = () => {
        this.setState({
            twoplayerdif: false,
            normalDif: false,
            hardDif: true,
            showMenuScreen: false,
        })
    }

    render(){
        if(!this.state.showMenuScreen) {
            return <App 
            showMenuScreen={this.state.showMenuScreen}
            twoplayerdif={this.state.twoplayerdif}
            normalDif={this.state.normalDif}
            hardDif={this.state.hardDif}
            />
          }
          
        return(

            <React.Fragment>
            <h1>Menu Screen</h1>
            <button onClick={this.twoPlayerClick}>
            Two Player
            </button>
            <button onClick={this.NormalClick}>
            Normal Difficulty
            </button>
            <button onClick={this.HardClick}>
            Hard Difficulty
            </button>
            </React.Fragment>
        )
    }
}

export default MenuScreen