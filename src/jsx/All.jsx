import React from 'react'
import ReactDom from 'react-dom'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
           
        }
       
    }
   
    render() {

        return (
            <div id='app'>
               <h1>25 + 5 Clock</h1>
            </div>
        )
    }
}

ReactDom.render(<App />, document.getElementById('react-root'))
