import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import rootReducer from './rootReducer';


var middleware =[thunk];


const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(...middleware),

));


export default store;