/*
 * Reducer actions related with login
 */
import * as types from './types';

export function requestForgotPassword(email) {
   console.log('forgot action');
   console.log(email);
    return {
        type: types.FORGOTPASSWORD_REQUEST,
        email
    };
}

export function forgotPasswordFailed(response) {
    return {
        type: types.FORGOTPASSWORD_FAILED,
        response
    };
}

export function onForgotPasswordResponse(response) {
    return {
        type: types.FORGOTPASSWORD_RESPONSE,
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
