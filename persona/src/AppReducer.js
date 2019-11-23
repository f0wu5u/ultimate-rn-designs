import { ActionTypes } from "./AppActions";

const initial_state = {
    auth_checked: false,
    already_logged: false,
    loaded_from_login: false
}



export default function AppReducer (state = initial_state, action){
    switch (action.type) {
        case ActionTypes.LOGOUT:
            return { ...state, already_logged: false };
        case ActionTypes.LOGIN:
            return { ...state, already_logged: true };
        case ActionTypes.LOADED_FROM_LOGIN:
            return { ...state, loaded_from_login: true };
        case ActionTypes.AUTH_CHECKED:
            return { ...state, auth_checked: true };
        default:
            return state;
    }
}