import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {toast} from 'react-toastify';
import App from './App';
import store from './store/index';

import './index.css';

toast.configure({
  autoClose: 3000,
  draggable: false,
  position: 'top-right',
  hideProgressBar: false,
  newestOnTop: true,
  closeOnClick: true,
  rtl: false,
  pauseOnVisibilityChange: true,
  pauseOnHover: true
});

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById('root')
);
