import React, { Component } from 'react';
import AppointmentDetailView from './AppointmentDetailView';
import { connect } from 'react-redux';
import * as navigationActions from 'app/actions/navigationActions';
import NetInfo from "@react-native-community/netinfo";
import * as myappointmentsActions from 'app/actions/myappointmentsActions';
import AsyncStorage from '@react-native-async-storage/async-storage';


class AppointmentDetailContainer extends Component {
  constructor(props) {
    super(props);
  }

  // define a separate function to get triggered on focus
  async onFocusFunction() {
    NetInfo.fetch().then(state => {
      if (!state.isConnected) {
        navigationActions.navigateToNoInternet();
      }
    });




    // do some stuff on every screen focus
    // const { loadAppointmentDetailbanners } = this.props;
    // loadAppointmentDetailbanners();
    // loadLatestevents();
    // loadUpcomingevents();

    // const { loadAppointmentDetail } = this.props;
    // console.log(this.props.navigateToEvents.state.params);
    // loadAppointmentDetail(this.props.navigation.state.params);
  }

  // and don't forget to remove the listener
  componentWillUnmount() {
    this.focusListener.remove()
  }

  async componentDidMount() {
    this.focusListener = this.props.navigation.addListener('didFocus', () => {
      this.onFocusFunction();
    });
    // const { loadAppointmentDetail } = this.props;
    // loadAppointmentDetail(this.props.navigation.state.params);
  }

  // requestUserPermission = async() => {
  //   const authStatus = await messaging().requestPermission();
  //   const enabled =
  //     authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
  //     authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  //   if (enabled) {
  //     console.log('Authorization status:', authStatus);
  //     await messaging().getToken().then((token) => {
  //       console.log(token);
  //       //this._onChangeToken(token)
  //     });
  //   }
  //   else
  //   {
  //     this._getPermission() ;
  //   }
  // }

  _checkPermission = async () => {
    // const enabled = await messaging().hasPermission();
    // if (enabled) {
    //   //console.log('Authorization status:', enabled);
    //     const token = await messaging().getToken()
    //     //console.log(token);
    //     this._onChangeToken(token);
    // }
    // else 
    // {
    //   this._getPermission();
    // }

    const token = await messaging().getToken()
    //console.log(token);
    this._onChangeToken(token);
  }

  _getPermission = async () => {
    messaging().requestPermission()
      .then(() => {
        this._checkPermission()
      })
      .catch(error => {
        // User has rejected permissions  
      });
  }

  _onChangeToken = async (token) => {
    await AsyncStorage.setItem("DEVICE_TOKEN", token);
    const { onUpdateDeviceToken } = this.props;
    //console.log(token);
    onUpdateDeviceToken(token);
  }

  navigateToEvents = () => {
    navigationActions.navigateToEvents();
  }

  render() {
    return <AppointmentDetailView  {...this.props} />;
  }
}

function mapStateToProps(state) {
  return {
    appointmentDetail: state.myappointmentsReducer.appointmentdetail.data,
    appointmentOtherDetail: state.myappointmentsReducer.appointmentdetail.otherdetail,
    loading: state.loadingReducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    // loadAppointmentDetail: (appointId) => dispatch(myappointmentsActions.getAppointmentDetailRequest(appointId))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppointmentDetailContainer);
