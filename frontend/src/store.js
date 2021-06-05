import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { cartReducer } from './reducers/cartReducer';
import {
  productListReducer,
  productPageReducer,
} from './reducers/productReducer';

const reducer = combineReducers({
  productList: productListReducer,
  productPage: productPageReducer,
  cart: cartReducer,
});

const initialState = {
  cart: { cartItems: [] },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  applyMiddleware(...middleware)
);

export default store;
