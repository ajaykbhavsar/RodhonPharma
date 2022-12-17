import Api from 'app/api';
import ApiConstants from '../ApiConstants';

export function homeProduct(action) {
  console.log('Home product method'); 
    return Api(
        ApiConstants.HOMEPRODUCT,
        null,
        'GET',
        null
    );
}
