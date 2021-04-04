const React = require('react');
const ReactDom = require('react-dom');

// const WordRelayClass = require('./WordRelayClass');
const WordRelayHooks = require('./WordRelayHooks');

ReactDom.render(<WordRelayHooks/>, document.querySelector('#root'));