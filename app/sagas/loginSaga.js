/* Redux saga class
 * logins the user into the app
 * requires username and password.
 * un - username
 * pwd - password
 */
import { put, call, select } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { loginUser, accountverification } from 'app/api/methods/loginUser';
import * as loginActions from 'app/actions/loginActions';
//import * as accountActions from 'app/actions/accountActions';
import * as navigationActions from 'app/actions/navigationActions';

// Our worker Saga that logins the user
function* loginAsync(action) {
  yield put(loginActions.enableLoader());
  //how to call api
 
  const response = yield call(loginUser, action.username, action.password);
  console.log(response);
  if (response.Message === "success") {
    yield call(AsyncStorage.setItem, "login_token", response.customer.CustomerGuid);
    yield call(AsyncStorage.setItem, "loginuser", response.customer.Username);
    yield call(AsyncStorage.setItem, "password", action.password);
    yield call(AsyncStorage.setItem, "userid", response.customer.Id.toString());
    yield call(AsyncStorage.setItem, "email", response.customer.Email);
    yield call(AsyncStorage.setItem, "IsDoctor", response.IsDoctor.toString());
    yield put(loginActions.onLoginResponse(response));
    //yield put(accountActions.loadUserProfileRequest(action.username));
    yield call(navigationActions.navigateToHome);
    yield put(loginActions.disableLoader({}));
  }
  else {
    Alert.alert(
      'Login  Failed',
      response.message,
      [
        { text: 'OK' },
      ]
    );
    yield put(loginActions.loginFailed(response));
    yield put(loginActions.disableLoader({}));
  }
}

function* logoutAsync() {
  _storeData("login_token", "")
  _storeData("loginuser", "");
  _storeData("password", "");
  _storeData("firstname", "");
  _storeData("lastname", "");
  _storeData("isLoggedIn", 'false');
  navigationActions.navigateToLogin();
}

function* accountverificationAsync(action) {
  yield put(loginActions.enableLoader());
  //how to call api
  const response = yield call(accountverification, action.uniqueid, action.verificationdetails);
  //mock response
 
  if (response.Status === "1") {
    yield put(loginActions.onaccountverificationResponse(response));
    yield call(AsyncStorage.setItem, "login_token", response.items.uuid);
    yield call(AsyncStorage.setItem, "firstname", response.items.firstname);
    yield call(AsyncStorage.setItem, "lastname", response.items.lastname);
    yield call(AsyncStorage.setItem, "isLoggedIn", 'true');

    yield call(navigationActions.navigateToDashboard);
    yield put(loginActions.disableLoader({}));
  }
  else {
    yield put(loginActions.loginFailed(response));
    Alert.alert(
      'Fail',
      'Account Verification Failed :' + response.message,
      [
        { text: 'OK' },
      ]
    );
    yield put(loginActions.disableLoader({}));
  }
}

_storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
    return value;
  } catch (error) {
    // Error saving data
    return null;
  }
};

_retrieveData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return value
    }
  } catch (error) {
    // Error retrieving data
  }
};

export { loginAsync, logoutAsync, accountverificationAsync }
