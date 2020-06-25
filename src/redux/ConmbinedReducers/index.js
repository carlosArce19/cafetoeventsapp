import { combineReducers } from "redux";
import { eventInfo } from "./reducers/eventInfo";
import { authInfo } from "./reducers/authInfo";
import { userInfo } from "./reducers/userInfo";

export default combineReducers({
    eventInfo,
    authInfo,
    userInfo
});