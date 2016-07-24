import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from './reducers';
import reduxThunk from 'redux-thunk';

export default (initialState = {}, history = {}) => {
  const middleware = [
    routerMiddleware(history),
    reduxThunk
  ];

  const enhancers = [];
  if (__DEBUG__) {
    const devToolsExtension = window.devToolsExtension;
    if (typeof devToolsExtension === 'function') {
      enhancers.push(devToolsExtension());
    }
  }

  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(...middleware),
      ...enhancers
    )
  );

  if (module.hot) {
    module.hot.accept();
  }

  return store;
};
