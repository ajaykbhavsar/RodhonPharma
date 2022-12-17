/* Login Reducer
 * handles login states in the app
 */
import createReducer from 'app/lib/createReducer';
import * as types from 'app/actions/types';

const initialState = {
    email:'',
};


export const homeProductReducer = createReducer(initialState, {
    
    [types.HOMEPRODUCT_RESPONSE](state,action) {      
        return {
            ...state,           
           homeProduct:action.response
        };         
    },
    [types.HOMEPRODUCT_FAILED](state,action) {
        return {
            ...state,
            homeProduct:null
        };
    },
});

