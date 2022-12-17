/*
 * Reducer actions related with login
 */
import * as types from './types';

export function loadHomeBannerRequest() {
    return {
        type: types.LOADHOMEBANNERS_REQUEST
    };
}

 
export function onBannerLoadedResponse(response) {
    return {
        type: types.HOMEBANNERSLOADED_RESPONSE,
        response
    };
}
export function FailedLoadingBanners(response) {
    return {
        type: types.FAILEDLOADINGBANNERS_RESPONSE,
        response
    };
}
 

export function updateDeviceToken(devicetoken) {
    return {
        type: types.UPDATEDEVICETOKEN_REQUEST,
        devicetoken
    };
}
export function onupdateDeviceTokenResponse(response) {
    return {
        type: types.UPDATEDEVICETOKEN_RESPONSE,
        response
    };
}
export function onupdateDeviceTokenFailedResponse(response) {
    return {
        type: types.UPDATEDEVICETOKENFAILED_RESPONSE,
        response
    };
}