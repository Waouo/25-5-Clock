import React from 'react';

export default class ClockButtons extends React.PureComponent {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className='d-flex justify-content-center'>
                <button onClick={this.props.onTimerControl}>
                    <i id='start' className="fas fa-play clock-control pr-0 mr-0" />
                    <i id='stop' className="fas fa-stop clock-control pl-0 ml-0" />
                </button>
                <button onClick={this.props.onReset}><i id='reset' className="fas fa-redo clock-control" /></button>
            </div>
        )
    }
}