import React from 'react';
import Clock from './Clock';
import CountdownForm from './CountdownForm';

class Countdown extends React.Component {

    render() {
        const {count} = this.state;

        return (
            <div>
                <Clock timeInSeconds={count}/>
                <CountdownForm onSetCountdownTime={this.handleCountdown.bind(this)}/>
            </div>
        );
    }
}

export default Countdown;