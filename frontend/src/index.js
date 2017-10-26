import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
// import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { Router } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';

const history = createBrowserHistory();

ReactDOM.render(
<Router history={history}>
  <App/>
</Router>
, document.getElementById('root'));
registerServiceWorker();
