/**
 *  Redux saga class init
 */
import { takeEvery, all } from 'redux-saga/effects';
import * as types from '../actions/types';
import { loginAsync, logoutAsync, accountverificationAsync } from './loginSaga';
import { loadmyAppointmentsAsync, loadAppointmentDetailAsync, updateAppointmentAsync, addnewappointmentAsync } from './myAppointmentsSaga';
import { registerAsync } from './registerSaga';
import { forgotPasswordAsync } from './forgotPasswordSaga';
import { homeProductAsync } from './homeProductSaga';

export default function* watch() {
    yield all([takeEvery(types.LOGIN_REQUEST, loginAsync)]);
    yield all([takeEvery(types.LOGOUT_REQUEST, logoutAsync)]);
    yield all([takeEvery(types.ACCOUNTVERIFICATION_REQUEST, accountverificationAsync)]);
    yield all([takeEvery(types.MYAPPOINTMENTS_REQUEST, loadmyAppointmentsAsync)]);
    yield all([takeEvery(types.APPOINTMENTDETAIL_REQUEST, loadAppointmentDetailAsync)]);
    yield all([takeEvery(types.APPOINTMENTUPDATE_REQUEST, updateAppointmentAsync)]);
    yield all([takeEvery(types.APPOINTMENTADD_REQUEST, addnewappointmentAsync)]);
    yield all([takeEvery(types.REGISTER_REQUEST, registerAsync)]);
    yield all([takeEvery(types.FORGOTPASSWORD_REQUEST, forgotPasswordAsync)]);
    yield all([takeEvery(types.HOMEPRODUCT_REQUEST, homeProductAsync)]);
}
