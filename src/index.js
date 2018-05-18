import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './app/App';
import registerServiceWorker from './registerServiceWorker';
import { initialize } from './app/firebase';

initialize();

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
