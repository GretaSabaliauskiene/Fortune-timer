import React, { Component } from 'react';
import moment, {duration} from 'moment';



export default class Countdown extends Component {
    state = {
        days:0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    };

    addZeros(value){
        value = String(value);
        while (value.length < 2 ){
            value = `0${value}`;
        }
        return value;
    }

    setCountdown() {
        const futureDate = moment(this.props.futureDate);

        const today = moment();

        const clockDuration = duration(futureDate.diff(today));

        const days = Math.floor(clockDuration.asDays());  
        const hours = clockDuration.hours();
        const minutes = clockDuration.minutes();
        const seconds = clockDuration.seconds();  

        this.setState({
            days,
            hours,
            minutes,
            seconds
        })
    }

    componentDidMount(){
        this.setCountdown();
        this.interval = setInterval(() => {
            this.setCountdown();
        }, 1000);
    }

    componentWillUnmount(){
        clearInterval(this.interval);
    }

    render() {
        return (
            <div className="countdown">
                {Object.keys(this.state).map((key,i) => (
                    <div className="countdown-segment">
                        <span className="coundown-segment-number" >
                            {this.addZeros(this.state[key])}
                        </span>
                        <span className="countdown-segment-caption" >
                            {key.toUpperCase()}
                        </span>
                    </div>
                ))}
            </div>
        )
    }
}
