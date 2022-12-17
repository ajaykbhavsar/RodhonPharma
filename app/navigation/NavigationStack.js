import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
 
import Home from 'app/screens/Home';
import NoInternet from '../screens/NoInternet';
import Login from 'app/screens/Login';
import AuthLoadingScreen from 'app/screens/Login/AuthLoading'; 
import Profile from 'app/screens/Profile';
import ProfileEdit from 'app/screens/ProfileEdit';
import ChangePassword from 'app/screens/ChangePassword';
import BookAppointment from 'app/screens/BookAppointment';
import Register from 'app/screens/Register';
import ForgotPassword from 'app/screens/ForgotPassword';
import MyAppointment from 'app/screens/MyAppointment';
import DoctorAppointment from 'app/screens/DoctorAppointment';
import AppointmentDetail from 'app/screens/AppointmentDetail';
import DoctorAppointmentDetail from 'app/screens/DoctorAppointmentDetail';
import ChatNow from 'app/screens/ChatNow';
import Payment from 'app/screens/Payment';
import PrescriptionDetails from 'app/screens/PrescriptionDetails';
import AddPrescription  from 'app/screens/AddPrescription';
import OnlineOrder  from 'app/screens/OnlineOrder';
import OrderDetails  from 'app/screens/OrderDetails';
import OrderHistory  from 'app/screens/OrderHistory';
import ProductDetails  from 'app/screens/ProductDetails';
import CartPage  from 'app/screens/CartPage';
import BillingShipping  from 'app/screens/BillingShipping';
import AddAddress  from 'app/screens/AddAddress';
import Success  from 'app/screens/Success';
import BillingShippingAddresslist  from 'app/screens/BillingShippingAddresslist';
import OrderSummary  from 'app/screens/OrderSummary';
 





import { HeaderComponent } from 'app/components';

const AuthStack = createStackNavigator({         
    Home: {
        screen: Home,
        navigationOptions: ({ navigation }) =>
        {
            return {
                header: () => <HeaderComponent iname={"ios-menu"} 
                title={" "}   navigation={navigation} back={'false'} sidemenu={true}/>,
                gestureEnabled: false
            }
        }
    },
});

