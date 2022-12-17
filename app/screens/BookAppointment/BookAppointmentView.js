import React, { Component } from 'react';
import { get } from 'lodash';
import { Image, View, StatusBar, ToastAndroid, TouchableOpacity, ImageBackground, ScrollView, Dimensions, Linking } from 'react-native';
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
import { saveAppointment, loadSymptoms } from 'app/api/methods/callapi';
import DatePicker from 'react-native-date-picker';

const { color, Typography } = Styles;
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');


class BookAppointmentView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      setOpenNew: false,
      isModalVisible: false,
      selectedItems: '',
      isSelected: false,
      SymptomsList: [],
      isValidSymptom: false,
      errorMessagesymptom: true,
      isValidAppointDate: false,
      errorMessageappointdate: true,
      isValidAppointSlot: false,
      errorMessageappointslot: true,
      addappointment: {
        symptom: '',
        startdate: '',
        timeslot: '',
        complaint: '',
        emergencyapointment: false,
        customerId: this.props.loginUserId
      }
    }
  }


  componentDidMount = async () => {
    var result = await loadSymptoms();
    console.log("load appointment details")

    if (result.Message == "Success") {
      this.setState({ SymptomsList: result.data });
    }
    setTimeout(() => {
      SplashScreen.hide();
    }, 2000)
  }

  toggleModal = () => {
    this.setState({
      isModalVisible: !this.state.isModalVisible,
    })

  };


  setChangeBox = () => {
    this.setState(prevState => ({
      addappointment: {                   // object that we want to update
        ...prevState.addappointment, // keep all other key-value pairs
        emergencyapointment: !this.state.addappointment.emergencyapointment
      }
    }), function () {
    });
  }


  navigateToLogin = () => {
    navigationActions.navigateToLogin()
  }

  selectSymptons = (symptonId) => {
    // this.setState({ symptom: this.state.addappointment.symptom });
    this.setState(prevState => ({
      addappointment: {                   // object that we want to update
        ...prevState.addappointment, // keep all other key-value pairs
        symptom: symptonId
      }
    }), function () {
    });


  }

  settimeSlot = (timeSlot) => {

    this.setState(prevState => ({
      addappointment: {                   // object that we want to update
        ...prevState.addappointment, // keep all other key-value pairs
        timeslot: timeSlot
      }
    }), function () {
    });
  }

  onValueChange = (fieldName, value) => {

    this.setState(prevState => ({
      addappointment: {                   // object that we want to update
        ...prevState.addappointment, // keep all other key-value pairs
        [fieldName]: value
      }
    }), function () {
    });


  }

  getParsednewAddDate(strDate) {//get date formate
    console.log('strDateNew');
    console.log(strDate);
    if (strDate != "") {
      let dateString = strDate;
      dateString = new Date(dateString).toUTCString();
      dateString = dateString.split(' ').slice(0, 4).join(' ');


      let month_names = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      let strSplitDate = String(dateString).split(', ');

      let stringArray = strSplitDate[1];
      let dateArray = stringArray.split(' ');
      let monthint = month_names.indexOf(dateArray[1]) + 1;
      // var date = new Date(strSplitDate[0]);
      let date = dateArray[2] + "-" + monthint + "-" + dateArray[0];

      console.log('date');
      console.log(date);



      this.setState({
        changeAddDate: true,
        fromdatefilter: strDate
      });

      this.setState(prevState => ({
        addappointment: {                   // object that we want to update
          ...prevState.addappointment, // keep all other key-value pairs
          startdate: date
        }
      }), function () {
      });
    }

  }


  openDatepickerNew(value) {

    this.setState({
      setOpenNew: value
    })
  }

  addAppointment = () => {
    if (this.validateBookappointment()) {
      this.props.onaddAppointment(this.state.addappointment);
    }
  }

  validateBookappointment = () => {
    let isValidSymptom;
    let isValidAppointDate;
    let isValidAppointSlot;


    let allInputsValidated;

    if (this.state.addappointment.symptom == '') {
      ToastAndroid.show("Please Select Symptom", ToastAndroid.SHORT);
      isValidSymptom = false;
    } else {
      isValidSymptom = true;
    }

    if (this.state.addappointment.startdate == '') {
      ToastAndroid.show("Please  Select Appointment Date", ToastAndroid.SHORT);
      isValidAppointDate = false;
    } else {
      isValidAppointDate = true;
    }

    if (this.state.addappointment.timeslot == '') {
      ToastAndroid.show("Please  Select Appointment Time slot", ToastAndroid.SHORT);
      isValidAppointSlot = false;
    } else {
      isValidAppointSlot = true;
    }

    if (isValidSymptom &&
      isValidAppointDate && isValidAppointSlot) {
      allInputsValidated = true;

    }
    else {
      ToastAndroid.show("Please check all fields", ToastAndroid.SHORT);
    }

    this.setState({
      isValidSymptom: isValidSymptom,
      errorMessagesymptom: !isValidSymptom,
      isValidAppointDate: isValidAppointDate,
      errorMessageappointdate: !isValidAppointDate,
      isValidAppointSlot: isValidAppointSlot,
      errorMessageappointslot: !isValidAppointSlot
    });
    return allInputsValidated;

  }

  render() {
    const { loading, loginuser } = this.props;
    const timeslot = ["10:00 am  to  10:15 am", "10:15 am  to  10:30 am", "10:30 am  to  10:45 am", "10:45 am  to  11:00 am",
      "11:00 am  to  11:15 am", "11:15 am  to  11:30 am", "11:30 am  to  11:45 am", "11:45 am  to  12:00 noon",
      "12:00  noon to 12:15 pm", "12:15 pm  to  12:30 pm", "12:30 pm  to  12:45 pm", "12:45 pm  to  13:00 pm",
      "17:00 pm  to  17:15 pm", "17:15 pm  to  17:30 pm", "17:30 pm  to  17:45 pm", "17:45 pm  to  18:00 pm",
      "18:00 pm  to 18:15 pm", "18:15 pm  to 18:30 pm", "18:30 pm  to  18:45 pm", "18:45 pm  to  19:00 pm",
      "19:00 pm  to  19:15 pm", "19:15 pm  to  19:30 pm", "19:30 pm  to  19:45 pm", "19:45 pm  to  20:00 pm"]


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
                <View style={globalStyles.formElements}>
                  <SelectDropdown
                    data={this.state.SymptomsList}
                    buttonStyle={{ backgroundColor: 'transparent', marginTop: viewportWidth * 0.02, borderWidth: 1, borderColor: '#C8CED4', borderRadius: viewportWidth * 0.015, paddingHorizontal: viewportWidth * 0.03, marginHorizontal: 0, width: '100%', paddingVertical: 0, height: viewportWidth * 0.11 }}
                    buttonTextStyle={{ textAlign: 'left', marginVertical: 0, marginHorizontal: 0, fontFamily: Typography.FONT_RALEWAY_REGULAR, fontSize: Typography.FONT_SIZE18, width: '100%' }}
                    // isvalidInput={this.state.isValidSymptom}
                    onSelect={(selectedItem, index) => {
                      this.selectSymptons(selectedItem.Id)
                      this.state.isValidSymptom
                    }}
                    renderDropdownIcon={isOpened => {
                      return <Image source={require('../../assets/images/Expand_btn.png')} resizeMode="contain" style={styles.downIcon} />;
                    }}
                    defaultButtonText={'Select Symptoms'}
                    buttonTextAfterSelection={(selectedItem, index) => {
                      // text represented after item is selected
                      // if data array is an array of objects then return selectedItem.property to render after item is selected
                      return selectedItem.Name
                    }}
                    rowTextForSelection={(item, index) => {
                      // text represented for each item in dropdown
                      // if data array is an array of objects then return item.property to represent item in dropdown
                      return item.Name
                    }}
                    search
                    searchInputStyle={styles.dropdown1searchInputStyleStyle}
                    searchPlaceHolder={'Search here'}
                    searchPlaceHolderColor={'darkgrey'}
                  // renderSearchInputLeftIcon={() => {
                  //   return <FontAwesome name={'search'} color={'#444'} size={18} />;
                  // }}
                  />
                </View>
                <View style={globalStyles.formElements}>
                  {/* <TextInput
                    style={globalStyles.TextBoxControl}
                    placeholder='Select Date'
                    placeholderTextColor="#333"
                  /> */}
                  <TouchableOpacity onPress={() => this.openDatepickerNew(true)} isvalidInput={this.state.isValidAppointDate} style={styles.datepickerBtn}>

                    <Text style={styles.textInput}>{this.state.addappointment.startdate} </Text>
                    <Image source={require('../../assets/images/img/calendar.png')} resizeMode="contain" style={styles.calendarImage} />


                  </TouchableOpacity>

                  <DatePicker
                    modal
                    mode="date"
                    open={this.state.setOpenNew}
                    date={new Date()}
                    onConfirm={(date) => {
                      this.openDatepickerNew(false)
                      // setDate(date)
                      this.getParsednewAddDate(date)
                    }}
                    onCancel={() => {
                      this.openDatepickerNew(false)
                    }}
                  />
                </View>
                <View style={globalStyles.formElements}>
                  <SelectDropdown
                    data={timeslot}
                    buttonStyle={{ backgroundColor: 'transparent', borderWidth: 1, borderColor: '#C8CED4', borderRadius: viewportWidth * 0.015, paddingHorizontal: viewportWidth * 0.03, marginHorizontal: 0, width: '100%', paddingVertical: 0, height: viewportWidth * 0.11 }}
                    buttonTextStyle={{ textAlign: 'left', marginVertical: 0, marginHorizontal: 0, fontFamily: Typography.FONT_RALEWAY_REGULAR, fontSize: Typography.FONT_SIZE18, width: '100%' }}
                    onSelect={(selectedItem, index) => {
                      this.settimeSlot(selectedItem);
                      this.state.isValidAppointSlot
                    }}
                    renderDropdownIcon={isOpened => {
                      return <Image source={require('../../assets/images/Expand_btn.png')} resizeMode="contain" style={styles.downIcon} />;
                    }}
                    defaultButtonText={'Select Time Slot'}
                    buttonTextAfterSelection={(selectedItem, index) => {
                      // text represented after item is selected
                      // if data array is an array of objects then return selectedItem.property to render after item is selected
                      return selectedItem
                    }}
                    rowTextForSelection={(item, index) => {
                      // text represented for each item in dropdown
                      // if data array is an array of objects then return item.property to represent item in dropdown
                      return item
                    }}
                  />
                </View>
                <View style={globalStyles.formElements}>
                  <TextInput
                    style={globalStyles.TextareaControl}
                    multiline={true}
                    value={this.state.addappointment.complaint}
                    onChangeText={value => this.onValueChange("complaint", value)}
                    numberOfLines={10}
                    placeholder='Complaint'
                    placeholderTextColor="#333"
                  />
                </View>
                <View style={[globalStyles.formElements, styles.CheckBoxCotainer]}>
                  <CheckBox
                    value={this.state.addappointment.emergencyapointment}
                    onValueChange={() => this.setChangeBox()}
                  />
                  <Text style={styles.checkBoxText}>Emergency Appointment</Text>
                </View>
                <View style={globalStyles.formElements}>
                  <TouchableOpacity style={globalStyles.btn} onPress={() => this.addAppointment()}>
                    <Text style={globalStyles.btnTextwhite}>Submit</Text>
                  </TouchableOpacity>
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
export default BookAppointmentView;
