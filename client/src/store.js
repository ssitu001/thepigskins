import { createStore, applyMiddleware } from 'redux';
import mainReducer from './Reducers/reducer';
import ReduxPromise from 'redux-promise';


//http://redux.js.org/docs/advanced/AsyncFlow.html
const store = applyMiddleware(ReduxPromise)(createStore)(mainReducer); 
// const store = createStore(mainReducer);
// createStore(mainReducer);
// console.log("store", store)

export default store;