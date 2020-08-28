import React from 'react';

class CountdownForm extends React.Component {
    onSubmit(event) {
        event.preventDefault();
        const strSeconds = this.refs.seconds.value;
        if(strSeconds.match(/[0-9]/)) {
          this.refs.seconds.value = '';
          this.props.onSetCountdownTime(parseInt(strSeconds, 10));
        }
    }

    render() {
        return (
            <div>
                <form ref="form" onSubmit={this.onSubmit.bind(this)} className="countdown-form">
                    <input type="text" ref="seconds" placeholder="Enter time in seconds"/>
                    <input type="submit" className="button success expanded" value="Start Countdown"/>
                </form>
            </div>
        );
    }
}

export default CountdownForm;