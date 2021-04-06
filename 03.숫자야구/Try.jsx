import React, {Component} from 'react';

class Try extends Component {
    render() {
        return (
            <li>
                <b>{this.props.value.fruit}</b> - {this.props.index}
            </li>
        );
    }
}

export default Try;