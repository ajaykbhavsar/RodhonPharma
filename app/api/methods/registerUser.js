import Api from 'app/api';
import ApiConstants from '../ApiConstants';

export  function registerUser(action) {

  // console.log('register method');
  // console.log(action.action.firstname);
    return Api(
      ApiConstants.REGISTERPATH,
        {
          // we are taking full name for input how would we pass first name last name?
          // No field for company in API
          FirstName: action.action.firstname,
          LastName:action.action.lastname,
          Email: action.action.email,
          Phone: action.action.mobileno,
          Username:action.action.email,
          Password:action.action.password,
          ConfirmPassword:action.action.confirmpasword,
          Gender:'',
          DateOfBirthDay:'',
          DateOfBirthMonth:'',
          DateOfBirthYear:'',
          Deleted:false

        },
        'POST',
        null
    );
}

 

 
 

 

 
