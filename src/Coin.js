import React, { Component } from 'react';
import './Coin.css';

class Coin extends Component {
    
    render(){
        return(
            <div className="Coin"> 
                <h1>Let's flip a coin.</h1>
                <img className="Coin-face" src={this.props.data.imgSrc} alt={this.props.data.side}/>
            </div>
        )
    }
}

export default Coin;