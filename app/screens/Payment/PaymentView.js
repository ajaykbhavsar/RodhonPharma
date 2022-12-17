import React, { Component } from 'react';
import { get } from 'lodash';
import {Image, View, StatusBar ,TouchableOpacity, ImageBackground,  ScrollView, Dimensions, Linking, TurboModuleRegistry } from 'react-native';
import { Text } from "native-base";
import globalStyles from '../../assets/css/globalStyles';
import styles from './styles';
import Carousel from 'react-native-snap-carousel';
import { FooterComponents } from '../../components/FooterComponents';
import { OverlayActivityIndicatorElement } from '../../components';
import SplashScreen from 'react-native-splash-screen';
import {Statusbar} from '../../components/Statusbar';
import ApiConstants from '../../api/ApiConstants';
import SelectDropdown from 'react-native-select-dropdown';
import * as navigationActions from '../../actions/navigationActions';  
import Styles from '../../config/styles';  
import { TextInput } from 'react-native-gesture-handler';
import CheckBox from '@react-native-community/checkbox';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
const { color, Typography} = Styles;
const { width: viewportWidth , height: viewportHeight } = Dimensions.get('window');
 

class PaymentView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex:0,    
      isModalVisible:false,  
      selectedItems:'', 
      ispaypalSelected:false,
      isgpaySelected:false,
      isupiSelected:false,
      paymentMethod:'',
      pagename:''
    } 
  }



  componentDidMount() {
    setTimeout(() => {
      SplashScreen.hide();
    }, 2000)
    // let fontName = 'Roboto'
    // GlobalFont.applyGlobal(fontName)   //<------- Added font family golbally 


    const { params } = this.props.navigation.state;
    const pageid = params ? params.page : null;
    this.setState({
      pagename:pageid
    })
}

  toggleModal = () => {
    this.setState({
      isModalVisible:!this.state.isModalVisible,
    })
 
};
 
  
  setChangeBox=()=>{
    this.setState({ isSelected: !this.state.isSelected });
  }


  navigateToLogin=()=>{
    navigationActions.navigateToLogin()
  }
  navigateToHome=()=>{
    navigationActions.navigateToHome()
  }
  navigateToProfile=()=>{
    navigationActions.navigateToProfile()
  }

  navigateToChatNow=()=>{
    navigationActions.navigateToChatNow()
  }

  paymentoption =(value)=>{
    if(value=='paypal'){
      this.setState({
        ispaypalSelected:true,
        isgpaySelected:false,
        isupiSelected:false,
        paymentMethod:'paypal'
      })
    }
    if(value=='gpay'){
      this.setState({
        ispaypalSelected:false,
        isgpaySelected:true,
        isupiSelected:false,
        paymentMethod:'gpay'
      })
    }
    if(value=='upi'){
      this.setState({
        ispaypalSelected:false,
        isgpaySelected:false,
        isupiSelected:true,
        paymentMethod:'upi'
      })
    }
  }
  

  navigateToPrescriptionDetails=()=>{
    navigationActions.navigateToPrescriptionDetails()
  }

  navigateToSuccess=()=>{
    navigationActions.navigateToSuccess()
  }


  

  render() {
    const { loading, pageid} = this.props; 
    const {pagename} = this.state;
   
    // console.log('payment View');
    // console.log(this.state.pagename);
    const radio_props = [
      {label: 'PayPal', value: 0 },
      {label: 'Gpay', value: 1 }
    ];
    


    
     

      return (

        <View style={[globalStyles.contentSection, styles.container]}>
          {
            get(loading, 'isLoading') && <OverlayActivityIndicatorElement />
          }
           <ImageBackground source={require('../../assets/images/img_back.png')} resizeMode="contain" style={globalStyles.ImageBack}>
          <Statusbar />
              <View style={styles.mainCcnt}>
                  <ScrollView>
                      <View style={styles.appointmentForm}>
                          <View>
                          <Text style={styles.subTitleText}>Select the payment method you want to use.</Text>
                              <View style={styles.appointmentBox}> 
                              {/* <RadioForm
                                  radio_props={radio_props}
                                  initial={0}
                                  buttonColor={'#B82A1B'}
                                  borderWidth={0}
                                
                                  buttonSize={30}
                                  buttonOuterSize={30}
                                  buttonStyle={{}}
                                  buttonWrapStyle={{marginLeft: 10}}
                                  labelStyle={{fontSize: 20, color: '#333333'}}
                                  onPress={(value) => {this.setState({value:value})}}
                                /> */}
                                <TouchableOpacity style={styles.PaymentButton} onPress={()=>this.paymentoption('paypal')}>
                                  <View style={styles.IconText}>
                                    <Image source={require('../../assets/images/paypal.png')}  resizeMode="contain" style={styles.paymentIcon}/>
                                    <Text style={styles.paymentText}>PayPal</Text>
                                  </View>
                                    <Image source={this.state.ispaypalSelected ? require('../../assets/images/icon_radioactive.png'): require('../../assets/images/icon_radiowhite.png')} resizeMode="contain" style={styles.redioButton}/>
                                </TouchableOpacity>
                              </View>
                              <View style={styles.appointmentBox}> 
                                <TouchableOpacity style={styles.PaymentButton} onPress={()=>this.paymentoption('gpay')}>
                                  <View style={styles.IconText}>
                                    <Image source={require('../../assets/images/google.png')}  resizeMode="contain" style={styles.paymentIcon}/>
                                    <Text style={styles.paymentText}>GPay</Text>
                                  </View>
                                  <Image source={this.state.isgpaySelected ? require('../../assets/images/icon_radioactive.png'): require('../../assets/images/icon_radiowhite.png')} resizeMode="contain" style={styles.redioButton}/>
                                </TouchableOpacity>
                              </View>
                              <View style={styles.appointmentBox}> 
                                <TouchableOpacity style={styles.PaymentButton} onPress={()=>this.paymentoption('upi')}>
                                  <View style={styles.IconText}>
                                    <Image source={require('../../assets/images/upi.png')}  resizeMode="contain" style={styles.paymentIcon}/>
                                    <Text style={styles.paymentText}>UPI</Text>
                                  </View>
                                  <Image source={this.state.isupiSelected ? require('../../assets/images/icon_radioactive.png'): require('../../assets/images/icon_radiowhite.png')} resizeMode="contain" style={styles.redioButton}/>
                                </TouchableOpacity>
                                
                              </View>

                              {
                                this.state.pagename !='billing' &&
                                <TouchableOpacity style={[globalStyles.btn, styles.marginTopFive]} onPress={()=>this.navigateToPrescriptionDetails()}>
                                <Text style={globalStyles.btnTextwhite}>Continue</Text>
                              </TouchableOpacity>
                              }
                             
                             {
                                 this.state.pagename =='billing' &&
                                <TouchableOpacity style={[globalStyles.btn, styles.marginTopFive]} onPress={()=>this.navigateToSuccess()}>
                                <Text style={globalStyles.btnTextwhite}>Continue</Text>
                              </TouchableOpacity>
                              }

                            
                          </View>
                      </View>
                  </ScrollView>
              </View>
              </ImageBackground>
          
          <FooterComponents /> 
        </View>
      );
  }

} 
export default PaymentView;
