import React, { Component } from 'react';
import { get } from 'lodash';
import {Image, View, StatusBar ,TouchableOpacity, ImageBackground, ScrollView, Linking } from 'react-native';
import { Text } from "native-base";
import globalStyles from '../../assets/css/globalStyles';
import styles from './styles'; 
import { FooterComponents } from '../../components/FooterComponents';
import { OverlayActivityIndicatorElement } from '../../components';
import SplashScreen from 'react-native-splash-screen';
import {Statusbar} from '../../components/Statusbar';
import ApiConstants from '../../api/ApiConstants';
import SearchableDropdown from 'react-native-searchable-dropdown';
import * as navigationActions from '../../actions/navigationActions'; 
import Modal from "react-native-modal";
import { TextInput } from 'react-native-gesture-handler';
 

class OrderHistoryView extends Component {
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

navigateToOrderDetails=()=>{
  navigationActions.navigateToOrderDetails();
 
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
                  <ScrollView>
                      <View style={styles.mainCcnt}>
                        <View style={styles.DetailpageContainer}>
                            <TouchableOpacity style={styles.OrderNodate} onPress={()=>this.navigateToOrderDetails()}>
                                <View>
                                  <Text style={styles.pagelabel}>Order No.</Text>
                                  <Text style={styles.valueBox}>10</Text>
                                </View>
                                <View>
                                <Text style={styles.pagelabel}>Order Date</Text>
                                <Text style={styles.valueBox}>8 Oct 2022 4:00 pm</Text>
                                </View>
                                <View>
                                <Text style={styles.pagelabel}>Order Status</Text>
                                <View style={[globalStyles.statusBox, globalStyles.completedStatus]}>
                                        <Text style={[globalStyles.statusBoxText, styles.fnt5]}>Completed</Text>
                                      </View>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.OrderNodate} onPress={()=>this.navigateToOrderDetails()}>
                                <View>
                                  <Text style={styles.pagelabel}>Order No.</Text>
                                  <Text style={styles.valueBox}>10</Text>
                                </View>
                                <View>
                                <Text style={styles.pagelabel}>Order Date</Text>
                                <Text style={styles.valueBox}>8 Oct 2022 4:00 pm</Text>
                                </View>
                                <View>
                                <Text style={styles.pagelabel}>Order Status</Text>
                                <View style={[globalStyles.statusBox, globalStyles.completedStatus]}>
                                        <Text style={[globalStyles.statusBoxText, styles.fnt5]}>Completed</Text>
                                      </View>
                                </View>
                            </TouchableOpacity>


                            

                           
                            
                        </View>                          
                      </View>
                  </ScrollView>
              </ImageBackground>          
            <FooterComponents />
        </View>
      );
  }

} 
export default OrderHistoryView;
