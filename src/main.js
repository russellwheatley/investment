import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import reduxThunk from 'redux-thunk';
import App from './containers/app';
import Homepage from './containers/homepage';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
  <Router history={browserHistory}>
      <Route path="/" component={App}>
      <IndexRoute component={Homepage}/>

    </Route>
  </Router>

  </Provider>
  , document.getElementById('root'));
