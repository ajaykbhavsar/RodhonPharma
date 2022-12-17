/* Redux saga class
 */
import { put, call, select } from 'redux-saga/effects';
import { Alert } from 'react-native';
import * as loginActions from 'app/actions/loginActions';
import * as accountActions from 'app/actions/accountActions';
import {loadUserProfile,changePassword} from 'app/api/methods/accountDetail';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as navigationActions from 'app/actions/navigationActions';

// Our worker Saga that loads filter

function* loaduserProfileAsync(action) {
  yield put(loginActions.enableLoader());
  //how to call api
  const response = yield call(loadUserProfile,action.action);
  
  if (response.Status === "1") {
      _storeData("user_name",response.RecordList[0].Name);
      _storeData("user_role",response.RecordList[0].Role);
      yield put(accountActions.onUserProfileLoadedResponse(response.RecordList[0]));
    
      //console.log(response.RecordList);
      yield put(loginActions.disableLoader({}));
  } else {
      yield put(accountActions.FailedLoadingUserProfile(response));
      yield put(loginActions.disableLoader({}));
  }
  
}

_storeData = async (key,value) => {
  try {
    await AsyncStorage.setItem(key, value);
    return value;
  } catch (error) {
    // Error saving data
    return null;
  }
};

// Change Password
function* changePasswordAsync(action) {
  yield put(loginActions.enableLoader());
  //how to call api
  const response = yield call(changePassword,action);
  //console.log(response);
  if (response.Status === "1") {
      Alert.alert(
          'Success',
          'Change Password Successfully.',
          [
            {text: 'OK'},
          ]
        );

      navigationActions.navigateToSetting();
      yield put(accountActions.onChangePasswordResponse(response));
      yield put(loginActions.disableLoader({}));
      //console.log(response);
  } else {
      Alert.alert(
          'Fail',
          'Change Password Failed :' + response.Message,
          [
            {text: 'OK'},
          ]
        );
      
      navigationActions.navigateToChangePassword();
      yield put(accountActions.onChangePasswordFailedResponse(response));
      yield put(loginActions.disableLoader({}));
  }
  
}

export { loaduserProfileAsync,changePasswordAsync }