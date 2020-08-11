import React, { Component } from 'react'
import Clock from './containers/Clock--container/Clock';

export default class ToggleTest extends Component {
    state = {
        on: false,
    }

    toggle = () => {
        this.setState({
            on: !this.state.on
        })
    }
    render() {
        return (
            <div>
                {this.state.on && <Clock/>}
                <button onClick={this.toggle}>Show</button>
            </div>
        )
    }
}
