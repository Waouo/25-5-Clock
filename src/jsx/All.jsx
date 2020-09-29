import React from 'react';
import ReactDom from 'react-dom';
import ClockButtons from './components/ClockButtons.jsx'
import FooterAndAudio from './components/FooterAndAudio.jsx'
import Length from './components/Length.jsx'
import Title from './components/Title.jsx'


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            breakLength: 1,
            sessionLength: 25,
            timer: 1500,
            clockType: 'session',
            clockStatus: 'stopped',
            intervalID: '',
        }
        this.onLengthChange = this.onLengthChange.bind(this)
        this.onTimerControl = this.onTimerControl.bind(this)
        this.onReset = this.onReset.bind(this)
        this.clockify = this.clockify.bind(this)
    }

    onLengthChange(e) {
        const btn = e.currentTarget.id
        const { breakLength, sessionLength, clockStatus } = this.state
        let breakLengthRes = breakLength
        let sessionLengthRes = sessionLength

        if (clockStatus === 'running') return;

        switch (btn) {
            case 'break-increment':
                if (breakLength < 60) breakLengthRes = breakLength + 1
                else break
                break
            case 'break-decrement':
                if (breakLength > 1) breakLengthRes = breakLength - 1
                else break
                break
            case 'session-increment':
                if (sessionLength < 60) sessionLengthRes = sessionLength + 1
                else break
                break
            case 'session-decrement':
                if (sessionLength > 1) sessionLengthRes = sessionLength - 1
                else break
                break
            default:
                break
        }

        this.setState({
            breakLength: breakLengthRes,
            sessionLength: sessionLengthRes,
            timer: sessionLengthRes * 60,
        })
    }

    onTimerControl() {
        const { clockStatus, intervalID } = this.state

        if (clockStatus === 'stopped') {
            this.setState({ clockStatus: 'running' })
            this.beingCountDown('running')
        } else if (clockStatus === 'running') {
            clearInterval(intervalID)
            this.setState({
                clockStatus: 'stopped',
                intervalID: '',
            })
        }
    }

    beingCountDown() {
        this.setState(() => ({
            intervalID: setInterval(() => {
                this.timerDec()
                this.phaseControl()
            }, 1000)
        }))
    }

    timerDec() {
        this.setState(state => ({ timer: state.timer - 1 }))
    }

    phaseControl() {
        const { timer, clockType, breakLength, sessionLength } = this.state

        if (timer <= 0) {
            this.buzzer()
            if (clockType === 'session') {
                this.setState({
                    clockType: 'break',
                    timer: breakLength * 60
                })
            } else {
                this.setState({
                    clockType: 'session',
                    timer: sessionLength * 60
                })
            }
        }
    }

    buzzer() {
        const audio = document.querySelector('audio')
        audio.play()
    }

    clockify() {
        const { timer } = this.state
        let minutes = Math.floor(timer / 60)
        let seconds = timer - minutes * 60

        seconds = seconds < 10 ? '0' + seconds : seconds
        minutes = minutes < 10 ? '0' + minutes : minutes

        return minutes + ':' + seconds
    }


    onReset() {
        const sessionLength = this.state.sessionLength

        clearInterval(this.state.intervalID)

        this.setState({
            timer: sessionLength * 60,
            clockType: 'session',
            clockStatus: 'stopped',
            intervalID: '',
        })
    }
    render() {
        let timeStyle
        if (this.state.timer <= 60) {
            timeStyle = { color: 'red' }
        } else {
            timeStyle = { color: 'white' }
        }
        return (
            <div id='app'>
                <Title />
                <Length type={'break'} length={this.state.breakLength} onLengthChange={this.onLengthChange} />
                <Length type={'session'} length={this.state.sessionLength} onLengthChange={this.onLengthChange} />
                <div id="clock" className='col mx-auto'>
                    <h2 id='timer-label' className='text-center my-1'>{this.state.clockType}</h2>
                    <h2 id='time-left' className='text-center' style={timeStyle}>{this.clockify()}</h2>
                </div>
                <ClockButtons onTimerControl={this.onTimerControl} onReset={this.onReset} />
                <FooterAndAudio />
            </div>
        )
    }
}



ReactDom.render(<App />, document.getElementById('react-root'))
