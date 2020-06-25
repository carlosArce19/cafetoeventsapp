import { createAction } from 'redux-actions';

/*Actions Names*/
export const SET_EVENT_INFO = 'SET_EVENT_INFO';
export const SET_AUTH_INFO = 'SET_AUTH_INFO';
export const SET_USER_INFO = 'SET_USER_INFO';

/*Actions*/
export const setEventInfo = createAction(SET_EVENT_INFO);
export const setAuthInfo = createAction(SET_AUTH_INFO);
export const setUserInfo = createAction(SET_USER_INFO);