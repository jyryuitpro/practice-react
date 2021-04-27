import React, {useState, useCallback} from 'react';

const Form = () => {
    const [row, setRow] = useState(10);
    const [cell, setCell] = useState(10);
    const [mine, setMine] = useState(20);

    const onChageRow = useCallback((e) => {
        setRow(e.target.value);
    }, []);

    const onChageCell = useCallback((e) => {
        setCell(e.target.value);
    }, []);

    const onChageMine = useCallback((e) => {
        setMine(e.target.value);
    }, []);

    const onClickBtn = useCallback(() => {

    }, []);

    return (
        <div>
            <input type="number" placeholder="세로" value={row} onChange={onChageRow}/>
            <input type="number" placeholder="가로" value={cell} onChange={onChageCell}/>
            <input type="number" placeholder="지뢰" value={mine} onChange={onChageMine}/>
            <button onClick={onClickBtn}>시작</button>
        </div>
    );
};

export default Form;