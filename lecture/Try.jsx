import React, {Component} from 'react';

class Try extends Component {
    render() {
        return (
            <li>
                <b>{this.value.fruit}</b> - {this.index.i}
                <div>컨텐츠</div>
            </li>
        );
    }
}

export default Try;