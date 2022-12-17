/*
 * Reducer actions related with login
 */
import * as types from './types';

export function loadMyappointmentsRequest(action) {
    return {
        type: types.MYAPPOINTMENTS_REQUEST,
        action
    };
}

export function onMyappointmentsLoadedResponse(response) {

    return {
        type: types.MYAPPOINTMENTS_RESPONSE,
        response
    };
}

export function FailedLoadingMyAppointments(response) {
    return {
        type: types.MYAPPOINTMENTS_FAILED,
        response
    };
}


export function getAppointmentDetailRequest(id) {
     return {
        type: types.APPOINTMENTDETAIL_REQUEST,
        id
    };
}

export function getAppointmentDetailFailed(response) {
    return {
        type: types.APPOINTMENTDETAIL_FAILED,
        response
    };
}

export function ongetApointmentDetailResponse(response) {
    return {
        type: types.APPOINTMENTDETAIL_RESPONSE,
        response
    };
}

export function updateAppointmentRequest(action) {
    console.log("updateAppointmentRequest");


    return {
        type: types.APPOINTMENTUPDATE_REQUEST,
        action
    };
}

export function onUpdateAppointmentResponse(response) {
    return {
        type: types.APPOINTMENTUPDATE_RESPONSE,
        response
    };
}
export function onupdateAppointmentFailedResponse(response) {
    return {
        type: types.APPOINTMENTUPDATE_FAILED,
        response
    };
}
export function requestAddnewappointment(action) {

    console.log('registe raction');
    console.log(action);

    return {
        type: types.APPOINTMENTADD_REQUEST,
        action,
    };
}