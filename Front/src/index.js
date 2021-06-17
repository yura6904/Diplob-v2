import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {HashRouter} from 'react-router-dom'; //Поменял BrowserRouter на MemoryRouter ради билда, так как MemoryRouter работает с локальными данными
import {Provider} from 'react-redux';
import store from './redux/redux-store';

ReactDOM.render(
  <HashRouter>
    <Provider store = {store}>
      <App />
    </Provider>
  </HashRouter>,
  document.getElementById('root')
);
serviceWorker.unregister();