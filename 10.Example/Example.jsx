const React = require('react');
const {Component} = React;

class Example extends Component {
    state = {
        text: 'Hello, webpack',
    };

    render() {
        return (
            <>
                <h1>{this.state.text}</h1>
            </>
        );
    }
}

module.exports = Example;