import React from 'react';
import ReactDom from 'react-dom';
import App from './components/wrappers/App';

import 'bootstrap/dist/css/bootstrap.css';
import './assets/style/index.css';

ReactDom.render(
    <App/>,
    document.getElementById('root')
);