/* Login Reducer
 * handles login states in the app
 */
import createReducer from 'app/lib/createReducer';
import * as types from 'app/actions/types';

const initialState = {
    email:'',
};


export const forgotPasswordReducer = createReducer(initialState, {
    [types.FORGOTPASSWORD_REQUEST](state, action) {
        return {
            ...state,
            email: action.email,
        };
    },
    [types.LOGIN_LOADING_ENDED](state) {
        return { ...state };
    },
    [types.FORGOTPASSWORD_RESPONSE](state, action) {
        return {
            state
        };
    },
    [types.FORGOTPASSWORD_FAILED](state,action) {
        return {
            state
        };
    }
});

