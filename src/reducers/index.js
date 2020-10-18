import laptopsReducer from './laptopsReducer';
import { combineReducers } from 'redux';


export default combineReducers({
   laptops: laptopsReducer 
})