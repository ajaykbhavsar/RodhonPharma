/* Redux saga class
 */
import { put, call, select } from 'redux-saga/effects';
import { Alert } from 'react-native';
import * as loginActions from 'app/actions/loginActions';
import * as accountActions from 'app/actions/accountActions';
import * as myappointmentsActions from 'app/actions/myappointmentsActions';

import { loadMyappointments, loadAppointmentDetail, updateAppointment, addnewappointment } from 'app/api/methods/myAppointments';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as navigationActions from 'app/actions/navigationActions';

// Our worker Saga that loads filter

function* loadmyAppointmentsAsync(action) {
    yield put(loginActions.enableLoader());


    const response = yield call(loadMyappointments, action.action);
    if (response.Message === "Success") {

        yield put(myappointmentsActions.onMyappointmentsLoadedResponse(response.data));

        //console.log(response.RecordList);
        yield put(loginActions.disableLoader({}));
    }
    else {
        yield put(myappointmentsActions.FailedLoadingMyAppointments(response));
        yield put(loginActions.disableLoader({}));
    }

}

function* loadAppointmentDetailAsync(action) {
    yield put(loginActions.enableLoader());

    const response = yield call(loadAppointmentDetail, action.id);
    // console.log(response); return false;
    if (response.Message === "Success") {

        yield put(myappointmentsActions.ongetApointmentDetailResponse(response));

        //console.log(response.RecordList);
        yield put(loginActions.disableLoader({}));
    }
    else {
        yield put(myappointmentsActions.getAppointmentDetailFailed(response));
        yield put(loginActions.disableLoader({}));
    }

}


function* updateAppointmentAsync(action) {
    yield put(loginActions.enableLoader());
    const response = yield call(updateAppointment, action);
    // console.log(response); return false;

    if (response.Message === "Success") {
        navigationActions.navigateToMyAppointment();

        yield put(myappointmentsActions.ongetApointmentDetailResponse(response));

        //console.log(response.RecordList);
        yield put(loginActions.disableLoader({}));
    }
    else {
        yield put(myappointmentsActions.getAppointmentDetailFailed(response));
        yield put(loginActions.disableLoader({}));
    }

}

function* addnewappointmentAsync(action) {
    yield put(loginActions.enableLoader());

    const response = yield call(addnewappointment, action.action);
    if (response.Message === "Success") {

        navigationActions.navigateToMyAppointment();

        // yield put(myappointmentsActions.ongetApointmentDetailResponse(response));

        //console.log(response.RecordList);
        yield put(loginActions.disableLoader({}));
    }
    else {
        yield put(myappointmentsActions.getAppointmentDetailFailed(response));
        yield put(loginActions.disableLoader({}));
    }

}
export { loadmyAppointmentsAsync, loadAppointmentDetailAsync, updateAppointmentAsync, addnewappointmentAsync }