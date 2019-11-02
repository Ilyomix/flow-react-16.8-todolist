// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Main';
import * as serviceWorker from './serviceWorker';
import 'semantic-ui-css/semantic.min.css';

// eslint-disable-next-line react/jsx-filename-extension
ReactDOM.render(<Main />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();