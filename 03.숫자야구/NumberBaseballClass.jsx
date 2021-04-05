// import React, {Component} from 'react';
const React = require('react');
const {Component} = React;

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

    render() {
        return (
            <>
                <h1>{this.state.result}</h1>
                <form onSubmit={this.onSubmitForm}>
                    <input maxLength={4} value={this.state.value} onChange={this.onChangeInput}/>
                </form>
                <div>시도: {this.state.tries.length}</div>
                <ul>
                    {[
                        ['사과', '맛있다'],
                        ['바나나', '맛없다'],
                        ['포도', '시다'],
                        ['귤', '시다'],
                        ['감', '시다'],
                        ['배', '시다'],
                        ['밤', '시다']
                    ].map((v) => {
                        return (
                            <li key={v[0]}><b>{v[0]}</b> - {v[1]}</li>
                        );
                    })}
                    {[
                        {fruit: '사과', taste: '맛있다'},
                        {fruit: '바나나', taste: '맛없다'},
                        {fruit: '포도', taste: '시다'},
                        {fruit: '귤', taste: '시다'},
                        {fruit: '감', taste: '시다'},
                        {fruit: '배', taste: '시다'},
                        {fruit: '밤', taste: '시다'},
                    ].map((v) => { // 화살표 함수 return 생략가능
                        return (
                            <li key={v.fruit}><b>{v.fruit}</b> - {v.taste}</li>
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