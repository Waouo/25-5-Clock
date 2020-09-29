import React from 'react';

export default class Length extends React.PureComponent {
    render() {
        const type = this.props.type
        return (
            <div id={`${type}-length-control`} className='m-4 d-inline-block'>
                <h2 id={`${type}-label`}>{type} Length</h2>
                <h3 className='text-center'>
                    <button id={`${type}-increment`} onClick={this.props.onLengthChange}><i className="fa fa-arrow-up" /></button>
                    <span id={`${type}-length`}>{this.props.length}</span>
                    <button id={`${type}-decrement`} onClick={this.props.onLengthChange}><i className="fa fa-arrow-down" /></button>
                </h3>
            </div>
        )
    }
}