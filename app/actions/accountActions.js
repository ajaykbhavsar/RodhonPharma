/*
 * Reducer actions related with login
 */
import * as types from './types';

export function loadUserProfileRequest(action) {
    // console.log('action');
    // console.log(action);
    return {
        type: types.LOADUSERPROFILE_REQUEST,
        action
    };
}

export function onUserProfileLoadedResponse(response) {
    // console.log('response');
    // console.log(response);
    return {
        type: types.USERPROFILELOADED_RESPONSE,
        response
    };
}

export function FailedLoadingUserProfile(response) {
    return {
        type: types.FAILEDLOADINGUSERPROFILE_RESPONSE,
        response
    };
}

export function getAccountDetail(id,usertype) {
    return {
        type: types.GETACCOUNT_REQUEST,
        id,
        usertype
    };
}

export function getAccountDetailFailed(response) {
    return {
        type: types.GETACCOUNT_FAILED,
        response
    };
}

export function ongetAccountDetailResponse(response) {
    return {
        type: types.GETACCOUNT_RESPONSE,
        response
    };
}

export function changePasswordRequest(action) {
    return {
        type: types.CHANGEPASSWORD_REQUEST,
        action
    };
}

export function onChangePasswordResponse(response) {
    return {
        type: types.CHANGEPASSWORD_RESPONSE,
        response
    };
}
export function onChangePasswordFailedResponse(response) {
    return {
        type: types.CHANGEPASSWORDFAILED_RESPONSE,
        response
    };
}