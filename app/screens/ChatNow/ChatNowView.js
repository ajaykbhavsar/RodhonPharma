import React, { Component } from 'react';
import { get } from 'lodash';
import { Image, View, StatusBar, Keyboard, TouchableOpacity, ImageBackground, ScrollView, Dimensions, Linking, TurboModuleRegistry } from 'react-native';
import { Text } from "native-base";
import globalStyles from '../../assets/css/globalStyles';
import styles from './styles';
import Carousel from 'react-native-snap-carousel';
import { FooterComponents } from '../../components/FooterComponents';
import { OverlayActivityIndicatorElement } from '../../components';
import SplashScreen from 'react-native-splash-screen';
import { Statusbar } from '../../components/Statusbar';
import ApiConstants from '../../api/ApiConstants';
import SelectDropdown from 'react-native-select-dropdown';
import * as navigationActions from '../../actions/navigationActions';
import Styles from '../../config/styles';
import { TextInput } from 'react-native-gesture-handler';
import CheckBox from '@react-native-community/checkbox';
import { fetch } from '../../api/methods/callapi';

const { color, Typography } = Styles;
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');


class ChatNowView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      isModalVisible: false,
      selectedItems: '',
      isSelected: false,
      Complaint: [],
      msgText: '',
      SymptomsId: 0,
    }
  }


  // componentDidMount() {
  //   setTimeout(() => {
  //     SplashScreen.hide();
  //   }, 2000)
  //   // let fontName = 'Roboto'
  //   // GlobalFont.applyGlobal(fontName)   //<------- Added font family golbally 
  // }


  componentDidMount = async () => {

    setTimeout(() => {
      SplashScreen.hide();
    }, 2000)

    this.getAppointmentDetails();

  }

  toggleModal = () => {
    this.setState({
      isModalVisible: !this.state.isModalVisible,
    })

  };


  setChangeBox = () => {
    this.setState({ isSelected: !this.state.isSelected });
  }


  navigateToLogin = () => {
    navigationActions.navigateToLogin()
  }
  navigateToHome = () => {
    navigationActions.navigateToHome()
  }
  navigateToProfile = () => {
    navigationActions.navigateToProfile()
  }

  navigateToAddPrescription = () => {
    navigationActions.navigateToAddPrescription()
  }

  getParsedDate(strDate) {//get date formate
    if (strDate != "") {
      let month_names = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      var strSplitDate = String(strDate).split('T');

      var dateArray = strSplitDate[0].split('-');
      let monthint = parseInt(dateArray[1]);
      var date = new Date(strSplitDate[0]);
      date = month_names[monthint - 1] + " " + dateArray[2] + ", " + dateArray[0];
      return date;
    }
    return "";
  }

  addComplain = async (appointId) => {


    var request = {};
    request.AppointmentId = appointId;
    request.SymptomsId = this.state.SymptomsId;
    request.Details = this.state.msgText;
    request.CustomerId = this.props.loginuser.Id;
    request.DoctorId = 0;
    request.CreatedOnUtc = "2022-11-29T13:48:47.316Z";
    request.UpdatedOnUtc = "2022-11-29T13:48:47.316Z";
    request.Deleted = true;


    var result = await fetch(ApiConstants.SAVECOMPLAINT, request, "post");

    if (result.Message == 'Success') {
      Keyboard.dismiss();
      this.setState({ msgText: "" });
      this.getAppointmentDetails();
    }
  }

  getAppointmentDetails = async () => {
    var result = await fetch(ApiConstants.APPOINTMENTDETAIL + "?Id=" + this.props.navigation.state.params, null, "get");

    if (result.Message == "Success") {
      this.setState({ Complaint: result.data.Complaints });
      if (result.data.Complaints?.length > 0) {
        this.setState({ SymptomsId: result.data.Complaints[0].SymptomsId })
      }
    }
  }

  render() {
    const { loading, loginuser, loginuserType, disabled = true } = this.props;

    const complaints = this.state.Complaint == [] ? null : this.state.Complaint;
   
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
                  <View style={styles.appointmentBox}>
                    {
                      complaints != '' && complaints != null &&
                      complaints.map((item, index) => {
                        return (

                          <>
                            {
                              loginuser.Id == item.DoctorId &&
                              <View style={[styles.ChatTextBox, styles.PinkBox]}  >
                                <Text style={styles.ChatTextBoxText}>
                                  {item.Details}
                                </Text>
                                <Image source={require('../../assets/images/icon_chattrue.png')} resizeMode="contain" style={styles.chatTueICon} />
                                <Text style={styles.ChatDate}>{this.getParsedDate(item.CreatedOnUtc)}</Text>
                              </View>
                            }
                            {
                              loginuser.Id == item.CustomerId &&
                              <View style={[styles.ChatTextBox, styles.GrayBox]}>
                                <Text style={styles.grayChatTextBoxText}>
                                  {item.Details}
                                </Text>
                                <Image source={require('../../assets/images/icon_chattrue.png')} resizeMode="contain" style={styles.chatTueICon} />
                                <Text style={styles.ChatDate}>{this.getParsedDate(item.CreatedOnUtc)}</Text>
                              </View>
                            }

                          </>
                        )
                      })
                    }
                  </View>
                </View>
              </View>

              <View style={styles.appointmentForm}>

              </View>
            </ScrollView>
          </View>
        </ImageBackground>
        {
          loginuserType == true &&
          <TouchableOpacity style={styles.btnAddPrescription} onPress={() => this.navigateToAddPrescription()}>
            <Text style={styles.btnAddPrescriptionText}>Add Prescription </Text>
          </TouchableOpacity>
        }

        <View style={styles.ChatTextBoxarea}>
          <View style={styles.AttachmentTextIcon}>
            <TextInput
              multiline={true}
              numberOfLines={3}
              onChangeText={(msgText) => this.setState({ msgText })}
              value={this.state.msgText}
              style={styles.ChatText}
            />
            <TouchableOpacity style={styles.attachmentBox}>
              <Image source={require('../../assets/images/icon_attachment.png')} resizeMode="contain" style={styles.iconAttachments} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.attachmentBox}>
              <Image source={require('../../assets/images/camera.png')} resizeMode="contain" style={styles.iconCamera} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.SendbtnBox} disabled={this.state.msgText == "" ? disabled : ''} onPress={() => this.addComplain(this.props.navigation.state.params)}>
            <Image source={require('../../assets/images/send.png')} resizeMode="contain" style={styles.iconSend} />
          </TouchableOpacity>
        </View>
        <FooterComponents />
      </View>
    );
  }

}
export default ChatNowView;
