import React, { Component } from 'react';
import { get } from 'lodash';
import {Image, View, StatusBar ,TouchableOpacity, ImageBackground, ScrollView, Linking } from 'react-native';
import { Text } from "native-base";
import globalStyles from '../../assets/css/globalStyles';
import styles from './styles'; 
import { FooterComponents } from '../../components/FooterComponents';
import { OverlayActivityIndicatorElement } from '../../components';
import SplashScreen from 'react-native-splash-screen';
import {Statusbar} from '../../components/Statusbar';
import ApiConstants from '../../api/ApiConstants';
import SearchableDropdown from 'react-native-searchable-dropdown';
import * as navigationActions from '../../actions/navigationActions'; 
import Modal from "react-native-modal";
import { TextInput } from 'react-native-gesture-handler';
 

class SuccessView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex:0,    
      selectedItems:'',   
      isModalVisible:false, 
    } 
  }

  componentDidMount() {
    setTimeout(() => {
      SplashScreen.hide();
    }, 2000)
    // let fontName = 'Roboto'
    // GlobalFont.applyGlobal(fontName)   //<------- Added font family golbally 
}

  toggleModal = () => {
    this.setState({
      isModalVisible:!this.state.isModalVisible,
    })
 
};

navigateToOrderDetails=()=>{
  navigationActions.navigateToOrderDetails();
 
}

navigateToOnlineOrder=()=>{
  navigationActions.navigateToOnlineOrder();
 
}


  render() {
    const { loading} = this.props; 

      return (

        <View style={[globalStyles.contentSection, styles.container]}>
          {
            get(loading, 'isLoading') && <OverlayActivityIndicatorElement />
          }
              <ImageBackground source={require('../../assets/images/img_back.png')} resizeMode="contain" style={styles.ImageBack}>
                  <Statusbar />
                  <ScrollView>
                      <View style={styles.mainCcnt}>
                        <View style={styles.DetailpageContainer}>
                          <View style={styles.SuccessBox}>
                              <Text style={styles.successTitle}>Success!</Text>
                              <Image source={require('../../assets/images/check-mark.png')} resizeMode='contain'  style={styles.chckTrue} />
                             <View style={styles.SucessTextBox}>
                                  <Text style={styles.thankYou}>Thank you for shopping</Text>
                                  <Text style={styles.thankYouText}>Your items has been placed and is on it's way to being processed</Text>
                              </View>
                              <TouchableOpacity style={[styles.btn, styles.btnConsult]}  onPress={()=>this.navigateToOrderDetails()}>
                              <Text style={styles.btnText}>Order Details</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.btn, styles.btnConsult, styles.backToshop]}  onPress={()=>this.navigateToOnlineOrder()}>
                              <Text style={[styles.btnText, styles.backToshopText]}>Back to Shop</Text>
                            </TouchableOpacity>
                          </View>              
                        </View>                          
                      </View>
                  </ScrollView>
                 
              </ImageBackground>          
          
        </View>
      );
  }

} 
export default SuccessView;
