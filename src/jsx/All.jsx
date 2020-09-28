import React from 'react'
import ReactDom from 'react-dom'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            breakLength: '1',
            sessionLength: '25:00',
        }
        this.onSessionChange = this.onSessionChange.bind(this)
    }

    onSessionChange(e) {
        const btn = e.target.value
        const { breakLength, sessionLength } = this.state
        let breakLengthResult, sessionLengthResult

        console.log('a');
        switch (btn) {
            case 'break-up':
                break
            case 'break-down':
                break
            case 'session-up':
                break
            case 'session-down':
                break
            default:
                break
        }

        this.setState({
            breakLength: breakLengthResult,
            sessionLength: sessionLengthResult,
        })
    }

    render() {

        return (
            <div id='app'>
                <h1 className='text-center'>25 + 5 Clock</h1>
                <div id="break-length-control" className='m-4 d-inline-block'>
                    <h2 id='break-label'>Break Length</h2>
                    <h3 className='text-center'>
                        <button id='break-increment' onClick={this.onSessionChange}><i className="fa fa-arrow-up" /></button>
                        <span id='break-length'>{this.state.breakLength}</span>
                        <button id='break-decrement' onClick={this.onSessionChange}><i class="fa fa-arrow-down" /></button>
                    </h3>
                </div>
                <div id="session-length-control" className='m-4 d-inline-block'>
                    <h2 id="session-label">Session Length</h2>
                    <h3 className='text-center'>
                        <button id='session-increment' onClick={this.onSessionChange}><i className="fa fa-arrow-up" /></button>
                        <span id='break-length'>{this.state.breakLength}</span>
                        <button id='session-decrement' onClick={this.onSessionChange}><i class="fa fa-arrow-down" /></button>
                    </h3>
                </div>
                <div id="clock" className='col mx-auto'>
                    <h2 id='timer-label' className='text-center my-1'>Session</h2>
                    <h2 id='time-left' className='text-center'>{this.state.sessionLength}</h2>
                </div>
                <div className='d-flex justify-content-center'>
                    <div id="start_stop">
                        <button><i id='start' class="fas fa-play clock-control" /></button>
                        <button><i id='stop' class="fas fa-stop clock-control" /></button>
                    </div>
                    <button><i id='reset' class="fas fa-redo clock-control" /></button>
                </div>
                <hr/>
                <footer>
                    <p className='text-center m-0' style={{color: 'red'}}>Designed and Coded by</p>
                    <p className='text-center m-0' style={{color: 'blue'}}>Shao Wei</p>
                </footer>
            </div>
        )
    }
}

ReactDom.render(<App />, document.getElementById('react-root'))
