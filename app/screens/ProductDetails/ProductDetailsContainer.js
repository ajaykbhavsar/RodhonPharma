import React, { Component } from 'react';
import ProductDetailsView from './ProductDetailsView';
import { connect } from 'react-redux'; 
import * as navigationActions from 'app/actions/navigationActions';
import NetInfo from "@react-native-community/netinfo";
import AsyncStorage from '@react-native-async-storage/async-storage';
 

class ProductDetailsContainer extends Component {
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
      
    componentWillUnmount () {
      this.focusListener.remove()
    }
  
  async componentDidMount(){
    this.focusListener = this.props.navigation.addListener('didFocus', () => {
        this.onFocusFunction();
      });
  }


  render() {
      let id = this.props.navigation.state.params;
      console.log("getting id ")
      console.log(id);
      return <ProductDetailsView {...this.props} productId={id} />;        
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
     
  };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductDetailsContainer);
