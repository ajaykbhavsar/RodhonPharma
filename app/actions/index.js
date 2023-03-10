// export action creators
import * as loginActions from './loginActions';
import * as dashboardActions from './dashboardActions';
import * as navigationActions from './navigationActions';
import * as accountActions from './accountActions';
import * as courseActions from './courseActions';
import * as myappointmentsActions from './myappointmentsActions';
import * as homeProductActions from './homeProductActions';


export const ActionCreators = Object.assign(
    {},
    loginActions,
    dashboardActions,
    navigationActions,
    accountActions,
    courseActions,
    myappointmentsActions,
    homeProductActions
);
