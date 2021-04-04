// import React from 'react';
// import ReactDom from 'react-dom';
const React = require('react');
const ReactDom = require('react-dom');

// import NumberBaseballClass from './NumberBaseballClass';
const NumberBaseballClass = require('./NumberBaseballClass');
// const NumberBaseballHooks = require('./NumberBaseballHooks');

ReactDom.render(<NumberBaseballClass/>, document.querySelector('#root'));