import React, { Component } from 'react'; 
import '../App.css'; 
import App from '../Game'; 

 
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
            difficulty: 'twoPlayer',
            showMenuScreen: false, 
        }) 
    } 
    NormalClick = () => { 
        this.setState({ 
            difficulty: 'normal',
            showMenuScreen: false, 
        }) 
    } 
    HardClick = () => { 
        this.setState({ 
            difficulty: 'hard', 
            showMenuScreen: false, 
        }) 
    } 
 
    render(){ 
        if(!this.state.showMenuScreen) { 
            //Passing difficulty as a prop
            return <App  
            showMenuScreen={this.state.showMenuScreen} 
            difficulty={this.state.difficulty}
            /> 
          } 
           
        return( 
 
            <React.Fragment>
                <div className="MenuContainer">

                    <h1>Tic Tac Toe</h1>

                </div>

                <div className="MenuBoardWrapper">
                    <div className="MenuBoard">
                        <div className="MenuBox" />
                        <div className="MenuBox" />
                        <div className="MenuBox" />
                        <div className="MenuBox" />
                        <div className="MenuBox" />
                        <div className="MenuBox" />
                        <div className="MenuBox" />
                        <div className="MenuBox" />
                        <div className="MenuBox" />
                    </div>
                </div>

                <div className="MenuButtonsWrapper">
                    <div className="MenuButtons">
                        <div className="button" onClick={() => this.twoPlayerClick()}>2 Player</div>
                        <div className="button" onClick={() => this.NormalClick()}>Normal Difficulty</div>
                        <div className="button" onClick={() => this.HardClick()}>Hard Difficulty</div>
                    </div>
                </div>
                
                
            </React.Fragment>
        ) 
    } 
} 
 
export default MenuScreen;