const ActionTypes = {
    LOGOUT: 'logout',
    AUTH_CHECKED: 'auth_checked',
    LOADED_FROM_LOGIN: 'loaded_from_login',
    LOGIN: 'login'
}

const actionCreator = (type, payload = null) => ({ type, payload });

export {ActionTypes, actionCreator};