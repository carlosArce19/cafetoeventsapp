import { createStore } from 'redux';
import reducer from '../ConmbinedReducers';

//Store variable
export const store = createStore(reducer);