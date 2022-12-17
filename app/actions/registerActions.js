/*
 * Reducer actions related with login
 */
import * as types from './types';

export function requestRegister(action) {
    return {
        type: types.REGISTER_REQUEST,
        action, 
    }; 
}

export function onRegisterLoadedResponse(response) {
    
    return {
        type: types.REGISTER_RESPONSE,
        response
    };
}
export function FailedRegister(response) {
    return {
        type: types.REGISTER_FAILED,
        response
    };
}
 