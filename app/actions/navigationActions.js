/*
 * Reducer actions related with navigation
 */
import NavigationService from 'app/navigation/NavigationService';


export function navigateToHome(params) {
    NavigationService.navigate('Home', params);
}

export function navigateToLogin(params) {
    NavigationService.navigate('Login', params);
}

export function navigateToNoInternet(params) {
    NavigationService.navigate('NoInternet', params);
}

export function navigateToChangePassword(params) {
    NavigationService.navigate('ChangePassword', params);
}

export function navigateToProfile(params) {
    NavigationService.navigate('Profile', params);
}

export function navigateToProfileEdit(params) {
    NavigationService.navigate('ProfileEdit', params);
}

export function navigateToBookAppointment(params) {
    NavigationService.navigate('BookAppointment', params);
}

export function navigateToRegister(params) {
    NavigationService.navigate('Register', params);
}
export function navigateToForgotPassword(params) {
    NavigationService.navigate('ForgotPassword', params);
}

export function navigateToMyAppointment(params) {
    NavigationService.navigate('MyAppointment', params);
}

export function navigateToDoctorAppointment(params) {
    NavigationService.navigate('DoctorAppointment', params);
}

export function navigateToAppointmentDetail(params) {
    NavigationService.navigate('AppointmentDetail', params);
}

export function navigateToDoctorAppointmentDetail(params) {
    NavigationService.navigate('DoctorAppointmentDetail', params);
}

export function navigateToChatNow(params) {
    NavigationService.navigate('ChatNow', params);
}
export function navigateToPayment(params) {
    NavigationService.navigate('Payment', params);
}


export function navigateToPrescriptionDetails(params) {
    NavigationService.navigate('PrescriptionDetails', params);
}

export function navigateToAddPrescription(params) {
    NavigationService.navigate('AddPrescription', params);
}

export function navigateToOnlineOrder(params) {
    NavigationService.navigate('OnlineOrder', params);
}

export function navigateToOrderDetails(params) {
    NavigationService.navigate('OrderDetails', params);
}

export function navigateToProductDetails(params) {
    NavigationService.navigate('ProductDetails', params);
}

export function navigateToCartPage(params) {
    NavigationService.navigate('CartPage', params);
}

 
export function navigateToBillingShipping(params) {
    NavigationService.navigate('BillingShipping', params);
}

export function navigateToAddAddress(params) {
    NavigationService.navigate('AddAddress', params);
}

export function navigateToSuccess(params) {
    NavigationService.navigate('Success', params);
}

export function navigateToOrderHistory(params) {
    NavigationService.navigate('OrderHistory', params);
}

export function navigateToBillingShippingAddresslist(params) {
    NavigationService.navigate('BillingShippingAddresslist', params);
}

export function navigateToOrderSummary(params) {
    NavigationService.navigate('OrderSummary', params);
}




