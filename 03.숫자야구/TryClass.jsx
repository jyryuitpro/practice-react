import React, {PureComponent} from 'react';

class TryClass extends PureComponent {
/*
    constructor(props) {
        super(props);
        // 다른 동작
        const filtered = this.props.filter(() => {

        });

        this.state = {
            result: this.props.result,
            try: this.props.try,
        };
    }
*/
    state = {
        result: this.props.result,
        try: this.props.try,
    };

    render() {
        const {tryInfo} = this.props;
        return (
            <li>
                <div>{tryInfo.try}</div>
                <div>{tryInfo.result}</div>
            </li>
        );
    }
}

export default TryClass;