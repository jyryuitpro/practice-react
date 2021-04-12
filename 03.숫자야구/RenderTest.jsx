import React, {PureComponent} from 'react';

class RenderTest extends PureComponent {
    state = {
        counter: 0,
        string: 'hello',
        number: 1,
        boolean: true,
        object: {},
        array: [],
    };

/*
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        if (this.state.counter !== nextState.counter) {
            return true;
        }
        return false;
    }
*/

    onClick = () => {
        // const array = this.state.array;
        // this.state.array.push(5);
        this.setState({
            // array: [],
            // array: array,
            array: [...this.state.array, 1],
        });
    };

    render() {
        console.log('렌더링', this.state);
        return (
            <div>
                <button onClick={this.onClick}>클릭</button>
            </div>
        );
    }
}

export default RenderTest;