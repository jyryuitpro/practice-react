import React from 'react';
import ReactDom from 'react-dom';
import {hot} from 'react-hot-loader/root';

// import NumberBaseball from './NumberBaseball';
// import NumberBaseball from './RenderTest';
import ResponseCheck from './ResponseCheck';

const Hot = hot(ResponseCheck);

ReactDom.render(<Hot />, document.querySelector('#root'));