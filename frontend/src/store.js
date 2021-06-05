import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {
  productListReducer,
  productPageReducer,
} from './reducers/productReducer';

const reducer = combineReducers({
  productList: productListReducer,
  productPage: productPageReducer,
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  applyMiddleware(...middleware)
);

export default store;