const RNApp = createStackNavigator(
    {   
       
        Home: {
            screen: Home,
            navigationOptions: ({ navigation }) =>
            {
                return {
                    header: () => <HeaderComponent iname={"ios-menu"} 
                    title={" "}   navigation={navigation} back={'false'} sidemenu={true}/>,
                    gestureEnabled: false
                }
            }
        },
        Login: {
            screen: Login,
            navigationOptions: ({ navigation }) =>
            {
                return {
                    headerShown: false,
                    gestureEnabled: false
                }
            }
        },
        ForgotPassword: {
            screen: ForgotPassword,
            navigationOptions: ({ navigation }) =>
            {
                return {
                    headerShown: false,
                    gestureEnabled: false
                }
            }
        },
 
        Register: {
            screen: Register,
            navigationOptions: ({ navigation }) =>
            {
                return {
                    headerShown: false,
                    gestureEnabled: false
                }
            }
        },
        NoInternet:{
            screen: NoInternet,
            navigationOptions: ({ navigation }) =>
            {
                return {
                    headerShown: false,
                    gestureEnabled: false
                }
            }
        },
        Profile:{
            screen: Profile,
            navigationOptions: ({ navigation }) =>
            {
                return {
                    header: () => <HeaderComponent iname={"ios-menu"} 
                    title={"My Profile"}   navigation={navigation} back={'false'} sidemenu={true} addmenu={false}/>,
                    gestureEnabled: false
                }
            }
        },
        ProfileEdit:{
            screen: ProfileEdit,
            navigationOptions: ({ navigation }) =>
            {
                return {
                    header: () => <HeaderComponent iname={"ios-menu"} 
                    title={"Edit Profile"}   navigation={navigation} back={true} sidemenu={false} addmenu={false}/>,
                    gestureEnabled: false
                }
            }
        },
        BookAppointment:{
            screen: BookAppointment,
            navigationOptions: ({ navigation }) =>
            {
                return {
                    header: () => <HeaderComponent iname={"ios-menu"} 
                    title={"Book An Appointment"}   navigation={navigation} back={true} sidemenu={false} addmenu={false}/>,
                    gestureEnabled: false
                }
            }
        },
        MyAppointment:{
            screen: MyAppointment,
            navigationOptions: ({ navigation }) =>
            {
                return {
                    header: () => <HeaderComponent iname={"ios-menu"} 
                    title={"My Appointment"}   navigation={navigation} back={false} sidemenu={true} addmenu={true}/>,
                    gestureEnabled: false
                }
            }
        },
        DoctorAppointment:{
            screen: DoctorAppointment,
            navigationOptions: ({ navigation }) =>
            {
                return {
                    header: () => <HeaderComponent time={Math.floor(Date.now() / 1000)} iname={"ios-menu"} 
                    title={"Doctor Appointment"}   navigation={navigation} back={false} sidemenu={true} addmenu={false}/>,
                    gestureEnabled: false
                }
            }
        },

        OnlineOrder:{
            screen: OnlineOrder,
            navigationOptions: ({ navigation }) =>
            {
                return {
                    header: () => <HeaderComponent time={Math.floor(Date.now() / 1000)} iname={"ios-menu"} 
                    title={"Online Order"}   navigation={navigation} back={false} addCart={true} sidemenu={true} addmenu={false}/>,
                    gestureEnabled: false
                }
            }
        },

        OrderDetails:{
            screen: OrderDetails,
            navigationOptions: ({ navigation }) =>
            {
                return {
                    header: () => <HeaderComponent time={Math.floor(Date.now() / 1000)}  iname={"ios-menu"} 
                    title={"OrderDetails"}  navigation={navigation} back={true} addCart={true} sidemenu={false} addmenu={false}/>,
                    gestureEnabled: false
                }
            }
        },
        OrderHistory:{
            screen: OrderHistory,
            navigationOptions: ({ navigation }) =>
            {
                return {
                    header: () => <HeaderComponent iname={"ios-menu"} 
                    title={"Order History"}   navigation={navigation} back={false} sidemenu={true} addmenu={false}/>,
                    gestureEnabled: false
                }
            }
        },

        ProductDetails:{
            screen: ProductDetails,
            navigationOptions: ({ navigation }) =>
            {
                return {
                    header: () => <HeaderComponent time={Math.floor(Date.now() / 1000)} iname={"ios-menu"} 
                    title={"Details"}   navigation={navigation} addCart={true} back={true} sidemenu={false} addmenu={false}/>,
                    gestureEnabled: false
                }
            }
        },

        CartPage:{
            screen: CartPage,
            navigationOptions: ({ navigation }) =>
            {
                return {
                    header: () => <HeaderComponent iname={"ios-menu"} time={Math.floor(Date.now() / 1000)}
                    title={"Cart"}   navigation={navigation} addCart={true} back={true} sidemenu={false} addmenu={false}/>,
                    gestureEnabled: false
                }
            }
        },

        BillingShipping:{
            screen: BillingShipping,
            navigationOptions: ({ navigation }) =>
            {
                return {
                    header: () => <HeaderComponent iname={"ios-menu"} 
                    title={"Billing/Shipping"}   navigation={navigation} addCart={true} back={true} sidemenu={false} addmenu={false}/>,
                    gestureEnabled: false
                }
            }
        },

        BillingShippingAddresslist:{
            screen: BillingShippingAddresslist,
            navigationOptions: ({ navigation }) =>
            {
                return {
                    header: () => <HeaderComponent iname={"ios-menu"} 
                    title={"Address Lists"}   navigation={navigation} addCart={true} back={true} sidemenu={false} addmenu={false}/>,
                    gestureEnabled: false
                }
            }
        },

        
        OrderSummary:{
            screen: OrderSummary,
            navigationOptions: ({ navigation }) =>
            {
                return {
                    header: () => <HeaderComponent iname={"ios-menu"} 
                    title={"Order Summary"}   navigation={navigation} addCart={true} back={true} sidemenu={false} addmenu={false}/>,
                    gestureEnabled: false
                }
            }
        },

        
      
        AddAddress:{
            screen: AddAddress,
            navigationOptions: ({ navigation }) =>
            {
                return {
                    header: () => <HeaderComponent iname={"ios-menu"} 
                    title={"Add Address"}   navigation={navigation} addCart={true} back={true} sidemenu={false} addmenu={false}/>,
                    gestureEnabled: false
                }
            }
        },

        Success:{
            screen: Success,
            navigationOptions: ({ navigation }) =>
            {
                return {
                    headerShown: false,
                    gestureEnabled: false
                }
            }
        },

        
        
        AppointmentDetail:{
            screen: AppointmentDetail,
            navigationOptions: ({ navigation }) =>
            {
                return {
                    header: () => <HeaderComponent iname={"ios-menu"} 
                    title={"Appointment Detail"}   navigation={navigation} back={true} sidemenu={false} addmenu={true}/>,
                    gestureEnabled: false
                }
            }
        },

        
        DoctorAppointmentDetail:{
            screen: DoctorAppointmentDetail,
            navigationOptions: ({ navigation }) =>
            {
                return {
                    header: () => <HeaderComponent iname={"ios-menu"} 
                    title={"Appointment Detail"}   navigation={navigation} back={true} sidemenu={false} addmenu={true}/>,
                    gestureEnabled: false
                }
            }
        },
        ChatNow:{
            screen: ChatNow,
            navigationOptions: ({ navigation }) =>
            {
                return {
                    header: () => <HeaderComponent iname={"ios-menu"} 
                    title={"Chat Now"}   navigation={navigation} back={true} sidemenu={false} addmenu={false}/>,
                    gestureEnabled: false
                }
            }
        },
        Payment:{
            screen: Payment,
            navigationOptions: ({ navigation }) =>
            {
                return {
                    header: () => <HeaderComponent iname={"ios-menu"} 
                    title={"Payment"}   navigation={navigation} back={true} sidemenu={false} addmenu={false}/>,
                    gestureEnabled: false
                }
            }
        },
        ChangePassword:{
            screen: ChangePassword,
            navigationOptions: ({ navigation }) =>
            {
                return {
                    header: () => <HeaderComponent iname={"ios-menu"} 
                    title={"Change Password"}   navigation={navigation} back={false} addmenu={false}  sidemenu={true}/>,
                    gestureEnabled: false
                }
            }
        },

        PrescriptionDetails:{
            screen: PrescriptionDetails,
            navigationOptions: ({ navigation }) =>
            {
                return {
                    header: () => <HeaderComponent iname={"ios-menu"} 
                    title={"PrescriptionDetails"}   navigation={navigation} back={false} addmenu={false}  sidemenu={true}/>,
                    gestureEnabled: false
                }
            }
        },
        
        AddPrescription:{
            screen: AddPrescription,
            navigationOptions: ({ navigation }) =>
            {
                return {
                    header: () => <HeaderComponent iname={"ios-menu"} 
                    title={"Add Prescription"}   navigation={navigation} back={false} addmenu={false}  sidemenu={true}/>,
                    gestureEnabled: false
                }
            }
        },
    },
    {
        initialRouteName: "OnlineOrder"
    } 
);
 export default createAppContainer(RNApp);

// export default createAppContainer(
//     createSwitchNavigator(
//       {
//         AuthLoading: AuthLoadingScreen,
//         App: RNApp,
//         Auth: AuthStack,
//       },
//       {
//         initialRouteName: 'AuthLoading',
//       }
//     )
//   );