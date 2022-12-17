/* Redux saga class
 * forgotpassword the user into the app
 * requires username and password.
 * email
 */
import { put, call, select } from 'redux-saga/effects';
import { delay } from 'redux-saga';

import { Alert } from 'react-native';
import forgotPassword from 'app/api/methods/forgotPassword';
import * as loginActions from 'app/actions/loginActions';
import * as homeProductActions from 'app/actions/homeProductActions';
import * as navigationActions from 'app/actions/navigationActions';
import Toast from 'react-native-toast-message';
import {homeProduct} from 'app/api/methods/homeProduct'; 

// Our worker Saga that logins the user
export default function* homeProductAsync(action) {
    yield put(loginActions.enableLoader());
    //how to call api
    const response = yield call(homeProduct, action);
    //mock response
    console.log('homeproduct saga');
    console.log(response);
    
    if (response.Message === "success") {
        yield put(homeProductActions.onHomeProductResponse(response.data));
        yield put(loginActions.disableLoader({}));        
        //yield call(navigationActions.navigateToLogin);
    } else {
        yield put(homeProductActions.HomeProductFailed(response));
        yield put(loginActions.disableLoader({}));
   
   
    }
}

export {homeProductAsync}
