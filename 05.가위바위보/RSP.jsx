import React, {Component} from "react";

// 클래스의 경우 : constructor -> render -> ref -> componentDidMount
// -> (setState/props 바뀔 때 -> shouldComponentUpdate(true) -> render -> componentDidUpdate)
// 부모가 나를 없앴을 때 -> componentWillUnmount -> 소멸

const rspCoords = {
    바위: '0',
    가위: '-142px',
    보: '-284px',
};

const scores = {
    가위: 1,
    바위: 0,
    보: -1,
};

class RSP extends Component {
    state = {
        result: '',
        imgCoord: 0,
        score: 0,
    };

    interval;

    componentDidMount() { // 컴포넌트가 첫 렌더링 된 후, 여기에 비동기 요청을 많이 해요
        this.interval = setInterval(() => {
            const {imgCooord} = this.state;
            if (imgCooord === rspCoords.바위) {
                this.setState({
                    imgCooord: rspCoords.가위,
                });
            } else if (imgCooord === rspCoords.가위) {
                this.setState({
                    imgCooord: rspCoords.보,
                });
            } else if (imgCooord === rspCoords.보) {
                this.setState({
                    imgCooord: rspCoords.바위,
                });
            }
        }, 1000);
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) { // 리렌더링이 일어날 경우

    }

    componentDidUpdate(prevProps, prevState, snapshot) { // 리렌더링 후

    }

    componentWillUnmount() { // 컴포넌트가 제거되기 직전, 비동기 요청 정리를 많이 해요
        clearInterval(this.interval);
    }

    onClickBtn = (choice) => {

    };

    render() {
        const {result, score, imgCoord} = this.state;
        return (
            <>
                <div id="computer" style={{background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg`}}></div>
                <div>
                    <button id="rock" className="btn" onClick={() => this.onClickBtn('바위')}>바위</button>
                    <button id="scissor" className="btn" onClick={() => this.onClickBtn('가위')}>가위</button>
                    <button id="paper" className="btn" onClick={() => this.onClickBtn('보')}>보</button>
                </div>
                <div>{result}</div>
                <div>현재 {score}점</div>
            </>
        );
    }
}

export default RSP;