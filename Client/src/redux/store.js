import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducer from './reducer';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // Conectar nuestra app con la extension Redux Devtools del navegador
const store = createStore(
  reducer,
  composeEnhancer(applyMiddleware(thunkMiddleware)) // Sirve para hacer peticiones a una Api/servidor
);

export default store;