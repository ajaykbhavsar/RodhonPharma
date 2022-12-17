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
 

class PrescriptionDetailsView extends Component {
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



  
  render() {
    const { loading} = this.props; 

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
                          <View style={styles.detailBox}>
                              <View style={styles.medicineTitleBox}>
                                <Text style={styles.medicineTitle}>Augmentin 625 Duo Tablet</Text>
                                <Text style={styles.medicineNos}>3 Days</Text>
                              </View>
                              <View style={styles.medicineTimining}>
                                  <View style={styles.medicineTiminingBox}>
                                    <Text style={styles.medicineTime}>Morning</Text>
                                    <View style={styles.medicineTimeTwoBox}>
                                      <Text style={styles.medicineTimeNos}>1</Text>
                                      <Text style={styles.medicineTimeMeal}>Before Meal</Text>
                                    </View>
                                  </View>
                                  <View style={styles.medicineTiminingBox}>
                                    <Text style={styles.medicineTime}>Noon</Text>
                                    <View style={styles.medicineTimeTwoBox}>
                                      <Text style={styles.medicineTimeNos}>1</Text>
                                      <Text style={styles.medicineTimeMeal}>Before Meal</Text>
                                    </View>
                                  </View>
                              </View>
                              <View style={styles.medicineTimining}>
                                  <View style={styles.medicineTiminingBox}>
                                    <Text style={styles.medicineTime}>Evening</Text>
                                    <View style={styles.medicineTimeTwoBox}>
                                      <Text style={styles.medicineTimeNos}>1</Text>
                                      <Text style={styles.medicineTimeMeal}>Before Meal</Text>
                                    </View>
                                  </View>
                                  <View style={styles.medicineTiminingBox}>
                                    <Text style={styles.medicineTime}>Night</Text>
                                    <View style={styles.medicineTimeTwoBox}>
                                      <Text style={styles.medicineTimeNos}>1</Text>
                                      <Text style={styles.medicineTimeMeal}>Before Meal</Text>
                                    </View>
                                  </View>
                              </View>
                         
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
export default PrescriptionDetailsView;
