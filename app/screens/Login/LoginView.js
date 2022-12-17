import React, { Component } from 'react';
import { get } from 'lodash';
import { Image, View, Keyboard,ToastAndroid, TouchableOpacity, TouchableWithoutFeedback, ImageBackground, Linking } from 'react-native';
import { Text } from "native-base";
import globalStyles from '../../assets/css/globalStyles';
import styles from './styles';
import { TextBoxElement, OverlayActivityIndicatorElement } from '../../components';
import SplashScreen from 'react-native-splash-screen';
import { Statusbar } from '../../components/Statusbar';
import NetInfo from "@react-native-community/netinfo";
import * as navigationActions from '../../actions/navigationActions';
import { ScrollView } from 'react-native-gesture-handler';
import ApiConstants from '../../api/ApiConstants';

class LoginView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      ErrorMessage: "",
      firstTimeRender: undefined,
      enableScroll: false,
      ShowEnvMsg: false,
      CurrentEnv: "",
      visible: false,
      isValidEmail: false,
      errorMessageemail: true,
      isValidPassword: false,
      errorMessagepassword: true,
    }
    this.props.loginresponse.ErrorMessage = "";
    this.props.loginresponse.isLoggedIn = true;
  }

  async componentDidMount() {
    SplashScreen.hide();
    NetInfo.fetch().then(state => {
      if (!state.isConnected) {
        alert("No Internet connection");
      }
    });
    this.keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      this._keyboardDidShow,
    );
    this.keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      this._keyboardDidHide,
    );
  }

  static getDerivedStateFromProps(props, state) {
    const { loginresponse } = props;
    // if(!(loginresponse.login_token=='' || loginresponse.login_token==undefined || loginresponse.login_token==null))
    // {
    //   console.log("123");
    //   navigationActions.navigateToHome();
    //   return state;
    // }
    let newState = state;
    let nShowEnvMsg = state.ShowEnvMsg;
    let nCurrentEnv = state.CurrentEnv;
    if (get(props, 'loginresponse.isLoggedIn') === false && !state.firstTimeRender) {
      newState = {
        username: '',
        password: '',
        ErrorMessage: '',
        firstTimeRender: true
      }
    }
    newState.ShowEnvMsg = nShowEnvMsg;
    newState.CurrentEnv = nCurrentEnv;
    return newState;
  }

  togglePassword = () => {
    this.setState({ visible: !this.state.visible });
  }

  validateCustomer = () => {

  let isValidEmail;
  let isValidPassword;


  let allInputsValidated;



  if (this.state.username == "") {
    isValidEmail = false;
  }
  else {
    if (this.validateEmail(this.state.username)) {
      isValidEmail = true;
    }
    else {
      ToastAndroid.show("Invalid Email", ToastAndroid.SHORT);
      isValidEmail = false;
    }
  }

  if (this.state.password == '') {
    isValidPassword = false;
  } else {
    isValidPassword = true;
  }

  // console.log(isValidPassword, isValidFirstName, isValidLastName); return false;

  if (
    isValidEmail &&
    isValidPassword) {

    allInputsValidated = true;
  }
  else {
    ToastAndroid.show("Please check all fields", ToastAndroid.SHORT);
    allInputsValidated = false;
  }
  // console.log(allInputsValidated); return false;
  this.setState({
    isValidEmail: isValidEmail,
    errorMessageemail: !isValidEmail,
    isValidPassword: isValidPassword,
    errorMessagepassword: !isValidPassword
  });
  return allInputsValidated;

}


