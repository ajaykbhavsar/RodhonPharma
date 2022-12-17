import Api from 'app/api';
import ApiConstants from '../ApiConstants';


export function loadMyappointments(request) {
    return Api(
        ApiConstants.MYAPPOINTMENTS,
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



export function updateAppointment(action) {
    return Api(
        ApiConstants.UPDATEAPPOINTMENT + "?AppointmentId=" + action.action.appointId + "&StatusId=" + action.action.StatusId,
        null,
        'get',
        null
    );
}

export function addnewappointment(action) {

    return Api(
        ApiConstants.ADDAPPOINTMENT,
        {
            CustomerId: action.customerId,
            DoctorId: ApiConstants.DoctorId,
            SymptomId: action.symptom,
            AppointmentDateTime: action.startdate,
            TimeSlot: action.timeslot,
            Complaint: action.complaint,
            IsEmergency: action.emergencyapointment
        },
        'post',
        null
    );
}