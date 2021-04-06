import React, {Component} from 'react';
// const React = require('react');
// const {Component} = React;
import Try from './Try';

function getNumbers() { // 숫자 네 개를 겹치지 않고 랜덤하게 뽑는 함수

}

class NumberBaseballClass extends Component {
    state = {
        result: '',
        value: '',
        answer: getNumbers(),
        tries: [],
    };

    onSubmitForm = () => {

    };

    onChangeInput = () => {

    };

    fruits = [
        {fruit: '사과', taste: '맛있다'},
        {fruit: '바나나', taste: '맛없다'},
        {fruit: '포도', taste: '시다'},
        {fruit: '귤', taste: '시다'},
        {fruit: '감', taste: '시다'},
        {fruit: '배', taste: '시다'},
        {fruit: '밤', taste: '시다'},
    ];

    render() {
        return (
            <>
                <h1>{this.state.result}</h1>
                <form onSubmit={this.onSubmitForm}>
                    <input maxLength={4} value={this.state.value} onChange={this.onChangeInput}/>
                </form>
                <div>시도: {this.state.tries.length}</div>
                <ul>
                    {this.fruits.map((v, i) => { // 화살표 함수 return 생략가능
                        return (
                            <Try value={v} index={i}/>
                        );
                    })}
                </ul>
            </>
        );
    }
}

// export const hello = 'hello'; // import {hello}
// export const bye = 'hello'; // import {hello, bye}

// export default NumberBaseballClass; // import NumberBaseballClass

// const React = require('react');
// exports.hello = 'hello';
module.exports = NumberBaseballClass;