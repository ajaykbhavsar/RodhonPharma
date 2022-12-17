import React, { Component } from 'react';
import { get } from 'lodash';
import {Image, View, StatusBar, TextInput ,TouchableOpacity, ScrollView, Linking, Dimensions,ImageBackground } from 'react-native';
import { Text } from "native-base";
import globalStyles from '../../assets/css/globalStyles';
import styles from './styles';
import { OverlayActivityIndicatorElement, FooterComponents } from '../../components';
import {Statusbar} from '../../components/Statusbar';
import SelectDropdown from 'react-native-select-dropdown';
import * as navigationActions from '../../actions/navigationActions';
import Styles from '../../config/styles';
const { color, Typography} = Styles;
const { width: viewportWidth , height: viewportHeight } = Dimensions.get('window');
class ProfileEditView extends Component {
 
  constructor(props) {
    super(props);
    this.state = { 
      activeIndex:0,    
      selectedItems:'',
    } 
  }

  componentDidMount() {
 
    // let fontName = 'Roboto'
    // GlobalFont.applyGlobal(fontName)   //<------- Added font family golbally 
}

navigateToProfile=()=>{
  navigationActions.navigateToProfile();
}



  


  render() {
    const { loading} = this.props;   
    const countries = ["Male", "Female"]
      return (

        <View style={[globalStyles.contentSection, styles.container]}>
        {
          get(loading, 'isLoading') && <OverlayActivityIndicatorElement />
        }
        <Statusbar />
        <ImageBackground source={require('../../assets/images/img_back.png')} resizeMode="contain" style={globalStyles.ImageBack}>
        <View style={styles.settingsHeader}>
          {/* <TouchableOpacity style={styles.BtnClose} onPress={()=>this.navigateToProfile()}>
              <Image source={require('../../assets/images/img_backarrow.png')} resizeMode="contain" style={styles.BtnCloseImage}/>
          </TouchableOpacity> */}
           <View style={styles.profileCntBox}>
              <View style={styles.profilePicBox}>
                <View style={styles.propicBox}>
                  <Image source={require('../../assets/images/profile_pic.png')} resizeMode='contain' style={styles.profilepic}/>
                </View>
              </View>  
              <Text style={styles.profileName}>Vijay Panchal</Text> 
              {/* <View style={styles.AddressBox}>
                  <Image source={require('../../assets/images/icon_locationbox.png')} resizeMode="contain" style={styles.locationImage}/>
                  <Text  style={styles.AddressBoxText}>Ajwa, Vadodara</Text>  
              </View>  */}
              {/* <TouchableOpacity  style={[styles.btn, styles.btnblue]}>
                <Text style={styles.btnText}>Edit Profile</Text>
              </TouchableOpacity>             */}
           </View>
          
        </View> 
        <ScrollView style={[globalStyles.Pagemargin, styles.SettingsContainer]}> 
            <View style={styles.profileData}> 
                  {/* <Text style={styles.titleProfile}>Profile Edit </Text> */}
                  <View style={styles.formMainbox}>
                        <View style={styles.formGroup}>
                          <Text style={styles.labelText}>Name</Text>
                          <TextInput style={styles.formFields}></TextInput>
                        </View>                        
                       
                        <View style={styles.formGroup}>
                          <Text style={styles.labelText}>Email</Text>
                          <TextInput style={styles.formFields}></TextInput>
                        </View>
                        <View style={styles.formGroup}>
                          <Text style={styles.labelText}>Phone</Text>
                          <TextInput style={styles.formFields}></TextInput>
                        </View>
                        <View style={styles.formGroup}>
                          <Text style={styles.labelText}>Address</Text>
                          <TextInput style={styles.formFields}></TextInput>
                        </View>
                        <View style={styles.formGroup}>
                          <TouchableOpacity style={[globalStyles.btn]}>
                          <Text style={ globalStyles.btnSignuptext}>Save</Text>
                          </TouchableOpacity>
                        </View> 

                       
                  </View>
                     
            </View>
        </ScrollView>  
        </ImageBackground>
          <FooterComponents settingstabactive={true}/>   
      </View>
      );
  }

} 
export default ProfileEditView;
