import React, { Component } from 'react';
import BookAppointmentView from './BookAppointmentView';
import { connect } from 'react-redux';
import * as navigationActions from 'app/actions/navigationActions';
import NetInfo from "@react-native-community/netinfo";
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as myappointmentsActions from 'app/actions/myappointmentsActions';


class BookAppointmentContainer extends Component {
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
    const { loadBookAppointmentbanners } = this.props;
    loadBookAppointmentbanners();
    loadLatestevents();
    loadUpcomingevents();
  }

  // and don't forget to remove the listener
  componentWillUnmount() {
    this.focusListener.remove()
  }

  async componentDidMount() {
    this.focusListener = this.props.navigation.addListener('didFocus', () => {
      this.onFocusFunction();
    });
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
    return <BookAppointmentView {...this.props} />;
  }
}

function mapStateToProps(state) {
  return {
    loginuser: state.loginReducer.customer,
    loginUserId: state.loginReducer.loginUserId,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onaddAppointment: (obj) => dispatch(myappointmentsActions.requestAddnewappointment(obj))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookAppointmentContainer);
