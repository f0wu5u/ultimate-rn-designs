import { DashboardActionTypes } from "./actions";
import { ActionTypes } from "../../AppActions";

const initial_state = {
    loading: true,
    error_occured: false,
    data: null
}

export default function DashboardReducer(state = initial_state, action){
    switch (action.type) {
        case DashboardActionTypes.LOAD_DATA:
            return { ...state, error_occured: false, loading : true };
        case DashboardActionTypes.DATA_LOADED:
            return { ...state, loading: false, data : action.payload };
        case DashboardActionTypes.DATA_LOAD_FAILED:
            return { ...state, loading : false, error_occured : true };

        case ActionTypes.LOADED_FROM_LOGIN:
            return {...state, loading: false}
        case ActionTypes.LOGOUT:
            return initial_state;
        default:
            return state;
    }
}