validateEmail = (value) => {
  if (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g.test(value)) {
    return true;
  }
  return false;
}

  navigate = async () => {
    this.props.loginresponse.ErrorMessage = '';
    this.submitted = true;
    this.setState({ firstTimeRender: undefined });
    let username = this.state.username;
    let password = this.state.password;
    NetInfo.fetch().then(state => {
      if (!state.isConnected) {
        alert("No Internet connection");
      }
      else {
        if (this.validateCustomer()) {
        this.props.onLogin(username, password);
      }
    }
    });
  };

  navigateToForgotPassword = () => {
    navigationActions.navigateToForgotPassword();
  }

  navigateToRegister = () => {
    navigationActions.navigateToRegister();
  }




  updateState = (fieldName, value) => {
    this.setState({
      [fieldName]: value
    });

    if (this.state.username != '' && this.state.password != '') {
      this.props.loginresponse.ErrorMessage = '';
      this.submitted = false;
    } else {
      this.submitted = true;
    }
  };

  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  _keyboardDidShow = () => {
    this.setState({ enableScroll: true });
  }

  _keyboardDidHide = () => {
    this.setState({ enableScroll: false });
  }


  render() {
    const SITEURL = ApiConstants.SITEURL;
    const registerurl = SITEURL + "/member";
    const { username, password } = this.state;
    const { ErrorMessage, submitted, loading } = this.props;

    return (

      <View style={[globalStyles.contentSection, styles.container]}>
        <Statusbar />
        <ImageBackground source={require('../../assets/images/img_back.png')} style={globalStyles.LoginImageBack}>
          <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <ScrollView scrollEnabled={this.state.enableScroll} style={globalStyles.Pagemargin}>
              {
                get(loading, 'isLoading') && <OverlayActivityIndicatorElement />
              }
              <View style={this.state.enableScroll ? styles.pagemaincontainerHeight : styles.pagemaincontainer}>

                <View style={styles.pagemainbox}>
                  <View style={styles.logoBox}>
                    <Image source={require('../../assets/images/clogo.png')} resizeMode="contain" style={styles.companyLogo} />
                  </View>

                  <View style={styles.loginBoxd}>
                    <Image source={require('../../assets/images/img_whitetransone.png')} resizeMode="contain" style={styles.ImageWhite} />

                    <Image source={require('../../assets/images/img_whitetranstwo.png')} resizeMode="contain" style={styles.ImageWhitetwo} />
                    <Text style={globalStyles.pageTitle}>Login Here</Text>
                    <View style={styles.textBoxContainer}>
                      <TextBoxElement
                        placeholder={"Email"}
                        value={username}
                        style={[this.state.isValidEmail ? globalStyles.TextBoxRoundCorner : globalStyles.TextBoxRoundCorner]}
                        // isvalidInput={this.props.loginresponse.ErrorMessage == "" || this.props.loginresponse.ErrorMessage == null}
                        autoCapitalize={'none'}
                        isvalidInput={this.state.isValidEmail}
                        onChangeText={value => this.updateState("username", value)}
                        caretHidden
                        autoCorrect={false}
                      />
                    </View>
                    <View style={styles.textBoxContainer}>
                      <TextBoxElement
                        placeholder={'Password'}
                        secureTextEntry={(this.state.visible) ? false : true}
                        value={password}
                        isvalidInput={this.props.loginresponse.ErrorMessage == "" || this.props.loginresponse.ErrorMessage == null}
                        autoCapitalize={'none'}
                        onChangeText={value => this.updateState("password", value)}
                      />
                    </View>
                    {
                      (!(this.props.loginresponse.ErrorMessage == "" || this.props.loginresponse.ErrorMessage == undefined)) &&
                      <View style={styles.alertMainBox}>
                        <Image style={styles.alertIcon} source={require('../../assets/images/icon_alert.png')} resizeMode="contain" />
                        <Text style={styles.errorMessage}>{this.props.loginresponse.ErrorMessage}</Text>
                      </View>
                    }

                    <View style={styles.ButtonArea}>
                      <TouchableOpacity style={[styles.btnblue, styles.btn,]} onPress={this.navigate}>
                        <Text style={[styles.btnText, styles.btnTextwhite]}>Login</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.linkbtnbox} onPress={() => this.navigateToForgotPassword()}>
                        <Text style={[styles.btnTexttwo, styles.btnTextwhite]}>Forgot Password?</Text>
                      </TouchableOpacity>
                    </View>


                    <View style={styles.loginBottompart}>
                      <Text style={styles.btnSignuptextfirst}>New User? click  here</Text>
                      <TouchableOpacity style={[styles.btn, styles.btnblueRegister]} onPress={() => this.navigateToRegister()}>
                        <Text style={[styles.btnText, styles.btnTextwhite]}>Register</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            </ScrollView>
          </TouchableWithoutFeedback>
        </ImageBackground>
      </View>
    );
  }

}
export default LoginView;
