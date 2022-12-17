import React, { Component } from 'react';
import { get } from 'lodash';
import { Image, View, StatusBar, TouchableOpacity, ImageBackground, ScrollView, Dimensions, Linking, TurboModuleRegistry } from 'react-native';
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
import { fetch } from 'app/api/methods/callapi'

const { color, Typography } = Styles;
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');


class AppointmentDetailView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      isModalVisible: false,
      selectedItems: '',
      isSelected: false,
      appointmentOtherDetail: [],
      appointmentDetail: []
    }
  }


  componentDidMount = async () => {

    setTimeout(() => {
      SplashScreen.hide();
    }, 2000)

    var result = await fetch(ApiConstants.APPOINTMENTDETAIL + "?Id=" + this.props.navigation.state.params, null, "get");

    if (result.Message == "Success") {
      this.setState({ appointmentDetail: result.data });
      this.setState({ appointmentOtherDetail: result.otherdetail });
    }
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

  navigateToChatNow = (appointId) => {
    navigationActions.navigateToChatNow(appointId);
  }
  navigateToPayment = () => {
    navigationActions.navigateToPayment()
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


  render() {
    const { loading } = this.props;

    const appointmentDetail = this.state.appointmentDetail == null ? [] : this.state.appointmentDetail;
    const appointmentOtherDetail = this.state.appointmentOtherDetail == null ? [] : this.state.appointmentOtherDetail;





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

                {
                  appointmentDetail != null &&

                  <View>
                    <View style={[styles.appointmentBox, styles.doctorNameBox]}>
                      <View style={styles.DoctorImagebox}>
                        <Image source={require('../../assets/images/doctor.png')} resizeMode="contain" style={styles.doctorPic} />
                      </View>
                      <View style={styles.DoctorTextDetails}>
                        <Text style={styles.titleText}>{appointmentOtherDetail?.DoctorName}</Text>
                        <Text style={styles.DegreeText}>{appointmentOtherDetail?.DoctorQualification}</Text>
                      </View>
                    </View>
                    <View style={styles.appointmentBox}>

                      <View style={styles.apptdetail}>
                        <View style={styles.subTitle}>
                          <Text style={styles.subTitleText}>Scheduled Appointment</Text>
                        </View>
                        <View style={styles.apptdetailBox}>
                          <View style={styles.dateandtime}>
                            <View style={styles.dateBox}>
                              <Text style={styles.datettl}>Date:</Text>
                              <Text style={styles.dateformate}>{this.getParsedDate(appointmentDetail.AppointmentDateTime)}</Text>
                            </View>
                            <View style={styles.dateBox}>
                              <Text style={styles.datettl}>Time:</Text>
                              <Text style={styles.dateformate}>{appointmentDetail.Time}</Text>
                            </View>
                          </View>
                        </View>
                        <View style={[styles.subTitle, styles.martopten, styles.marginTopFive]}>
                          <Text style={styles.subTitleText}>Symptoms</Text>
                        </View>
                        <Text style={styles.symptomsText}>{appointmentOtherDetail?.Symptoms}</Text>

                        <View style={[styles.subTitle, styles.martopten, styles.marginTopFive]}>
                          <Text style={styles.subTitleText}>Complaint</Text>
                        </View>
                        <Text style={styles.symptomsText}>{appointmentOtherDetail?.ComplaintDetail}</Text>
                        <View style={styles.detailButtonBox}>
                          {
                            appointmentDetail.AppointmentStatus == 10 &&
                            <TouchableOpacity style={globalStyles.DetailbtnMaronborder} onPress={() => navigationActions.navigateToProfile()}>
                              <Text style={globalStyles.DetailsbtnMaronText}>Cancel Appointment</Text>
                            </TouchableOpacity>
                          }
                          <TouchableOpacity style={[styles.btnCallNow, styles.btnCallNowOrange]}>
                            <Text style={styles.btnCallNowText}>Call Now</Text>
                            <Image source={require('../../assets/images/icon_call.png')} resizeMode="contain" style={styles.btnCallImage} />
                          </TouchableOpacity>
                          <TouchableOpacity style={[styles.btnCallNow, styles.btnCallNowgreen]} onPress={() => this.navigateToChatNow(appointmentDetail.Id)}>
                            <Text style={styles.btnCallNowText}>Chat Now</Text>
                            <Image source={require('../../assets/images/icon_chat.png')} resizeMode="contain" style={styles.btnCallImage} />
                          </TouchableOpacity>
                        </View>
                        {appointmentDetail.AppointmentStatus == 30 && appointmentDetail.PaymentStatus == 30 &&
                          <View style={styles.presciptionBox}>
                            <Text style={styles.symptomsTextDownooad}>Your Prescription is Ready</Text>
                            <TouchableOpacity style={styles.btnDownload} onPress={() => this.navigateToPayment()}>
                              <Text style={styles.btnDownloadText}>Download</Text>
                            </TouchableOpacity>
                          </View>
                        }


                      </View>
                    </View>
                  </View>


                }

              </View>
            </ScrollView>
          </View>
        </ImageBackground >

        <FooterComponents />
      </View >
    );
  }

}
export default AppointmentDetailView;
