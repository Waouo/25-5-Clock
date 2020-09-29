import React from 'react';

export default class FooterAndAudio extends React.PureComponent {
    render() {
        return (
            <footer>
                <hr />
                <p className='text-center m-0' style={{ color: 'red' }}>Designed and Coded by</p>
                <p className='text-center m-0' style={{ color: 'blue' }}>Shao Wei</p>
                <audio id="beep" preload="auto" src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"></audio>
            </footer>
        )
    }

}