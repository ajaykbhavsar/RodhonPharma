

/* 
 * combines all th existing reducers
 */
import * as loadingReducer from './loadingReducer';
import * as loginReducer from './loginReducer';
import * as forgotPasswordReducer from './forgotPasswordReducer';
import * as accountReducer from './accountReducer';
import * as myappointmentsReducer from './myappointmentsReducer';
import * as homeProductReducer from './homeProductReducer';



export default Object.assign(loadingReducer, loginReducer, forgotPasswordReducer, accountReducer, myappointmentsReducer, homeProductReducer);
