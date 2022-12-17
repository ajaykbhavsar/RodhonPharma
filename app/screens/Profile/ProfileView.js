import React, { Component } from 'react';
import { get } from 'lodash';
import { Image, View, StatusBar, TextInput, TouchableOpacity, ScrollView, Linking, ImageBackground } from 'react-native';
import { Text } from "native-base";
import globalStyles from '../../assets/css/globalStyles';
import styles from './styles';
import { OverlayActivityIndicatorElement, FooterComponents } from '../../components';
import { Statusbar } from '../../components/Statusbar';
import * as navigationActions from '../../actions/navigationActions';

class ProfileView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      selectedItems: '',
    }
  }

  componentDidMount() {

    // let fontName = 'Roboto'
    // GlobalFont.applyGlobal(fontName)   //<------- Added font family golbally 
  }

  navigateToProfileEdit = () => {
    navigationActions.navigateToProfileEdit();
  }

  navigateToSettings = () => {
    navigationActions.navigateToSettings();
  }






  render() {
    const { loading } = this.props;

    return (

      <View style={[globalStyles.contentSection, styles.container]}>
        {
          get(loading, 'isLoading') && <OverlayActivityIndicatorElement />
        }
        <Statusbar />
        <ImageBackground source={require('../../assets/images/img_back.png')} resizeMode="contain" style={globalStyles.ImageBack}>
          <Statusbar />
          <View style={styles.settingsHeader}>
            <View style={styles.profileCntBox}>
              <View style={styles.profilePicBox}>
                <View style={styles.propicBox}>
                  <Image source={require('../../assets/images/profile_pic.png')} resizeMode='contain' style={styles.profilepic} />
                </View>

                <TouchableOpacity style={styles.editBtn} onPress={() => this.navigateToProfileEdit()}>
                  <Image source={require('../../assets/images/icon_editprofile.png')} resizeMode="contain" style={styles.editBtnImage} />
                </TouchableOpacity>
              </View>
              <Text style={styles.profileName}>Vijay Panchal</Text>
              {/* <TouchableOpacity  style={[styles.btn, styles.btnblue]}>
                  <Text style={styles.btnText}>Edit Profile</Text>
                </TouchableOpacity>             */}
            </View>

          </View>
          <ScrollView style={[globalStyles.Pagemargin, styles.SettingsContainer]}>
            <View style={styles.profileData}>
              <View style={styles.profileTitleMain}>
                <Text style={styles.titleProfile}>Profile </Text>
                <TouchableOpacity style={styles.editBtnTwo} onPress={() => this.navigateToProfileEdit()}>
                  <Image source={require('../../assets/images/icon_editprofile.png')} resizeMode="contain" style={styles.editBtnImage} />
                </TouchableOpacity>
              </View>
              <View style={styles.profileDataBox}>
                <Text style={styles.profileLabel}>Mobile Number</Text>
                <Text style={styles.profileValue}>+91 12345 67890</Text>
              </View>
              <View style={styles.profileDataBox}>
                <Text style={styles.profileLabel}>Email</Text>
                <Text style={styles.profileValue}>xyzinfo@gmail.com</Text>
              </View>

              <View style={styles.profileDataBox}>
                <Text style={styles.profileLabel}>Gender</Text>
                <Text style={styles.profileValue}>Male</Text>
              </View>
              <View style={styles.profileDataBox}>
                <Text style={styles.profileLabel}>Address</Text>
                <Text style={styles.profileValue}>B-405, SkyAvenue, Bhavnagar India</Text>
              </View>
              <View style={[styles.dividerbox, styles.mtbfour]}>
              </View>
              {/* <TouchableOpacity style={styles.BtnEdit} onPress={()=>this.navigateToProfileEdit()}>
                      <Text style={styles.profileLabel}>Edit Profile</Text>
                      <Image source={require('../../assets/images/icon_leftarrowmeun.png')} resizeMode="contain"  style={styles.leftArrow} />
                    </TouchableOpacity>      */}
              {/* <View style={[styles.dividerbox, styles.mtbfour]}>
                    </View>
                    <TouchableOpacity style={[styles.btndarkBlue, styles.btn]}>
                        <Text style={styles.btnText}>Log Out</Text>
                    </TouchableOpacity>        */}
            </View>
          </ScrollView>
        </ImageBackground>
        <FooterComponents settingstabactive={true} />
      </View>
    );
  }

}
export default ProfileView;
