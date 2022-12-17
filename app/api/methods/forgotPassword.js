import Api from 'app/api';
import ApiConstants from '../ApiConstants';

export default function forgotPassword(email) {

  return Api(
    ApiConstants.FORGOTPASSWORD,
    {
      Email: email,
      // action: 'member_reset_password', // Can keep this in some kind of constants file,
      // webservice_key: ApiConstants.WEBSERVICE_KEY // Not sure what is this
    },
    'POST',
    null
  );
}
