import React, { Component } from 'react';
import { connect } from 'react-redux';
import { tick, setTextColor } from '../actions';

class Clock extends Component {

    componentDidMount(){
        setInterval(this.props.tick, 1000);
    }

    render(){
        const { time, date, setTextColor} = this.props;
        const style = {};
        style.div = {color: this.props.textColor};
        style.button = {
            color: this.props.textColor
        }
        return(
            <div style={style.div}>
                <h1 >{time}</h1>
                <h2 >{date}</h2>
                <button onClick={() => setTextColor('red')}>Red</button> 
                <button onClick={() => setTextColor('green')}>Green</button> 
                <button onClick={() => setTextColor('Yellow')}>Yellow</button>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        date: state.clock.date,
        time: state.clock.time,
        textColor: state.theme.textColor
    }
}

export default connect(mapStateToProps, {
     tick: tick,
     setTextColor: setTextColor 
})(Clock);