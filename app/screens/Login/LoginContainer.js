import React, { Component } from 'react';
import LoginView from './LoginView';
import { BackHandler } from 'react-native';
import { connect } from 'react-redux'; 
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as loginActions from 'app/actions/loginActions';
import * as navigationActions from 'app/actions/navigationActions';
import NetInfo from "@react-native-community/netinfo";
 

class LoginContainer extends Component {
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

 

  render() {
      return <LoginView {...this.props} />;        
  }
}

function mapStateToProps(state) {
  return {
      loginresponse: state.loginReducer,
      loading: state.loadingReducer
  };
}
function mapDispatchToProps(dispatch) {
  return {
      onLogin: (un, pwd) => dispatch(loginActions.requestLogin(un, pwd))      
  };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginContainer);
