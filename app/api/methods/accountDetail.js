import Api from 'app/api';
import ApiConstants from '../ApiConstants';

export  function loadUserProfile(action) {
  return Api(
      ApiConstants.USERDETAIL,
      {
        userName:action,
      },
      'post',
      null
  );
}

export function changePassword(action) {
  return Api(
    ApiConstants.CHANGEPASSWORD,
    {
      oldpassword:action.action.oldpassword,
      newpassword:action.action.newpassword
    },
    'post',
    null
);

}