import Api from 'app/api';
import ApiConstants from '../ApiConstants';

export function saveAppointment(request) {
    return Api(
        ApiConstants.APPOINTMENTDETAIL,
        request,
        'post',
        null
    );
}


export function loadAppointmentDetail(request) {
    return Api(
        ApiConstants.APPOINTMENTDETAIL + "?Id=" + request,
        null,
        'get',
        null
    );
}

export function loadSymptoms() {
    return Api(
        ApiConstants.GETALLSYMPTOMS,
        null,
        'get',
        null
    );
}

export function fetch(path, data, method) {
    console.log(path,data,method);
    return Api(
        path,
        data,
        method,
        null
    );
}