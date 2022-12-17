/* Login Reducer
 * handles login states in the app
 */
import createReducer from 'app/lib/createReducer';
import * as types from 'app/actions/types';

const initialState = {
    isLoggedIn: false,
    ErrorMessage: '',
    id: -1,
    username: '',
    password: ''
};

export const loginReducer = createReducer(initialState, {
    [types.LOGIN_REQUEST](state, action) {
        return {
            ...state,
            username: action.username,
            password: action.password
        };
    },
    [types.LOGIN_LOADING_ENDED](state) {
        return { ...state };
    },
    [types.LOGIN_RESPONSE](state, action) {
        return {
            ...state,
            customer: action.response.customer,
            IsDoctor: action.response.IsDoctor,
            loginUserId: action.response.customer.Id,
            uuid: action.response.customer.CustomerGuid,
            login_token: action.response.customer.CustomerGuid,
            isLoggedIn: true
        };
    },
    [types.LOGIN_FAILED](state, action) {
        return {
            ...state,
            ErrorMessage: "Incorrect username or password. Please try again.",
            id: null,
            login_token: null,
            isLoggedIn: false
        };
    },
    [types.ACCOUNTVERIFICATION_RESPONSE](state, action) {
        return {
            ...state,
            id: action.response.id,
            uuid: action.response.uuid,
            login_token: action.response.uuid,
            isLoggedIn: true,
            firstname: action.response.firstname,
            lastname: action.response.lastname,
            mobileno: action.response.mobileno,
            email: action.response.email,
            userdetail: action.response
        };
    },
    [types.ACCOUNTVERIFICATION_FAILED](state, action) {
        return {
            ...state,
            ErrorMessage: "Account Verification Failed. Please Try Again.",
            id: null,
            login_token: null,
            isLoggedIn: false
        };
    }
});
