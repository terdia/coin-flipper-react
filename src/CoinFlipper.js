import React, { Component } from 'react';
import Coin from './Coin';

class CoinFlipper extends Component {
   
    static defaultProps = {
        images: [
            'https://upload.wikimedia.org/wikipedia/commons/c/cd/S_Half_Dollar_Obverse_2016.jpg',
            'http://www.pcgscoinfacts.com/UserImages/71009269r.jpg'
        ],
        types: [
            'head', 'tail'
        ],
        maxNumOfFlips: 10
    };

    constructor(props){
        super(props);
        this.state = {
            headFlipCount: 0,
            tailFlipCount: 0,
            activeIndex: 0,
            timesFliped: 0
        }
        this.handleClick = this.handleClick.bind(this);
    };

    handleClick = () => {
        let index = Math.round(Math.random() * 1);
        this.setState((state, props) => ({
            timesFliped: state.timesFliped + 1,
            activeIndex: state.activeIndex = index,
            headFlipCount: index === 0 ? state.headFlipCount + 1 : state.headFlipCount, 
            tailFlipCount: index === 1 ? state.tailFlipCount + 1 : state.tailFlipCount
        }));
    };

    render() {
    
        return (
            <div>
                <Coin 
                    img={this.props.images[this.state.activeIndex]} 
                    type={this.props.types[this.state.activeIndex]}
                    timesFlipped={this.state.timesFliped}
                    head={this.state.headFlipCount}
                    tail={this.state.tailFlipCount}
                    maxNumOfFlips={this.props.maxNumOfFlips}
                />
                <button onClick={this.handleClick} disabled={this.state.timesFliped >= 10} >Flip Coin</button>
            </div>
        );
    }

    
}

export default CoinFlipper;