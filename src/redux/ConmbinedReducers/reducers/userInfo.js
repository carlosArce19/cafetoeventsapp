import { SET_USER_INFO } from "../../Actions/actions";

export const userInfo = (state = {}, { type, payload }) => {
    switch (type) {
        case SET_USER_INFO:
            return payload;
        default:
            return state;
    }
};