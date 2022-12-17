import Api from 'app/api';
import ApiConstants from '../ApiConstants';

export function loginUser(username, password) {
  return Api(
    ApiConstants.LOGIN,
    {
      UsernameOrEmail: username,
      Password: password
    },
    'post',
    null
  );
}


export function RegisterUser(request) {
  return Api(
    ApiConstants.REGISTER,
    request,
    'post',
    null
  );
}

export function accountverification(uniqueid, verificationdetails) {
  var send_otp = verificationdetails.vone + "" + verificationdetails.vtwo + "" + verificationdetails.vthree + "" + verificationdetails.vfour;
  return Api(
    ApiConstants.ACCOUNTVERIFICATIONPATH,
    {
      uniqueid: uniqueid,
      otp: send_otp
    },
    'post',
    null
  );
}
