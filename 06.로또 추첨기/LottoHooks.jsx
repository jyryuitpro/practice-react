import React, {useState, useRef, useEffect, useMemo, useCallback} from 'react';
import BallFunction from "./BallFunction";

function getWinNumbers() {
    console.log('getWinNumbers');
    const candidate = Array(45).fill().map((v, i) => i + 1);
    const shuffle = [];
    while (candidate.length > 0) {
        shuffle.push(candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0]);
    }
    const bonusNumber = shuffle[shuffle.length - 1];
    const winNumbers = shuffle.slice(0, 6).sort((p, c) => p - c);
    return [...winNumbers, bonusNumber];
}

const LottoHooks = () => {
    // Hooks : 조건문 안에 절대 넣으며 안 되고, 함수나 반복문 안에도 웬만하면 넣지마세요.
    // useMemo : 복잡한 함수 결괏값(리턴값)을 기억
    const lottoNumbers = useMemo(() => getWinNumbers(), [winNumbers]);
    const [winNumbers, setWinNumbers] = useState(lottoNumbers);
    const [winBalls, setWinBalls] = useState([]);
    const [bonus, setBonus] = useState(null);
    const [redo, setRedo] = useState(false);
    // useRef : 일반 값을 기억
    const timeouts = useRef([]);

    useEffect(() => {
        // ajax
    }, []); // componentDidMount만, componentDidUpdate X

    const mounted = useRef(false);
    useEffect(() => {
        if (!mounted.current) {
            mounted.current = true;
        } else {
            // ajax
        }
    }, ['바뀌는값']); // componentDidUpdate만, componentDidMount X

    useEffect(() => {
        console.log('useEffect');
        for (let i = 0; i < winNumbers.length - 1; i++) {
            timeouts.current[i] = setTimeout(() => {
                setWinBalls((prevBalls) => [...prevBalls, winNumbers[i]]);
            }, (i + 1) * 1000);
        }
        timeouts.current[6] = setTimeout(() => {
            setBonus(winNumbers[6]);
            setRedo(true);
        }, 7000);
        return () => { // componentWillUnmount와 동일
            timeouts.current.forEach((v) => {
                clearTimeout(v);
            });
        };
    }, [timeouts.current]); // input 자리가 빈 배열이면 componentDidMount와 동일
    // input 자리에 배열에 요소가 있으면 componentDidMount랑 componentDidUpdate 둘 다 수행

    useEffect(() => {
        console.log('로또 숫자를 생성합니다.');
    }, [winNumbers]);

    // useCallback : 함수자체를 기억
    const onClickRedo = useCallback(() => {
        console.log('onClickRedo');
        console.log(winNumbers);
        setWinNumbers(getWinNumbers());
        setWinBalls([]);
        setBonus(null);
        setRedo(false);
        timeouts.current = [];
    }, [winNumbers]);

    return (
        <>
            <div>당첨 숫자</div>
            <div id="결과창">
                {winBalls.map((v) => <BallFunction key={v} number={v} />)}
            </div>
            <div>보너스</div>
            {bonus && <BallFunction number={bonus} onClick={onClickRedo}/>}
            {redo && <button onClick={onClickRedo}>한 번 더!</button>}
        </>
    );
};

export default LottoHooks;