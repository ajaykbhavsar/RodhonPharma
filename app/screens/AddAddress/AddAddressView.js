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
 

class AddAddressView extends Component {
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

navigateToBookAppointment=()=>{
  navigationActions.navigateToBookAppointment();
 
}

navigateToBillingShipping=()=>{
  navigationActions.navigateToBillingShipping();
 
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
                            <View  style={styles.TextBoxontainer}>
                                <TextInput
                                  placeholder='Enter Name'
                                  placeholderTextColor='#A7A7A7'
                                  style={styles.TextBoxArea}
                                />
                            </View>
                            <View  style={styles.TextBoxontainer}>
                                <TextInput
                                  placeholder='Enter Email'
                                  placeholderTextColor='#A7A7A7'
                                  style={styles.TextBoxArea}
                                />
                            </View>
                            <View  style={styles.TextBoxontainer}>
                                <TextInput
                                  placeholder='Phone No.'
                                  placeholderTextColor='#A7A7A7'
                                  style={styles.TextBoxArea}
                                />
                            </View>
                            <View  style={styles.TextBoxontainer}>
                                <TextInput
                                  placeholder='Enter Address'
                                  placeholderTextColor='#A7A7A7'
                                  style={styles.TextBoxArea}
                                />
                            </View>
                            <View  style={styles.TextBoxontainer}>
                                <TextInput
                                  placeholder='Enter City'
                                  placeholderTextColor='#A7A7A7'
                                  style={styles.TextBoxArea}
                                />
                            </View>
                            <View  style={styles.TextBoxontainer}>
                                <TextInput
                                  placeholder='Enter State'
                                  placeholderTextColor='#A7A7A7'
                                  style={styles.TextBoxArea}
                                />
                            </View>
                            <View  style={styles.TextBoxontainer}>
                                <TextInput
                                  placeholder='Enter Country'
                                  placeholderTextColor='#A7A7A7'
                                  style={styles.TextBoxArea}
                                />
                            </View>
                            
                          
                          

                      
              
              
                        </View>                          
                      </View>
                  </ScrollView>
                  <TouchableOpacity style={[styles.btn, styles.btnConsult]}  onPress={()=>this.navigateToBillingShipping()}>
                    <Text style={styles.btnText}>Submit</Text>
                  </TouchableOpacity>
              </ImageBackground>          
          
        </View>
      );
  }

} 
export default AddAddressView;
