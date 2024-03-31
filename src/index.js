import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import store from './redux/store';
import { Provider } from 'react-redux';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { loadTasks } from './redux/actions';

//configuring the local storage in order to fetch the tasks
const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
store.dispatch(loadTasks(savedTasks));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
