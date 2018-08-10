import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import rootReducer from './reducers';

import { createBrowserHistory } from 'history';
import { applyMiddleware, compose, createStore } from 'redux'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import { ConnectedRouter } from 'connected-react-router'

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const history = createBrowserHistory()
// const store = createStore(rootReducer);

const store = createStore(
  connectRouter(history)(rootReducer), // new root reducer with router state
  // initialState,
  {},
  compose(
    applyMiddleware(
      routerMiddleware(history), // for dispatching history actions
      // ... other middlewares ...
    ),
  ),
)

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
