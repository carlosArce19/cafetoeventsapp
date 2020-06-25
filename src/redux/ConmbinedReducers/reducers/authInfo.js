import { SET_AUTH_INFO } from "../../Actions/actions";

export const authInfo = (state = { idToken: null, isLogin: false }, { type, payload }) => {
    switch (type) {
        case SET_AUTH_INFO:
            return payload;
        default:
            return state;
    }
};