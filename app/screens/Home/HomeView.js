import React, { Component } from 'react';
import { get } from 'lodash';
import {Image, View, StatusBar ,TouchableOpacity, ImageBackground, ScrollView, Linking } from 'react-native';
import { Text } from "native-base";
import globalStyles from '../../assets/css/globalStyles';
import styles from './styles';
import Carousel from 'react-native-snap-carousel';
import { FooterComponents } from '../../components/FooterComponents';
import { OverlayActivityIndicatorElement } from '../../components';
import SplashScreen from 'react-native-splash-screen';
import {Statusbar} from '../../components/Statusbar';
import ApiConstants from '../../api/ApiConstants';
import SearchableDropdown from 'react-native-searchable-dropdown';
import * as navigationActions from '../../actions/navigationActions'; 
import Modal from "react-native-modal";
 

class HomeView extends Component {
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
navigateToOnlineOrder=()=>{
  navigationActions.navigateToOnlineOrder(); 
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
          <View style={styles.mainCcnt}>
            
              <View style={styles.containerPadding}>                 
                  <ScrollView style={globalStyles.Pagemargin}>
                  <View>
                        <View style={styles.Homebanner}>
                            <View style={styles.bannerText}>
                              <Text style={styles.DrName}>Dr. Kumar Atul</Text>
                              <Text style={styles.desigNation}>M.D. (Physician)</Text>
                              <Text style={styles.drProfiletext}>Dr Kumar Atul is a General Physician based at Vadodara, Gujarat. He has completed his M.D. (Physician) degree from...</Text>
                                <TouchableOpacity style={styles.ReadMore} onPress={()=>this.toggleModal()}>
                                    <Text style={styles.ReadMoreText}>Read More</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.bannerImageBox}>
                                <Image source={require('../../assets/images/img_doctor.png')} resizeMode="contain" style={styles.bannerImage}/>
                            </View>
                        </View>

                        <View style={styles.ButtonArea}>
                            <TouchableOpacity style={[styles.btn, styles.btnConsult]} onPress={()=>this.navigateToBookAppointment()}>
                                <Text style={styles.btnText}>Consult Now</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.btn, styles.btnMedicine]}  onPress={()=>this.navigateToOnlineOrder()}>
                                <Text style={styles.btnText}>Order Medicine</Text>
                            </TouchableOpacity>
                        </View>

                        <Text style={styles.SubTitle}>Our Speciality</Text>
                        <View style={styles.servicesBoxMain}>
                          <View style={styles.serviceBox}>
                              <Image source={require('../../assets/images/icon_eecptheropy.png')} resizeMode="contain" style={styles.iconImage} />
                              <Text style={styles.serviceText}>EECP Therapy</Text>
                          </View> 
                          <View style={styles.serviceBox}>
                              <Image source={require('../../assets/images/icon_2dcardio.png')} resizeMode="contain" style={styles.iconImage} />
                              <Text style={styles.serviceText}>2D Eco Cardiography</Text>
                          </View> 
                          <View style={styles.serviceBox}>
                              <Image source={require('../../assets/images/icon_heart.png')} resizeMode="contain" style={styles.iconImage} />
                              <Text style={styles.serviceText}>ECG</Text>
                          </View> 
                          <View style={styles.serviceBox}>
                              <Image source={require('../../assets/images/icon_pft.png')} resizeMode="contain" style={styles.iconImage} />
                              <Text style={styles.serviceText}>PFT</Text>
                          </View> 
                          <View style={styles.serviceBox}>
                              <Image source={require('../../assets/images/icon_physician.png')} resizeMode="contain" style={styles.iconImage} />
                              <Text style={styles.serviceText}>General Physician OPD </Text>
                          </View> 
                          <View style={styles.serviceBox}>
                              <Image source={require('../../assets/images/icon_pharmy.png')} resizeMode="contain" style={styles.iconImage} />
                              <Text style={styles.serviceText}>Pharmacy</Text>
                          </View> 
                        </View>
                    </View>    
                  
                  </ScrollView>
                 
              </View>
               
              </View>
              </ImageBackground>
          
          <FooterComponents />


          <Modal isVisible={this.state.isModalVisible}>
            <View style={styles.ModayBody}>
              <TouchableOpacity style={styles.btnClose} onPress={()=>this.toggleModal()}>
                 <Image source={require('../../assets/images/close.png')} resizeMode="contain" style={styles.CloseBtnImage} />
              </TouchableOpacity>
              <ScrollView>
                <View>
              <Text style={styles.DrName}>Dr. Kumar Atul</Text>
              <Text style={styles.desigNation}>M.D. (Physician)</Text>
              <Image source={require('../../assets/images/img_doctor.png')} resizeMode="contain" style={styles.ModalbannerImage}/>
                <Text style={styles.modaldrProfiletext}>Dr. Kumar Atul is a General Physician based at Vadodara, Gujarat. 
                He has completed his M.D. (Physician) degree from Crimea State Medical University, Simpheropol in year 2000 & is 
                registered under Medical Council Of India(MCI), N.Delhi & Gujarat Medical Council, further he did his PGDHM from 
                Symbiosis,Pune.</Text> 
                <Text style={styles.modaldrProfiletext}> Dr. Atul is Accredited from Indian Academy Of Echocardiography in 2010, Experienced in EECP Therapy 
                (the ONLY doctor In Vadodara for last &gt; 10yrs doing EECP with Vasomedical Machine which is USFDA approved for EECP) ,
                Worked as a Joint Superintendent & Physician at BAPS Pramukhswami Hospital,Dabhoi, Vadodara for &gt; 9yrs, Worked as a 
                Physician at SFG General Hospital, Vatrak,Bayad, Gujarat. Visiting at Rhythm Hospital & Sterling Hospital, Vadodara 
                since its inception.</Text>
                </View>
                </ScrollView>

            </View>
          </Modal>


        </View>
      );
  }

} 
export default HomeView;
