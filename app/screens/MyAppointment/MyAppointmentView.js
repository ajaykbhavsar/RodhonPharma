import React, { Component } from 'react';
import { get } from 'lodash';
import { Image, Alert, View, StatusBar, TouchableOpacity, ImageBackground, ScrollView, Dimensions, Linking, TurboModuleRegistry } from 'react-native';
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


class MyAppointmentView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      isModalVisible: false,
      selectedItems: '',
      isSelected: false,
      PageIndex: 1,
      PageSize: 50,
      DoctorId: 1,
      CustomerId: 1,
      AppointmentStatusId: 0,
      appointmentresponse: this.props

    }
  }


  componentDidMount() {
    // loadMyappointments
    setTimeout(() => {
      SplashScreen.hide();
    }, 2000)
    // let fontName = 'Roboto'
    // GlobalFont.applyGlobal(fontName)   //<------- Added font family golbally 
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
  navigateToAppointmentDetail = (appointId) => {
    // console.log(appointId); return false;
    navigationActions.navigateToAppointmentDetail(appointId)
  }

  navigateToCancelAppointment = (appointId) => {
    Alert.alert(
      "Cancel Appointment",
      "Do you want to Cancel Appointment?",
      [
        { text: "Cancel", style: 'cancel' },
        { text: "Cancel Appointment", onPress: () => { this.updateAppointment(appointId); }, style: 'cancel' }
      ],
      { cancelable: false }
    );
  };

  updateAppointment = (appointId) => {
    // console.log(appointId);

    var request = {};
    request.appointId = appointId;
    request.StatusId = 40;
    // console.log(request); return false;
    this.props.updateAppointment(request);
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


    const { loading, appointmentresponse } = this.props;

    const appointments = appointmentresponse ? appointmentresponse : [];
    return (

      < View style={[globalStyles.contentSection, styles.container]} >
        {
          get(loading, 'isLoading') && <OverlayActivityIndicatorElement />
        }
        <ImageBackground source={require('../../assets/images/img_back.png')} resizeMode="contain" style={globalStyles.ImageBack}>
          <Statusbar />
          <View style={styles.mainCcnt}>
            <ScrollView>
              <View style={styles.appointmentForm}>

                {
                  appointments.map((item, index) => {
                    return (
                      <TouchableOpacity style={styles.appointmentBox} key={index} onPress={() => this.navigateToAppointmentDetail(item.Id)}>

                        <Text style={styles.titleText}>Appointment No : {item.Id}</Text>
                        <View style={styles.apptdetail}>
                          <View style={styles.apptdetailBox}>
                            <View style={styles.dateandtime}>
                              <View style={styles.dateBox}>
                                <Text style={styles.datettl}>Date:</Text>
                                {/* <Text style={styles.dateformate}>{item.AppointmentDateTime}</Text> */}
                                <Text style={styles.dateformate}>{this.getParsedDate(item.AppointmentDateTime)}</Text>
                              </View>
                              <View style={styles.dateBox}>
                                <Text style={styles.datettl}>Time:</Text>
                                <Text style={styles.dateformate}>{item.Time}</Text>
                              </View>
                            </View>
                            {
                              item.AppointmentStatus == 10 &&
                              <View style={[globalStyles.statusBox, globalStyles.pendingStatus]}>
                                <Text style={globalStyles.statusBoxText}>Pending</Text>
                              </View>
                            }

                            {
                              item.AppointmentStatus == 40 &&
                              <View style={[globalStyles.statusBox, globalStyles.cancelledStatus]}>
                                <Text style={globalStyles.statusBoxText}>Cancelled</Text>
                              </View>
                            }

                            {
                              item.AppointmentStatus == 20 &&
                              <View style={[globalStyles.statusBox, globalStyles.approvedStatus]}>
                                <Text style={globalStyles.statusBoxText}>Approved</Text>
                              </View>
                            }

                            {
                              item.AppointmentStatus == 30 &&
                              <View style={[globalStyles.statusBox, globalStyles.completedStatus]}>
                                <Text style={globalStyles.statusBoxText}>Completed</Text>
                              </View>
                            }


                          </View>
                          {
                            item.AppointmentStatus == 10 &&
                            <TouchableOpacity style={[globalStyles.btnMaronborder, globalStyles.btnMaronborderWidth]} onPress={() => this.navigateToCancelAppointment(item.Id)}>
                              <Text style={globalStyles.btnMaronText}>Cancel Appointment</Text>
                            </TouchableOpacity>

                          }

                        </View>
                      </TouchableOpacity>
                    )
                  })
                }

              </View>
            </ScrollView>
          </View>
        </ImageBackground>

        <FooterComponents />
      </View >
    );
  }

}
export default MyAppointmentView;
