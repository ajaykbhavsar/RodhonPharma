import React, { Component } from 'react';
import { get } from 'lodash';
import { Image, View,Alert, StatusBar, TouchableOpacity, ImageBackground, ScrollView, Dimensions, Linking, TurboModuleRegistry } from 'react-native';
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
import { fetch } from 'app/api/methods/callapi';
import AppStyles from '../../config/styles';


const { color, Typography } = Styles;
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');


class DoctorAppointmentView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      isModalVisible: false,
      selectedItems: '',
      isSelected: false,
      upcomingtab: true,
      completedtab: false,
      cancelledtab: false,
      appointments: [],
    }
  }


  //   componentDidMount() {
  //     setTimeout(() => {
  //       SplashScreen.hide();
  //     }, 2000)
  //     // let fontName = 'Roboto'
  //     // GlobalFont.applyGlobal(fontName)   //<------- Added font family golbally 
  // }

  componentDidMount = async () => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 2000)

  this.doctorAppointments();
    // var searchAppoinment = {};
    // searchAppoinment.PageIndex = 1;
    // searchAppoinment.PageSize = 999;
    // searchAppoinment.CustomerId = '';
    // searchAppoinment.DoctorId = ApiConstants.DoctorId;
    // searchAppoinment.AppointmentStatusId = 0;
    // // console.log('searchAppoinment');
    // // console.log(searchAppoinment);

    // var res = await fetch(ApiConstants.MYAPPOINTMENTS, searchAppoinment, "post");
    // // var result = await fetch(ApiConstants.MYAPPOINTMENTS, searchAppoinment, "post");
    // // console.log("doctorAppointment");
    // // console.log(res.data[1]?.Customer?.FullName); return false;

    
  }

  doctorAppointments = async () =>{
    var searchAppoinment = {};
    searchAppoinment.PageIndex = 1;
    searchAppoinment.PageSize = 999;
    searchAppoinment.CustomerId = '';
    searchAppoinment.DoctorId = ApiConstants.DoctorId;
    searchAppoinment.AppointmentStatusId = 0;
    // console.log('searchAppoinment');
    // console.log(searchAppoinment);

    var res = await fetch(ApiConstants.MYAPPOINTMENTS, searchAppoinment, "post");
    console.log("res");
    console.log(res);
    if (res.Message == "Success") {
      this.setState({ appointments: res.data });
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

  navigateToCancelAppointment = (appointId) => {
    // console.log(appointId);return false;
    var updateType = 'cancel';
    Alert.alert(
      "Cancel Appointment",
      "Do you want to Cancel Appointment?",
      [
        { text: "Cancel", style: 'cancel' },
        { text: "Cancel Appointment", onPress: () => { this.updateAppointment(appointId,updateType); }, style: 'cancel' }
      ],
      { cancelable: false }
    );
  };


  navigateToApproveAppointment = (appointId) => {
    var updateType = 'approve';
    Alert.alert(
      "Cancel Appointment",
      "Do you want to Cancel Appointment?",
      [
        { text: "Cancel", style: 'cancel' },
        { text: "Cancel Appointment", onPress: () => { this.updateAppointment(appointId,updateType); }, style: 'cancel' }
      ],
      { cancelable: false }
    );
  }

  
  updateAppointment = async (appointId,updateType) => {
   

    // var request = {};
    // request.appointId = appointId;
    // request.StatusId = 40;
    // console.log(request); return false;
    if(updateType == 'cancel'){
      var ststusId = 40;
    }
    else{
      var ststusId = 20;
    }
  

    var result = await fetch( ApiConstants.UPDATEAPPOINTMENT + "?AppointmentId=" + appointId + "&StatusId=" + ststusId, null, "get");
    // console.log("cancel result");
    // console.log(result);return false;
    if (result.Message == "Success") {
      this.doctorAppointments();
    }
  }
  // navigateToLogin=()=>{
  //   navigationActions.navigateToLogin()
  // }
  // navigateToHome=()=>{
  //   navigationActions.navigateToHome()
  // }
  navigateToDoctorAppointmentDetail = () => {
    navigationActions.navigateToDoctorAppointmentDetail()
  }

  openTab = (value) => {
    if (value == 'upcoming') {
      this.setState({
        upcomingtab: true,
        completedtab: false,
        cancelledtab: false
      })
    }

    if (value == 'completed') {
      this.setState({
        upcomingtab: false,
        completedtab: true,
        cancelledtab: false
      })
    }

    if (value == 'cancelled') {
      this.setState({
        upcomingtab: false,
        completedtab: false,
        cancelledtab: true
      })
    }
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
    const { loading, loginuser, isDoctortype } = this.props;
    const appointment = this.state.appointments;
  

    // const appointment = [
    //   {
    //     id: 1,
    //     Name: 'Dr. Manoj Patel',
    //     Date: '20/9/2022',
    //     Time: '10:00 am to 10:30 am',
    //     Status: 'Pending'
    //   },
    //   {
    //     id: 2,
    //     Name: 'Dr. Manoj Patel',
    //     Date: '20/9/2022',
    //     Time: '10:00 am',
    //     Status: 'Pending'
    //   },
    //   {
    //     id: 3,
    //     Name: 'Dr. Manoj Patel',
    //     Date: '20/9/2022',
    //     Time: '10:00 am',
    //     Status: 'Cancelled'
    //   },
    //   {
    //     id: 4,
    //     Name: 'Dr. Manoj Patel',
    //     Date: '20/9/2022',
    //     Time: '10:00 am',
    //     Status: 'Completed'
    //   }
    // ]


    


    return (

      <View style={[globalStyles.contentSection, styles.container]}>
        {
          get(loading, 'isLoading') && <OverlayActivityIndicatorElement />
        }
        <ImageBackground source={require('../../assets/images/img_back.png')} resizeMode="contain" style={globalStyles.ImageBack}>
          <Statusbar />
          <View style={styles.mainCcnt}>
            <View style={styles.tabMenuBox}>
              <TouchableOpacity style={[this.state.upcomingtab ? styles.btntabMenuBoxActive : styles.btntabMenuBox]} onPress={() => this.openTab('upcoming')}>
                <Text style={[this.state.upcomingtab ? styles.btntabMenuBoxTextActive : styles.btntabMenuBoxText]} >Upcoming</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[this.state.completedtab ? styles.btntabMenuBoxActive : styles.btntabMenuBox]} onPress={() => this.openTab('completed')}>
                <Text style={[this.state.completedtab ? styles.btntabMenuBoxTextActive : styles.btntabMenuBoxText]} >Completed</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[this.state.cancelledtab ? styles.btntabMenuBoxActive : styles.btntabMenuBox]} onPress={() => this.openTab('cancelled')}>
                <Text style={[this.state.cancelledtab ? styles.btntabMenuBoxTextActive : styles.btntabMenuBoxText]} >Cancelled</Text>
              </TouchableOpacity>
            </View>
            <ScrollView>
              <View style={styles.appointmentForm}>
                {
                  this.state.upcomingtab == true &&
                  <View>
                    {
                      appointment.map((item, index) => {
                        return (
                          <View>

                            {
                              item.AppointmentStatus == '10' ||  item.AppointmentStatus == '20' &&
                              <TouchableOpacity style={styles.appointmentBox} key={index} onPress={() => navigationActions.navigateToDoctorAppointmentDetail()}>
                                <View>

                                  <Text style={styles.titleText}>{item['1']?.Customer?.FullName}</Text>
                                  <View style={styles.apptdetail}>
                                    <View style={styles.apptdetailBox}>
                                      <View style={styles.dateandtime}>
                                        <View style={styles.dateBox}>
                                          <Text style={styles.datettl}>Date:</Text>
                                          <Text style={styles.dateformate}>{this.getParsedDate(item.AppointmentDateTime)}</Text>
                                        </View>
                                        <View style={styles.dateBox}>
                                          <Text style={styles.datettl}>Time:</Text>
                                          <Text style={styles.dateformate}>{item.Time}</Text>
                                        </View>
                                      </View>

                                      <View style={[globalStyles.statusBox, globalStyles.pendingStatus]}>
                                        <Text style={globalStyles.statusBoxText}>{item.AppointmentStatus == 20 ? 'Approved' : ''}</Text>
                                      </View>
                                    </View>
                                    {
                                      item.AppointmentStatus == '10' &&
                                      <TouchableOpacity style={[globalStyles.btnMaronborder, globalStyles.btnMaronborderWidth]} onPress={() => this.navigateToCancelAppointment(item.Id)}>
                                      <Text style={globalStyles.btnMaronText}>Cancel Appointment</Text>
                                    </TouchableOpacity>
                                    }
                                      {
                                      item.AppointmentStatus == '10' &&
                                      <TouchableOpacity style={[globalStyles.btnMaronborder, globalStyles.approvedStatus]} onPress={() => this.navigateToApproveAppointment(item.Id)}>
                                      <Text style={globalStyles.approvedStatus}>Approve Appointment</Text>
                                    </TouchableOpacity>
                                    }

                                  </View>
                                </View>
                              </TouchableOpacity>

                            }
                          </View>


                        )
                      })
                    }
                  </View>
                }

                {
                  this.state.completedtab == true &&
                  <View>
                    {
                      appointment.map((item, index) => {
                        return (
                          <View>

                            {
                              item.AppointmentStatus == '30' &&
                              <TouchableOpacity style={styles.appointmentBox} key={index} onPress={() => navigationActions.navigateToDoctorAppointmentDetail()}>
                                <View>
                                  <Text style={styles.titleText}>{item.Name}</Text>
                                  <View style={styles.apptdetail}>
                                    <View style={styles.apptdetailBox}>
                                      <View style={styles.dateandtime}>
                                        <View style={styles.dateBox}>
                                          <Text style={styles.datettl}>Date:</Text>
                                          <Text style={styles.dateformate}>{this.getParsedDate(item.AppointmentDateTime)}</Text>
                                        </View>
                                        <View style={styles.dateBox}>
                                          <Text style={styles.datettl}>Time:</Text>
                                          <Text style={styles.dateformate}>{item.Time}</Text>
                                        </View>
                                      </View>

                                      <View style={[globalStyles.statusBox, globalStyles.pendingStatus]}>
                                        <Text style={globalStyles.statusBoxText}>{item.Status}</Text>
                                      </View>
                                    </View>


                                  </View>
                                </View>
                              </TouchableOpacity>

                            }
                          </View>


                        )
                      })
                    }
                  </View>
                }

                {
                  this.state.cancelledtab == true &&
                  <View>
                    {
                      appointment.map((item, index) => {
                        return (
                          <View>

                            {
                              item.AppointmentStatus == '40' &&
                              <TouchableOpacity style={styles.appointmentBox} key={index} onPress={() => navigationActions.navigateToDoctorAppointmentDetail()}>
                                <View>
                                  <Text style={styles.titleText}>{item.Name}</Text>
                                  <View style={styles.apptdetail}>
                                    <View style={styles.apptdetailBox}>
                                      <View style={styles.dateandtime}>
                                        <View style={styles.dateBox}>
                                          <Text style={styles.datettl}>Date:</Text>
                                          <Text style={styles.dateformate}>{this.getParsedDate(item.AppointmentDateTime)}</Text>
                                        </View>
                                        <View style={styles.dateBox}>
                                          <Text style={styles.datettl}>Time:</Text>
                                          <Text style={styles.dateformate}>{item.Time}</Text>
                                        </View>
                                      </View>

                                      <View style={[globalStyles.statusBox, globalStyles.pendingStatus]}>
                                        <Text style={globalStyles.statusBoxText}>{item.Status}</Text>
                                      </View>
                                    </View>


                                  </View>
                                </View>
                              </TouchableOpacity>

                            }
                          </View>


                        )
                      })
                    }
                  </View>
                }



              </View>
            </ScrollView>
          </View>
        </ImageBackground>

        <FooterComponents />
      </View>
    );
  }

}
export default DoctorAppointmentView;
