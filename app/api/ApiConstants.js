/* App config for apis
 */
const ApiConstants = {
    BASE_URL: 'https://www.mypharmaphysician.com/api/',
    LOGIN: 'Customer/NewLogin',
    REGISTER: "Customer/Register",
    FORGOTPASSWORD: "Customer/PasswordRecovery",
    LANGUAGE: 'language',
    USERDETAIL: 'api/User/UserDetail',
    SITEURL: 'https://www.mypharmaphysician.com',
    AppleAppID: '',
    GooglePackageName: 'com.unitypublication.unitypublication',
    
    // Imagepath
    COURSEIMAGEPATH: 'userfiles/courses/main/',
    BOOKIMAGEPATH: 'userfiles/books/main/',
    EPISODEIMAGEPATH: 'userfiles/episodes/main/',
    EPISODEVIDEOPATH: 'userfiles/episodes/video/',




    // apis call
    MYAPPOINTMENTS: 'Appointment/SearchAppointment',
    APPOINTMENTDETAIL: 'Appointment/AppointmentById',
    GETALLSYMPTOMS: 'Appointment/GetAllSymptoms',
    UPDATEAPPOINTMENT: 'Appointment/UpdateAppointmentStatus',
    ADDAPPOINTMENT: 'Appointment/SaveAppointment',

    ACCOUNTVERIFICATIONPATH: 'authentication/varifyotp',
    FORGOTPASSWORD: 'Customer/PasswordRecovery',
    REGISTERPATH: 'Customer/Register',
    HOMEPRODUCT: 'Shopping/GetHomePageProduct',
    SEARCHPRODUCT: 'Shopping/SearchProduct',
    GETPRODUCTBYID: "Shopping/GetProductById",
    SAVECOMPLAINT:'Appointment/Complaint',


    BILLINGADDRESS:"Checkout/BillingAddress",
    SELECTSHIPPINGADDRESS:"Checkout/SelectShippingAddress",
    CARTDETAILS:"Shopping/GetCartDetails",
    ADDCART:"Shopping/AddProductSimple",
    ORDERTOTAL:"Shopping/OrderTotals",
    DELETECARTITEM:"Shopping/DeleteCartItem",
    CARTTOTAL:"Shopping/OrderTotals",
    CONFIRMORDER:"Checkout/ConfirmOrder",
    ORDERSUMMARY:"Shopping/CartSummary",


    DoctorId: 1,
    // Update before build
    BUILDNO: "b01",
    VERSION: "0.0.1"
};
export default ApiConstants;