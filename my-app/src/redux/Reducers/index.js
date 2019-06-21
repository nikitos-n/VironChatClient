import { combineReducers } from 'redux';
import reducerShow from './showingUsers';
import reducerHide from './hiddingUsers';

export const rootReducer = combineReducers({
    reducerShow, 
    reducerHide
});