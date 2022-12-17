import React, { Component } from 'react';
import NoInternetView from './NoInternetView';
import { connect } from 'react-redux';
import { BackHandler } from 'react-native';
import * as navigationActions from 'app/actions/navigationActions';
import NetInfo from "@react-native-community/netinfo";
class NoInternetContainer extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        // do stuff while splash screen is shown
          // After having done stuff (such as async tasks) hide the splash screen
  

          this.checkInternet();
      }
    
      checkInternet(){
        NetInfo.fetch().then(state => {
            if(state.isConnected){
                navigationActions.navigateToHome();
            }
        });
      }
    render() {
        return <NoInternetView CheckInternet={this.checkInternet} {...this.props}/>;
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
)(NoInternetContainer);
