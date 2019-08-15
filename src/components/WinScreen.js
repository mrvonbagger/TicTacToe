import React, { Component } from 'react'; 
import '../App.css'; 
import App from '../Game'; 
import MenuScreen from './MenuScreen' 
 
 
class WinScreen extends Component { 
 
    constructor() { 
        super() 
        this.state = { 
          Rematch: false, 
          showMenuScreen: false, 
        } 
    } 

    //Builds board for winScreen
    renderBoxes() {
        return this.props.board.map(
            (box, index) =>
            <div className="box" key={index}>
            {box} </div>
            )
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
            return <App 
            difficulty={this.props.difficulty} /> 
          } 
 
        if(this.state.showMenuScreen) { 
            return <MenuScreen /> 
        } 
           
        return( 
            <div className="MenuContainer">
                <div className="BoardContainer">
                    <h1>Winner: {this.props.winner}</h1> 

                    <div className="board">
                        {this.renderBoxes()}
                    </div> 
                </div> 
                
                <div className="MenuButtons">
                    <div className="button" onClick={() => this.rematchClick()}>Rematch</div>
                    <div className="button" onClick={() => this.menuClick()}>Menu</div>
                </div>
            </div>
        ) 
    } 
} 
 
export default WinScreen;