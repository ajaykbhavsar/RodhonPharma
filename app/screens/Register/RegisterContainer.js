import React, { Component } from 'react';
import RegisterView from './RegisterView';
import { BackHandler } from 'react-native';
import { connect } from 'react-redux'; 
import AsyncStorage from '@react-native-async-storage/async-storage'; 
import * as navigationActions from 'app/actions/navigationActions';
import * as registerActions from 'app/actions/registerActions';
import NetInfo from "@react-native-community/netinfo";
 

class RegisterContainer extends Component {
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

       
      BackHandler.addEventListener ('hardwareBackPress', function(){
        if (currentRoute == "Register") {
          navigation.goBack();
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
      return <RegisterView {...this.props} />;        
  }
}

function mapStateToProps(state) {
  return {
      Registerresponse: state.RegisterReducer,
      //loading: state.loadingReducer
  };
}
function mapDispatchToProps(dispatch) {
  return {
      onRegister: (obj) => dispatch(registerActions.requestRegister(obj))      
  };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RegisterContainer);
