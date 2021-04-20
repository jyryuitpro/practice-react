import React, {memo} from 'react';

const BallFunction = memo(({number}) => {
    let background;
    if (number <= 10) {
        background = 'orange';
    } else if (number <= 20) {
        background = 'blue';
    } else if (number <= 30) {
        background = 'red';
    } else if (number <= 40) {
        background = 'gray';
    } else {
        background = 'green';
    }
    return (
        <div className="ball" style={{background}}>{number}</div>
    );
});

export default BallFunction;