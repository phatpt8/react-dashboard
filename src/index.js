import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducers from './reducers';
import Root from 'components/root';
import Navigation from 'components/nav';
import NavLeft from 'components/nav-left';
import Loading from 'components/loading';
import MainContainer from 'components/main-container';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

render(
  <Provider store={store}>
    <Root>
      <Loading />
      <Navigation />
      <NavLeft />
      <MainContainer />
    </Root>
  </Provider>,
  document.getElementById('container')
);
