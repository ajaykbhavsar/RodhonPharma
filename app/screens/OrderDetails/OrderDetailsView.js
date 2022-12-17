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
 

class OrderDetailsView extends Component {
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

navigateToCartPage=()=>{
  navigationActions.navigateToCartPage();
 
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
                        <View style={styles.detailtitleBox}>
                            <Text style={styles.detailtitleText}>Zincovit Tablet 15'S</Text>
                          </View>
                          <View style={styles.BoxTop}>
                              <View style={styles.BoxTopTablet}>
                                <Text style={styles.BoxTopTabletText}>Box of 300  Tablets</Text>
                              </View>
                              <Text style={styles.BoxTopTabletText}>Mkt: Apex Laboratories Pvt Ltd</Text>
                          </View>
                          <View style={styles.InstockBox}>
                            <Text style={styles.InstockBoxText}>In Stock</Text>
                          </View>
                          <View style={styles.DetailimageBox}>
                            <Image source={require('../../assets/images/medicine.jpg')} resizeMode='contain' style={styles.productDetailImage}/>
                          </View>
                          <View style={styles.detailPriceBox}>
                            <Text style={styles.detailPrice}><Text style={styles.detailBlackPrice}>Price :</Text> Rs. 84.00</Text>
                          </View>
                          <View style={styles.QtymainBox}>
                            <View style={styles.qtyBoxview}>
                              <Text style={styles.qtyBoxText}>
                                Qty.
                              </Text>
                              <TextInput
                                placeholder='Add Qty.'
                                placeholderTextColor='#787878'
                                style={styles.qtyTextBox}
                              />
                            </View>
                            <TouchableOpacity style={[styles.btn, styles.DetailAddtoCart]} onPress={()=>this.navigateToCartPage()}>
                              <Text style={styles.TextBtnCart}>Add to Cart</Text>
                            </TouchableOpacity>
                          </View>

                          <View style={styles.DescriptionBox}>
                              <Text style={styles.titleTwo}>Uses / Indications</Text>
                              <Text style={styles.ParaText}>Zincovit tablet contains vitamins A, B complex, C, D, and E, 
minerals and Zinc. It is prescribed in suspected cases of dietary
deficiency and in diseases when proper nutrition absorption by 
the body gets hampered or in any medical situation in which the 
body is not able to derive proper nutrition from regular food 
intake.</Text>
                          </View>
                        </View>                          
                      </View>
                  </ScrollView>
              </ImageBackground>          
            <FooterComponents />
        </View>
      );
  }

} 
export default OrderDetailsView;
