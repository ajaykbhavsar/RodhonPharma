/* Redux saga class
 * user into the app
 */
import { put, call } from 'redux-saga/effects';
import { Alert } from 'react-native';
import * as registerActions from 'app/actions/registerActions';
import * as loginActions from 'app/actions/loginActions';
import * as navigationActions from 'app/actions/navigationActions';
import {registerUser} from 'app/api/methods/registerUser'; 

// Our worker Saga that loads filter
 function* registerAsync(action) {
    yield put(loginActions.enableLoader());
  
    let response = yield call(registerUser,action); 
   console.log("register response saga"); 
   console.log(response); 
    if (response.Message === "success") { 
      Alert.alert(
        'Success',
        'Signup successfull',
        [
          {text: 'OK'},
        ]
      );
      yield put(registerActions.onRegisterLoadedResponse(response));   
      navigationActions.navigateToLogin(); 
      yield put(loginActions.disableLoader({}));

    } else {
        yield put(registerActions.FailedRegister(response)); 
       Alert.alert(
          'Fail',
          'Signup Failed :' + response.message,
          [
            {text: 'OK'},
          ]
        );
        yield put(loginActions.disableLoader({}));
    }
}

export { registerAsync}