import React, {Component} from 'react';
import Try from './Try';

// function getNumbers() { // 숫자 네 개를 겹치지 않고 랜덤하게 뽑는 함수
//
// }
class NumberBaseball extends Component {
    getNumbers = () => {
        const candidate = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        const array = [];
        for (let i = 0; i < 4; i += 1) {
            const chosen = candidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
            array.push(chosen);
        }
        return array;
    }

    state = {
        result: '',
        value: '',
        answer: this.getNumbers(),
        tries: [], // push 쓰면 안 돼요
    };

    onSubmitForm = (e) => {
        const {result, value, tries, answer} = this.state;
        e.preventDefault();
        if (answer.join('') === value) {
            this.setState({
                result: '홈런',
                tries: [...tries, {try: value, result: '홈런!'}]
            });
            alert('게임을 다시 시작합니다!');
            this.setState({
                value: '',
                answer: getNumbers(),
                tries: [],
            });
        } else {
            const answerArray = value.split('').map((v) => parseInt(v));
            let strike = 0;
            let ball = 0;
            if (tries.length >= 9) {
                this.setState({
                    result: `10번 넘게 틀려서 실패! 답은 ${answer.join(',')}였습니다!`,
                });
                alert('게임을 다시 시작합니다!');
                this.setState({
                    value: '',
                    answer: getNumbers(),
                    tries: [],
                });
            } else {
                for (let i = 0; i < 4; i += 1) {
                    if (answer[i] === answerArray[i]) {
                        strike += 1;
                    } else if (answer.includes(answerArray[i])) {
                        ball += 1;
                    }
                }
                this.setState({
                    tries: [...tries, {try: value, result: `${strike} 스트라이크, ${ball} 볼입니다`}],
                    value: '',
                });
            }
        }
        console.log(value);
    };

    onChangeInput = (e) => {
        console.log(this.state.answer);
        this.setState({
            value: e.target.value,
        });
    };

    render() {
        const {result, value, tries} = this.state;
        return (
            <>
                <h1>{result}</h1>
                <form onSubmit={this.onSubmitForm}>
                    <input value={value} maxLength={4} onChange={this.onChangeInput}/>
                </form>
                <div>시도: {tries.length}</div>
                <ul>
                    {tries.map((v, i) => {
                        return ( // return 생략가능
                            <Try key={`${i + 1}차 시도 :`} tryInfo={v} />
                        );
                    })}
                    <li></li>
                </ul>
            </>
        );
    }
}

export const hello = 'hello'; // import { hello }
export const bye = 'hello'; // import { hello, bye }

export default NumberBaseball; // import NumberBaseball

// const React = require('react');
// exports.hello = 'hello';
// module.exports = NumberBaseball;