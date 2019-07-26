import React, { Component } from 'react';
import Coin from './Coin';
import { choice } from './Helper';

class CoinFlipper extends Component {
   
    static defaultProps = {
        maxNumOfFlips: 10,
        coins: [
            { imgSrc: 'https://tinyurl.com/react-coin-heads-jpg', side: 'heads' },
            { imgSrc: 'https://tinyurl.com/react-coin-tails-jpg', side: 'tails' }
        ]
    };

    constructor(props){
        super(props);
        this.state = {
            headFlipCount: 0,
            tailFlipCount: 0,
            curCoin: null,
            timesFliped: 0
        }
        this.handleClick = this.handleClick.bind(this);
    };

    flipCoin() {
        let coin = choice(this.props.coins);
        this.setState(state => ({
            timesFliped: state.timesFliped + 1,
            curCoin: coin,
            headFlipCount: state.headFlipCount + (coin.side === "heads" ? 1 : 0), 
            tailFlipCount: state.tailFlipCount + (coin.side === "tails" ? 1 : 0)
        }));
    };

    handleClick = () => {
        this.flipCoin()    
    };

    render() {
    
        let remaining = (this.props.maxNumOfFlips - this.state.timesFliped);
        return (
            <div>
                {
                    this.state.curCoin &&
                    <Coin 
                        data={this.state.curCoin}
                    />
                }
                <button onClick={this.handleClick} disabled={this.state.timesFliped >= 10} >Flip Me!</button>
                <p>
                    {`Out of ${this.state.timesFliped} 
                    flip${this.state.timesFlipped > 1 ? 's':''} there has been 
                    ${this.state.headFlipCount} head${this.state.headFlipCount > 1 ? 's':''} 
                    and ${this.state.tailFlipCount} tail${this.state.tailFlipCount > 1 ? 's':''}. 
                    remaining ${remaining} flip${remaining > 1 ? 's':''}`}
                </p>
            </div>
        );
    }
}

export default CoinFlipper;