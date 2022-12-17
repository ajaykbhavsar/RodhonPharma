import React, { Component } from 'react';
import ForgotPasswordView from './ForgotPasswordView';
import { BackHandler } from 'react-native';
import { connect } from 'react-redux'; 
import AsyncStorage from '@react-native-async-storage/async-storage'; 
import * as navigationActions from 'app/actions/navigationActions';
import NetInfo from "@react-native-community/netinfo";
import * as forgotPasswordActions from 'app/actions/forgotPasswordActions';
 

class ForgotPasswordContainer extends Component {
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
      let currentRoute = this.props.navigation.state.routeName;
      let navigation = this.props.navigation;
      BackHandler.addEventListener ('hardwareBackPress', function(){
        if (currentRoute == "Login") {
          BackHandler.exitApp();
          return true;
        }
        else{
          navigation.goBack();
          return true;
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

  navigateToForgotPassword = () => {
      navigationActions.navigateToForgotPassword();
  }


  render() {
      return <ForgotPasswordView {...this.props} />;        
  }
}

function mapStateToProps(state) {
  return {
      ForgotPasswordresponse: state.ForgotPasswordReducer,
      //loading: state.loadingReducer
  };
}
function mapDispatchToProps(dispatch) {
  return {
      onForgotPassword: (obj) => dispatch(forgotPasswordActions.requestForgotPassword(obj))      
  };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ForgotPasswordContainer);
