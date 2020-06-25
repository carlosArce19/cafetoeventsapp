import { SET_EVENT_INFO } from "../../Actions/actions";

export const eventInfo = (state = {}, { type, payload }) => {
    switch (type) {
        case SET_EVENT_INFO:
            return payload;
        default:
            return state;
    }
};