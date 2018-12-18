import React, { Component } from 'react';
import '../App.css';
import App from '../App';
import MenuScreen from './MenuScreen'


class WinScreen extends Component {

    constructor() {
        super()
        this.state = {
          Rematch: false,
          showMenuScreen: false,
        }
    }

    rematchClick = () => {
        this.setState({
            Rematch: true
        })
    }
    menuClick = () => {
        this.setState({
            showMenuScreen: true,
        })
    }

    render(){
        

        if(this.state.Rematch) {
            return <App />
          }

        if(this.state.showMenuScreen) {
            return <MenuScreen />
        }
          
        return(
            <React.Fragment>
            <h1>WinScreen</h1>
            <button onClick={this.rematchClick}>
            Rematch
            </button>
            <button onClick={this.menuClick}>
            Menu
            </button>
            </React.Fragment>
        )
    }
}

export default WinScreen