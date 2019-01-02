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
            <div className="MenuContainer">
                <h1>WinScreen</h1> 

                <div className="buttons">
                        <div className="button" onClick={() => this.rematchClick()}>Rematch</div>
                        <div className="button" onClick={() => this.menuClick()}>Menu</div>
                </div>
            </div> 
        ) 
    } 
} 
 
export default WinScreen;