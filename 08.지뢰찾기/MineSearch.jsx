import React, {useReducer, createContext, useMemo} from 'react';
import Table from "./Table";
import Form from "./Form";

export const CODE = {
    MINE: -7,
    NORMAL: -1,
    QUESTION: -2,
    FLAG: -3,
    QUESTION_MINE: -4,
    FLAG_MINE: -5,
    CLICKED_MINE: -6,
    OPENED: 0, // 0 이상이면 다 opened
};

export const TableContext = createContext({
    tableData: [],
    dispatch: () => {},
});

const initialState = {
    tableData: [],
    timer: 0,
    result: '',
};

export const START_GAME = 'START_GAME';

const reducer = (state, action) => {
    switch (action.type) {
        case START_GAME:
            return {
                ...state,
                tableData: plantMine(action.row, action.ceil, action.mine)
            };
        default:
            return state;
    }
};

const Minesearch = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const value = useMemo(() => ({tabledata: state.tableData, dispatch}), [state.tableData]);

    return (
        <TableContext.Provider value={{tableData: state.tableData, dispatch}}>
            <Form/>
            <div>{state.timer}</div>
            <Table/>
            <div>{state.result}</div>
        </TableContext.Provider>
    );
};

export default Minesearch;