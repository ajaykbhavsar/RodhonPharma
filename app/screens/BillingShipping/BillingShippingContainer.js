import React, { Component } from 'react';
import BillingShippingView from './BillingShippingView';
import { connect } from 'react-redux'; 
import * as navigationActions from 'app/actions/navigationActions';
import NetInfo from "@react-native-community/netinfo";
import AsyncStorage from '@react-native-async-storage/async-storage';
 

class BillingShippingContainer extends Component {
    constructor(props) {
        super(props);
    }

    // define a separate function to get triggered on focus
    async onFocusFunction () {
      NetInfo.fetch().then(state => {
        if (!state.isConnected) {
          navigationActions.navigateToNoInternet();
        }
      }); 
    }

    // and don't forget to remove the listener
    componentWillUnmount () {
      this.focusListener.remove()
    }
  
  async componentDidMount(){
      this.focusListener = this.props.navigation.addListener('didFocus', () => {
          this.onFocusFunction();
        });


  }
 

  _checkPermission = async() => {
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

  _getPermission = async() => {
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
      let selectedAddress =this.props.navigation.state.params;
      
      return <BillingShippingView {...this.props} selectedAddressId={selectedAddress?.addressId} />;        
  }
}

function mapStateToProps(state) {
  return {
    loginuser: state.loginReducer.customer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
     
  };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BillingShippingContainer);
