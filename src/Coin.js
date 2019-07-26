import React, { Component } from 'react';
import './Coin.css';

class Coin extends Component {
   
    static defaultProps = {
        timesFlipped: 0
    };
    
    render(){
        const props = this.props;
        const remaining = props.maxNumOfFlips - props.timesFlipped;

        return(
            <div className="Coin">
                <h1>Let's flip a coin.</h1>
                <img className="Coin-face" src={props.img} alt={props.type}/>
                {(props.timesFlipped > 0) &&
                <p>
                    {`Out of ${props.timesFlipped} 
                    flip${props.timesFlipped > 1 ? 's':''} there has been ${props.head} head${props.head > 1 ? 's':''} 
                    and ${props.tail} tail${props.tail > 1 ? 's':''}. 
                    remaining ${remaining} flip${remaining > 1 ? 's':''}`}
                </p>}
            </div>
        )
    }
}

export default Coin;