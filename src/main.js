import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware} from 'redux';
import {Router, Route, browserHistory} from 'react-router';
import multi from 'redux-multi';
import reducers from './reducers';

//containers
import Investment from './containers/investment';
import Homepage from './containers/homepage';

//redux-multi to allow more than one action call
const createStoreWithMiddleware = applyMiddleware(multi)(createStore);
const store = createStoreWithMiddleware(reducers);

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Homepage}/>
      <Route path="/investment" component={Investment} />
    </Router>
  </Provider>
  , document.getElementById('root'));
