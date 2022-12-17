/*
 * Reducer actions related with login
 */
import * as types from './types';

export function requestHomeProduct() {
   console.log('home action');
  
    return {
        type: types.HOMEPRODUCT_REQUEST,
       
    };
}

export function HomeProductFailed(response) {
    return {
        type: types.HOMEPRODUCT_FAILED,
        response
    };
}

export function onHomeProductResponse(response) {
    return {
        type: types.HOMEPRODUCT_RESPONSE,
        response
    };
} 

 