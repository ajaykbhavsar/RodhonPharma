// General api to access data
import ApiConstants from './ApiConstants';
import * as navigationActions from 'app/actions/navigationActions';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NetInfo from "@react-native-community/netinfo";

// import RNFetchBlob from 'react-native-fetch-blob'
export default function api(path, params, method, token) {
  return CallApi(params, path, method).then((data) => {
    try {
      let response = JSON.parse(data);
      return response;
    } catch (e) {
      // navigationActions.navigateToLogin();
      return {};
    }
  });
}

async function CallApi(params, path, method) {
      // WARNING: For POST requests, body is set to null by browsers.
      return new Promise(function(resolve,reject){
        var data = JSON.stringify(params);

        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;
  
        xhr.addEventListener("readystatechange", function() {
          if(this.readyState === 4) {
            return resolve(this.responseText)
          }
        });
  
        xhr.open(method,ApiConstants.BASE_URL + "/v1/" + path);
        xhr.setRequestHeader("Content-Type", "application/json");
  
        xhr.send(data);
      });
      
  };


retrieveData = async (key) => {
  try {
    //environment
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return value
    }
  } catch (error) {
    // Error retrieving data
  }
};