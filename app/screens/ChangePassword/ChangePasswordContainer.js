import React, { Component } from 'react';
import ChangePasswordView from './ChangePasswordView';
import { connect } from 'react-redux'; 
import * as navigationActions from 'app/actions/navigationActions';
import NetInfo from "@react-native-community/netinfo";
import AsyncStorage from '@react-native-async-storage/async-storage';
 

class ChangePasswordContainer extends Component {
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


  render() {
      return <ChangePasswordView {...this.props} />;        
  }
}

function mapStateToProps(state) {
  return {
   
  };
}

function mapDispatchToProps(dispatch) {
  return {
     
  };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ChangePasswordContainer);
