import React, {Component} from 'react';

// 클래스의 경우 -> constructor -> render -> ref -> componentDidMount
// setState/props 바뀔때 -> shouldComponentUpdate(true) -> render -> componentDidUpdate
// 부모가 나를 없앴을 때 -> componentWillUnmount -> 소멸
class RSPClass extends Component {
    state = {
        result: '',
        imgCoord: 0,
        score: 0,
    };

    componentDidMount() { // 컴포넌트가 첫 렌더링된 후

    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return true;
    }

    componentDidUpdate(prevProps, prevState, snapshot) { // 리렌더링 후

    }

    componentWillUnmount() { // 컴포넌트가 제거되기 직전

    }

    render() {
        const {result, imgCoord, score} = this.state;
        return (
            <>
                <div id="computer" style={{background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord} 0`}}></div>
                <div>
                    <button id="rock" className="btn" onClick={() => onClickBtn('바위')}>바위</button>
                    <button id="scissor" className="btn" onClick={() => onClickBtn('가위')}>가위</button>
                    <button id="paper" className="btn" onClick={() => onClickBtn('보')}>보</button>
                </div>
                <div>{result}</div>
                <div>현재 {score}점</div>
            </>
        );
    }
}

export default RSPClass;