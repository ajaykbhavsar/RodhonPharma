/* client Jobs Reducer
 * handles filters states in the app
 */
import createReducer from 'app/lib/createReducer';
import * as types from 'app/actions/types';

const initialState = {
};

export const myappointmentsReducer = createReducer(initialState, {

    [types.MYAPPOINTMENTS_RESPONSE](state, action) {
        // console.log('action.response');
        // console.log(action.response);

        return {
            ...state,
            appointmentresponse: action.response
        };
    },

    [types.MYAPPOINTMENTS_FAILED](state) {
        return {
            ...state,
            appointmentresponse: []
        };
    },

    [types.APPOINTMENTDETAIL_REQUEST](state) {
        return {
            ...state,
        };
    },
    [types.APPOINTMENTDETAIL_RESPONSE](state, action) {
        return {
            ...state,
            appointmentdetail: action.response
        };
    },
    [types.APPOINTMENTDETAIL_FAILED](state) {
        return {
            ...state
        };
    },

    // [types.LOGOUT_REQUEST](state, action) {
    //     return {
    //         ...state,
    //         accountdetail: null
    //     };
    // },
    // [types.GETACCOUNT_FAILED](state) {
    //     return {
    //         ...state
    //     };
    // },

    // // Change Password

    // [types.CHANGEPASSWORD_RESPONSE](state, action) {
    //     return {
    //         ...state,
    //         changepasswordresponse: action.response
    //     };
    // },
    // [types.CHANGEPASSWORDFAILED_RESPONSE](state, action) {
    //     return {
    //         ...state,
    //         changepasswordresponse: []
    //     };
    // },

});