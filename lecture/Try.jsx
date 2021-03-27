// import React from 'react';
import React, {PureComponent, memo, useState} from 'react';

/*
class Try extends PureComponent {
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
*/

/*
const Try = memo(({tryInfo}) => {
    // props는 직접 바꾸지 말고, state로 만들어서 바꾼다.
    const [result, setResult] = useState(tryInfo.result);

    const onClick = () => {
        setResult('1');
    };

    return (
        <li>
            <div>{tryInfo.try}</div>
            <div onClick={onClick}>{tryInfo.result}</div>
        </li>
    );
});
*/

// const Try = ({tryInfo}) => {
//     return (
//         <li>
//             <div>{tryInfo.try}</div>
//             <div>{tryInfo.result}</div>
//         </li>
//     );
// };

const Try = (props) => {
    return (
        <li>
            <div>{props.tryInfo.try}</div>
            <div>{props.tryInfo.result}</div>
        </li>
    );
};

// class Try extends Component {
//     render() {
//         const {tryInfo} = this.props;
//         return (
//             <li>
//                 <div>{tryInfo.try}</div>
//                 <div>{tryInfo.result}</div>
//             </li>
//         );
//     }
// }

export default Try;