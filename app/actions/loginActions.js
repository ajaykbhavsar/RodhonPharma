/*
 * Reducer actions related with login
 */
import * as types from './types';

export function requestLogin(username, password) {
    console.log("username" + username);
    return {
        type: types.LOGIN_REQUEST,
        username,
        password
        // ...obj
    };
}
export function requestLogout() {
    return {
        type: types.LOGOUT_REQUEST,
    };
}

export function loginFailed(response) {
    return {
        type: types.LOGIN_FAILED,
        response
    };
}

export function onLoginResponse(response) {
    return {
        type: types.LOGIN_RESPONSE,
        response
    };
}

export function enableLoader() {
    return {
        type: types.LOGIN_ENABLE_LOADER
    };
}

export function disableLoader() {
    return {
        type: types.LOGIN_DISABLE_LOADER
    };
}

export function requestAccountVerification(uniqueid, verificationdetails) {
    return {
        type: types.ACCOUNTVERIFICATION_REQUEST,
        uniqueid,
        verificationdetails
    };
}

export function accountverificationFailed(response) {
    return {
        type: types.ACCOUNTVERIFICATION_FAILED,
        response
    };
}

export function onaccountverificationResponse(response) {
    return {
        type: types.ACCOUNTVERIFICATION_RESPONSE,
        response
    };
}
