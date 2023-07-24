import { productReducer } from '@/reducers/Product';
import { legacy_createStore as createStore, combineReducers } from 'redux'
const rootReducer = combineReducers({
    products: productReducer
})

const store = createStore(rootReducer);

export default store;

