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
const { color, Typography} = Styles;
const { width: viewportWidth , height: viewportHeight } = Dimensions.get('window');
 

class DoctorAppointmentDetailView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex:0,    
      isModalVisible:false,  
      selectedItems:'', 
      isSelected:false,
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
  navigateToPayment=()=>{
    navigationActions.navigateToPayment()
  }

  


  
  render() {
    const { loading} = this.props; 
   
    const appointment = 
      {
        id:1,
        Name:'Dr. Manoj Patel',
        Degree:'MBBS',
        Date:'20/9/2022',
        Time: '10:00 am to 10:30 am',
        Status:'Pending',
        Symptoms:'Body Fever',
        Complaint:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.  ',
        Emergency:true,
      }
       
    


    
     

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
                          appointment!='' &&   appointment!=null &&
                         
                          <View>
                            <View style={[styles.appointmentBox, styles.doctorNameBox]}>
                                <View style={styles.DoctorImagebox}>
                                    <Image source={require('../../assets/images/doctor.png')} resizeMode="contain"  style={styles.doctorPic}/>
                                </View>
                                <View style={styles.DoctorTextDetails}>
                                    <Text style={styles.titleText}>{appointment.Name}</Text>
                                    <Text style={styles.DegreeText}>{appointment.Degree}</Text>
                                </View>
                            </View>
                              <View style={styles.appointmentBox}>                              
                             
                              <View style={styles.apptdetail}>
                                  <View style={styles.subTitle}>
                                        <Text style={styles.subTitleText}>dddScheduled Appointment</Text>
                                  </View>
                                  <View style={styles.apptdetailBox}>                                   
                                    <View style={styles.dateandtime}>
                                        <View style={styles.dateBox}>
                                            <Text style={styles.datettl}>Date:</Text> 
                                            <Text style={styles.dateformate}>{appointment.Date}</Text>
                                        </View>
                                        <View style={styles.dateBox}>
                                            <Text style={styles.datettl}>Time:</Text>
                                             <Text style={styles.dateformate}>{appointment.Time}</Text>
                                        </View>
                                    </View>
                                  </View>
                                  <View style={[styles.subTitle, styles.martopten, styles.marginTopFive]}>
                                        <Text style={styles.subTitleText}>Symptoms</Text>                                        
                                  </View>
                                  <Text style={styles.symptomsText}>Body Fever</Text>

                                  <View style={[styles.subTitle, styles.martopten, styles.marginTopFive]}>
                                        <Text style={styles.subTitleText}>Complaint</Text>                                        
                                  </View>
                                  <Text style={styles.symptomsText}>Body temperatures vary slightly from person to person
                                  and at different times of day. </Text>
                                  <View style={styles.detailButtonBox}>
                                    {
                                      appointment.Status == 'Pending' &&
                                      <TouchableOpacity style={globalStyles.DetailbtnMaronborder} onPress={()=>navigationActions.navigateToProfile()}>
                                          <Text style={globalStyles.DetailsbtnMaronText}>Cancel Appointment</Text>
                                      </TouchableOpacity> 
                                    }
                                    <TouchableOpacity style={[styles.btnCallNow, styles.btnCallNowOrange]}>
                                        <Text style={styles.btnCallNowText}>Call Now</Text>
                                        <Image source={require('../../assets/images/icon_call.png')} resizeMode="contain" style={styles.btnCallImage}/>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={[styles.btnCallNow, styles.btnCallNowgreen]} onPress={()=>navigationActions.navigateToChatNow()}>
                                        <Text style={styles.btnCallNowText}>Chat Now</Text>
                                        <Image source={require('../../assets/images/icon_chat.png')} resizeMode="contain" style={styles.btnCallImage}/>
                                    </TouchableOpacity>
                                   </View>

                                   <View style={styles.presciptionBox}>
                                      <Text style={styles.symptomsTextDownooad}>Your Prescription is Ready</Text>
                                      <TouchableOpacity style={styles.btnDownload} onPress={()=>this.navigateToPayment()}>
                                        <Text style={styles.btnDownloadText}>Download</Text>
                                      </TouchableOpacity>
                                   </View>
                                                                  
                              </View>
                          </View>
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
export default DoctorAppointmentDetailView;
