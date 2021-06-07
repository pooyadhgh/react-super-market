import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { cartReducer } from './reducers/cartReducer';
import {
  productListReducer,
  productPageReducer,
} from './reducers/productReducer';

const cartItemsFromLocalStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : [];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = combineReducers({
  productList: productListReducer,
  productPage: productPageReducer,
  cart: cartReducer,
});

const initialState = {
  cart: { cartItems: cartItemsFromLocalStorage },
};

const middleware = [thunk];

const enhancer = composeEnhancers(applyMiddleware(...middleware));

const store = createStore(reducer, initialState, enhancer);

export default store;
