import React, { Component } from 'react';
import { get } from 'lodash';
import {Image, View, Keyboard, TouchableOpacity, ToastAndroid,TouchableWithoutFeedback, Dimensions,ImageBackground, Linking } from 'react-native';
import { Text } from "native-base";
import globalStyles from '../../assets/css/globalStyles';
import styles from './styles';
import { TextBoxElement, OverlayActivityIndicatorElement } from '../../components';
import SplashScreen from 'react-native-splash-screen';
import {Statusbar} from '../../components/Statusbar';
import NetInfo from "@react-native-community/netinfo";
import * as navigationActions from '../../actions/navigationActions';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import ApiConstants from '../../api/ApiConstants'; 
import Styles from '../../config/styles';  
const { color, Typography} = Styles;
const { width: viewportWidth , height: viewportHeight } = Dimensions.get('window');

class ForgotPasswordView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "", 
      password: "",
      email:'',
      ErrorMessage: "",
      firstTimeRender: undefined,
      isValidEmail:false,
      errorMessageemail:true,
      enableScroll:false,
      ShowEnvMsg:false,
      CurrentEnv: "",
      visible:false
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

 

  togglePassword=()=>{
    this.setState({ visible: !this.state.visible});
  }

 

  navigateToLogin = () => {
    navigationActions.navigateToLogin();
  }


 

  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  _keyboardDidShow = ( )=> {
    this.setState({ enableScroll: true});
  }

  _keyboardDidHide = ( )=>{
    this.setState({ enableScroll: false});
  }


  setChangeBox=()=>{
    this.setState({ isSelected: !this.state.isSelected });
  }

  forgptpassword=()=>{
    if(this.validateCustomer()){
        console.log(this.props);
         this.props.onForgotPassword(this.state.email);
       }
  }

  onValueChange = (fieldName, value) => {    
    this.setState(prevState => ({    
        email: value 
    
    }), function () {
  });
 
 
}

  validateCustomer=()=>{    
    let isValidEmail;

    let allInputsValidated;

    if(this.state.email == "" ){
      isValidEmail = true;
    }
    else{
        if(this.validateEmail(this.state.email)){
          isValidEmail = false;
        }
        else{
          ToastAndroid.show("Invalid Email", ToastAndroid.SHORT);
          isValidEmail = true;
        }
    }

    if(  isValidEmail 

      )  
      {
        ToastAndroid.show("Please check all fields", ToastAndroid.SHORT);
      }
      else
      {
        allInputsValidated = true;
      }


      this.setState({ 
        isValidEmail: isValidEmail,
        errorMessageemail:!isValidEmail,        
      });
      return allInputsValidated;

  }

  
  validateEmail = (value) =>
  {
    if (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g.test(value))
    {
      return true;
    }
    return false;
  }
   

  render() {
    const {loading } = this.props;
 
    

      return (

        <View style={[globalStyles.contentSection, styles.container]}>
          <Statusbar />
          <ImageBackground source={require('../../assets/images/img_back.png')}  style={globalStyles.LoginImageBack}>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
              <ScrollView scrollEnabled={this.state.enableScroll} style={globalStyles.Pagemargin}>
                {
                  get(loading, 'isLoading') && <OverlayActivityIndicatorElement />
                }
                <View   style={this.state.enableScroll? styles.pagemaincontainerHeight : styles.pagemaincontainer}>
                
                <View style={styles.pagemainbox}>
                    <View style={styles.logoBox}>
                        <Image source={require('../../assets/images/clogo.png')} resizeMode="contain" style={styles.companyLogo} />
                    </View>                                         
                    <View style={styles.loginBoxd}>
                      <Image source={require('../../assets/images/img_whitetransone.png')} resizeMode="contain" style={styles.ImageWhite} />
                         
                      <Image source={require('../../assets/images/img_whitetranstwo.png')} resizeMode="contain" style={styles.ImageWhitetwo} />  
                      <Text style={[globalStyles.pageTitle, styles.marBtm]}>Forgot Password</Text>
                      <Text style={styles.checkBoxText}>Please enter the email you use to sign into app.</Text>
                      <View style={styles.textBoxContainer}>
                        <TextInput
                          placeholder='Email'
                          value={this.state.email}
                          style={[this.state.isValidEmail ? globalStyles.TextBoxRoundCornerredback: globalStyles.TextBoxRoundCorner]}
                          onChangeText={value => this.onValueChange("email", value)}
                          placeholderTextColor='#4A4A4A'                           
                          isvalidInput={this.state.isValidEmail}
                          />
                      </View>
                     
                      <View style={styles.ButtonArea}>
                          <TouchableOpacity style={[styles.btnblue, styles.btn, ]} onPress={()=>this.forgptpassword()}>
                                <Text style={[styles.btnText, styles.btnTextwhite]}>Submit</Text>
                          </TouchableOpacity>
                          <View style={styles.alreadyForgotPassword}>
                            
                              <TouchableOpacity style={styles.linkbtnbox} onPress={()=>this.navigateToLogin()}>
                                  <Text style={[styles.btnTexttwo, styles.btnTextwhite]}>Back</Text>
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
export default ForgotPasswordView;
