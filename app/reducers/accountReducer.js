/* client Jobs Reducer
 * handles filters states in the app
 */
import createReducer from 'app/lib/createReducer';
import * as types from 'app/actions/types';

const initialState = {
};

export const accountReducer = createReducer(initialState, {

    [types.USERPROFILELOADED_RESPONSE](state,action) {
        return {
            ...state,
            userprofile:action.response
        };
    },
    
    [types.FAILEDLOADINGUSERPROFILE_RESPONSE](state) {
        return {
            ...state,
            userprofile:[]
        };
    },

    [types.GETACCOUNT_REQUEST](state) {
        return {
            ...state,
        };
    },
    [types.GETACCOUNT_RESPONSE](state,action) {
        return {
            ...state,
            accountdetail:action.response
        };
    },
    [types.LOGOUT_REQUEST](state,action) {
        return {
            ...state,
            accountdetail:null
        };
    },
    [types.GETACCOUNT_FAILED](state) {
        return {
            ...state
        };
    },

    // Change Password

    [types.CHANGEPASSWORD_RESPONSE](state,action) {
        return {
            ...state,
            changepasswordresponse:action.response
        };
    },
    [types.CHANGEPASSWORDFAILED_RESPONSE](state,action) {
        return {
            ...state,
            changepasswordresponse:[]
        };
    },
    
});