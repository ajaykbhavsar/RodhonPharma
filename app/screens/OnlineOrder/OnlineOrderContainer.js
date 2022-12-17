import React, { Component } from 'react';
import OnlineOrderView from './OnlineOrderView';
import { connect } from 'react-redux';
import * as navigationActions from 'app/actions/navigationActions';
import NetInfo from "@react-native-community/netinfo";
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as homeProductActions from 'app/actions/homeProductActions';
class OnlineOrderContainer extends Component {
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
    const { loadProduct } = this.props;
    loadProduct();
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

  render() {
    return <OnlineOrderView {...this.props} />;
  }
}

function mapStateToProps(state) {
  return {
    homeProduct: state.homeProductReducer.homeProduct,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadProduct: () => dispatch(homeProductActions.requestHomeProduct())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OnlineOrderContainer);
