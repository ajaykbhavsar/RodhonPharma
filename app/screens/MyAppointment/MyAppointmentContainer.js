import React, { Component } from 'react';
import MyAppointmentView from './MyAppointmentView';
import { connect } from 'react-redux';
import * as navigationActions from 'app/actions/navigationActions';
import * as myappointmentsActions from 'app/actions/myappointmentsActions';
import NetInfo from "@react-native-community/netinfo";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { loadMyappointments } from '../../api/methods/myAppointments';
import ApiConstants from '../../api/ApiConstants';


class MyAppointmentContainer extends Component {
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
    const { loadMyappointments, loginUserId } = this.props;

    if (loginUserId > 0) {
      var searchAppoinment = {};
      searchAppoinment.PageIndex = 1;
      searchAppoinment.PageSize = 999;
      searchAppoinment.CustomerId = loginUserId;
      searchAppoinment.DoctorId = ApiConstants.DoctorId;
      searchAppoinment.AppointmentStatusId = 0;
      loadMyappointments(searchAppoinment);
    }

  }

  // and don't forget to remove the listener
  componentWillUnmount() {
    this.focusListener.remove()
  }

  async componentDidMount() {

    // loadMyappointments()
    this.focusListener = this.props.navigation.addListener('didFocus', () => {
      this.onFocusFunction();
    });

  }


  _checkPermission = async () => {
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
    return <MyAppointmentView {...this.props} />;
  }
}

function mapStateToProps(state) {
  return {
    appointmentresponse: state.myappointmentsReducer.appointmentresponse,
    loginuser: state.loginReducer.customer,
    loginUserId: state.loginReducer.loginUserId,
    loading: state.loadingReducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadMyappointments: (searchAppoinment) => dispatch(myappointmentsActions.loadMyappointmentsRequest(searchAppoinment)),
    updateAppointment: (action) => dispatch(myappointmentsActions.updateAppointmentRequest(action))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyAppointmentContainer);
