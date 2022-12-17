import React, { Component } from 'react';
import { get } from 'lodash';
import { Image, View, Keyboard, TouchableOpacity, TouchableWithoutFeedback, ToastAndroid, Dimensions, ImageBackground, Linking } from 'react-native';
import { Text } from "native-base";
import globalStyles from '../../assets/css/globalStyles';
import styles from './styles';
import { TextBoxElement, OverlayActivityIndicatorElement } from '../../components';
import SplashScreen from 'react-native-splash-screen';
import { Statusbar } from '../../components/Statusbar';
import NetInfo from "@react-native-community/netinfo";
import * as navigationActions from '../../actions/navigationActions';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import ApiConstants from '../../api/ApiConstants';
import CheckBox from '@react-native-community/checkbox';
import Styles from '../../config/styles';
const { color, Typography } = Styles;
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

class RegisterView extends Component {

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

      isValidFirstName: false,
      errorMessagefirtname: true,
      isValidLastName: false,
      errorMessagelastname: true,
      isValidEmail: false,
      errorMessageemail: true,
      isValidPassword: false,
      errorMessagepassword: true,
      isValidconfirmpassword: false,
      errorMessageconfirmpassword: true,
      isValidPhoneNo: false,
      errorMessagephoneno: true,

      postAddCustomer: {
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        confirmpasword: '',
        phoneno: ''
      }

    }

  }

  async componentDidMount() {
    SplashScreen.hide();
    this.setState({ username: "" });
    this.setState({ password: "" });
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



  togglePassword = () => {
    this.setState({ visible: !this.state.visible });
  }



  navigateToLogin = () => {
    navigationActions.navigateToLogin();
  }




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


  setChangeBox = () => {
    this.setState({ isSelected: !this.state.isSelected });
  }

  addCustomers = () => {
    if (this.validateCustomer()) {
      //  console.log(this.props);
      this.props.onRegister(this.state.postAddCustomer);
    }
  }

  onValueChange = (fieldName, value) => {
    this.setState(prevState => ({
      postAddCustomer: {                   // object that we want to update
        ...prevState.postAddCustomer, // keep all other key-value pairs
        [fieldName]: value
      }
    }), function () {
    });


  }

  validatePassword = (value) => {
    if (value.length < 8) {
      return false;
    }
    else {
      return true;
    }
  }
  validateCustomer = () => {
    let isValidFirstName;
    let isValidLastName;
    let isValidEmail;
    let isValidPassword;
    let isValidconfirmpassword;
    let isValidPhoneNo;

    let allInputsValidated;

    if (this.state.postAddCustomer.firstname == '') {
      isValidFirstName = false;
    } else {
      if (this.state.postAddCustomer.firstname.length >= 3 && this.state.postAddCustomer.firstname.length <= 30) {
        isValidFirstName = true;
      } else {
        ToastAndroid.show("First Name should have min 3 chars and max 30", ToastAndroid.SHORT);
        isValidFirstName = true;
      }
    }

    if (this.state.postAddCustomer.lastname == '') {
      isValidLastName = false;
    } else {
      if (this.state.postAddCustomer.lastname.length >= 1 && this.state.postAddCustomer.lastname.length <= 30) {
        isValidLastName = true;
      } else {
        ToastAndroid.show("Middle Name should have min 1 chars and max 30", ToastAndroid.SHORT);
        isValidLastName = false;
      }
    }

    if (this.state.postAddCustomer.phoneno == "") {
      isValidPhoneNo = false;
    }
    else {
      let reg = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s/0-9]*$/g;
      if (reg.test(this.state.postAddCustomer.phoneno) === true) {
        if (this.state.postAddCustomer.phoneno.length >= 10 && this.state.postAddCustomer.phoneno.length <= 15) {
          isValidPhoneNo = true;
        }
        else {
          ToastAndroid.show("Contact Number length should be 10 to 15 digits", ToastAndroid.SHORT);
          isValidPhoneNo = false;
        }
      }
      else {
        ToastAndroid.show("Contact Number is not valid", ToastAndroid.SHORT);
        isValidPhoneNo = false;
      }
    }

    if (this.state.postAddCustomer.email == "") {
      isValidEmail = false;
    }
    else {
      if (this.validateEmail(this.state.postAddCustomer.email)) {
        isValidEmail = true;
      }
      else {
        ToastAndroid.show("Invalid Email", ToastAndroid.SHORT);
        isValidEmail = false;
      }
    }

    if (this.state.postAddCustomer.password == '') {
      isValidPassword = false;
    } else {
      isValidPassword = true;
    }

    if (this.state.postAddCustomer.confirmpasword == '') {
      isValidconfirmpassword = false;
    } else {
      isValidconfirmpassword = true;
    }

    if (this.state.postAddCustomer.password == this.state.postAddCustomer.confirmpasword) {
      isValidconfirmpassword = true;
    } else {
      ToastAndroid.show("Password And Confirm Is Same", ToastAndroid.SHORT);

      isValidconfirmpassword = false;
    }
    // console.log(isValidPassword, isValidFirstName, isValidLastName); return false;

    if (isValidFirstName &&
      isValidLastName &&
      isValidEmail &&
      isValidPassword &&
      isValidconfirmpassword &&
      isValidPhoneNo) {

      allInputsValidated = true;
    }
    else {
      ToastAndroid.show("Please check all fields", ToastAndroid.SHORT);
      allInputsValidated = false;
    }
    // console.log(allInputsValidated); return false;
    this.setState({
      isValidFirstName: isValidFirstName,
      errorMessagefirtname: !isValidFirstName,
      isValidLastName: isValidLastName,
      errorMessagelastname: !isValidLastName,
      isValidEmail: isValidEmail,
      errorMessageemail: !isValidEmail,
      isValidPassword: isValidPassword,
      errorMessagepassword: !isValidPassword,
      isValidPassword: isValidPassword,
      errorMessagepassword: !isValidPassword,
      isValidconfirmpassword: isValidconfirmpassword,
      errorMessageconfirmpassword: !isValidconfirmpassword,
      isValidPhoneNo: isValidPhoneNo,
      errorMessagephoneno: !isValidPhoneNo,
    });
    return allInputsValidated;

  }


  validateEmail = (value) => {
    if (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g.test(value)) {
      return true;
    }
    return false;
  }



  render() {
    const { loading } = this.props;

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
                  {/* <View style={styles.logoBox}>
                        <Image source={require('../../assets/images/clogo.png')} resizeMode="contain" style={styles.companyLogo} />
                    </View>                                          */}
                  <View style={styles.loginBoxd}>
                    <Image source={require('../../assets/images/img_whitetransone.png')} resizeMode="contain" style={styles.ImageWhite} />

                    <Image source={require('../../assets/images/img_whitetranstwo.png')} resizeMode="contain" style={styles.ImageWhitetwo} />
                    <Text style={globalStyles.pageTitle}>Register Here</Text>
                    <View style={styles.textBoxContainer}>
                      <TextInput
                        placeholder='First Name'
                        value={this.state.postAddCustomer.firstname}
                        onChangeText={value => this.onValueChange("firstname", value)}
                        placeholderTextColor='#4A4A4A'
                        style={[this.state.isValidFirstName ? globalStyles.TextBoxRoundCorner : globalStyles.TextBoxRoundCorner]}

                      />
                    </View>
                    <View style={styles.textBoxContainer}>
                      <TextInput
                        placeholder='Last Name'
                        value={this.state.postAddCustomer.lastname}
                        style={[this.state.isValidLastName ? globalStyles.TextBoxRoundCorner : globalStyles.TextBoxRoundCorner]}
                        onChangeText={value => this.onValueChange("lastname", value)}
                        placeholderTextColor='#4A4A4A'
                        isvalidInput={this.state.isValidLastName}
                      />
                    </View>
                    <View style={styles.textBoxContainer}>
                      <TextInput
                        placeholder='Email'
                        value={this.state.postAddCustomer.email}
                        style={[this.state.isValidEmail ? globalStyles.TextBoxRoundCorner : globalStyles.TextBoxRoundCorner]}
                        onChangeText={value => this.onValueChange("email", value)}
                        placeholderTextColor='#4A4A4A'
                        isvalidInput={this.state.isValidEmail}
                      />
                    </View>
                    <View style={styles.textBoxContainer}>
                      <TextInput
                        placeholder='Password'
                        value={this.state.postAddCustomer.password}
                        style={[this.state.isValidPassword ? globalStyles.TextBoxRoundCorner : globalStyles.TextBoxRoundCorner]}
                        onChangeText={value => this.onValueChange("password", value)}
                        placeholderTextColor='#4A4A4A'
                        secureTextEntry={true}
                        isvalidInput={this.state.isValidPassword}
                      />
                    </View>
                    <View style={styles.textBoxContainer}>
                      <TextInput
                        placeholder='Confirm Password'
                        secureTextEntry={true}
                        value={this.state.postAddCustomer.confirmpasword}
                        style={[this.state.isValidconfirmpassword ? globalStyles.TextBoxRoundCorner : globalStyles.TextBoxRoundCorner]}

                        // style={[this.state.isValidconfirmpassword ? globalStyles.TextBoxRoundCornerredback : globalStyles.TextBoxRoundCorner]}
                        onChangeText={value => this.onValueChange("confirmpasword", value)}
                        placeholderTextColor='#4A4A4A'
                        isvalidInput={this.state.isValidconfirmpassword}
                      />
                    </View>

                    <View style={styles.textBoxContainer}>
                      <TextInput
                        placeholder='Phone No.'
                        value={this.state.postAddCustomer.phoneno}
                        style={[this.state.isValidPhoneNo ? globalStyles.TextBoxRoundCorner : globalStyles.TextBoxRoundCorner]}
                        onChangeText={value => this.onValueChange("phoneno", value)}
                        placeholderTextColor='#4A4A4A'
                        isvalidInput={this.state.isValidPhoneNo}
                      />
                    </View>
                    <View style={styles.textBoxContainer}>

                    </View>

                    <View style={[globalStyles.formElements, styles.CheckBoxCotainer]}>
                      <CheckBox
                        value={this.state.isSelected}
                        tintColors={{ true: '#ffffff', false: 'white' }}
                        onValueChange={() => this.setChangeBox()}
                        style={styles.checkBoxcss}
                      />
                      <View style={styles.TermsCheckbox}>
                        <Text style={styles.checkBoxText}>I Agree with company's
                          <TouchableOpacity style={styles.btnTerms}>
                            <Text style={styles.btnTermsText}>Terms & Conditions</Text>
                          </TouchableOpacity>
                        </Text>
                      </View>
                    </View>
                    <View style={styles.ButtonArea}>
                      <TouchableOpacity style={[styles.btnblue, styles.btn,]} onPress={() => this.addCustomers()}>
                        <Text style={[styles.btnText, styles.btnTextwhite]}>Register</Text>
                      </TouchableOpacity>
                      <View style={styles.alreadyRegister}>
                        <Text style={styles.checkBoxText}>Already Register?</Text>
                        <TouchableOpacity style={styles.linkbtnbox} onPress={() => this.navigateToLogin()}>
                          <Text style={[styles.btnTexttwo, styles.btnTextwhite]}>Login here</Text>
                        </TouchableOpacity>
                      </View>
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
export default RegisterView;
