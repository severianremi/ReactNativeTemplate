/**
 * Created by saionara1 on 6/21/17.
 */
import * as actions from "../actions/action-types";

const initialState = {
    isLoggedIn: false,
    token: '',
    loginError: {},
    authorizationId: '',
    username: '',
    password: ''
};
export default function loginReducer(state = initialState, action = {}) {
    switch (action.type) {
        case actions.LOGIN_ERROR:
            console.log('Catch error');
            console.log(action);
            return {
                ...state,
                isLoggedIn: false,
                progress: false,
                loginError: action.error,
                username: '',
                password: ''
            };
        case actions.LOGIN_SUCCESS: {
            return {
                ...state,
                progress: false,
                isLoggedIn: true,
                token: action.token.token,
                authorizationId: action.token.id,
                username: action.username,
                password: action.password
            };
        }
        case actions.LOGOUT_SUCCESS: {
            console.warn('Logout')
            return {
                ...state,
                progress: false,
                isLoggedIn: false,
                token: '',
                authorizationId: '',
                username: '',
                password: ''
            };
        }
        case actions.LOGOUT_ERROR: {
            return {
                ...state,
                isLoggedIn: true,
                progress: false,
                loginError: action.error
            };
        }
        default:
            return state;
    }
}