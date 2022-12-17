import React, { Component } from 'react';
import { get } from 'lodash';
import { Image, View, StatusBar, TouchableOpacity, ImageBackground, ScrollView, Linking } from 'react-native';
import { Text } from "native-base";
import globalStyles from '../../assets/css/globalStyles';
import styles from './styles';
import { FooterComponents } from '../../components/FooterComponents';
import { OverlayActivityIndicatorElement } from '../../components';
import SplashScreen from 'react-native-splash-screen';
import { Statusbar } from '../../components/Statusbar';
import ApiConstants from '../../api/ApiConstants';
import SearchableDropdown from 'react-native-searchable-dropdown';
import * as navigationActions from '../../actions/navigationActions';
import Modal from "react-native-modal";
import { TextInput } from 'react-native-gesture-handler';


class BillingShippingView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      selectedItems: '',
      isModalVisible: false,
      page: ''
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
      isModalVisible: !this.state.isModalVisible,
    })

  };

  navigateToBookAppointment = () => {
    navigationActions.navigateToBookAppointment();

  }
  navigateToBillingShippingAddresslist = () => {
    navigationActions.navigateToBillingShippingAddresslist();

  }

  navigateToOrderSummary = (selectedAddressId) => {
    navigationActions.navigateToOrderSummary({addressId:selectedAddressId});

  }

  render() {
    const { loading, loginuser, selectedAddressId } = this.props;
    let addresses = selectedAddressId > 0 ? loginuser.Addresses?.filter(x => x.Id == selectedAddressId) : loginuser.Addresses;
    console.log("new log");
    console.log(selectedAddressId);
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
                {/*                            
                            
                            <View style={styles.textBoxArea}>
                                <Text style={styles.smallText}>Delivery Date & Time</Text>
                                <Text style={styles.DateText}>Monday October 24</Text>
                                <Text style={styles.smallText}>10:00 AM</Text>
                            </View> */}
                {
                  addresses?.length > 0 &&
                  <View style={styles.textBoxArea}>
                    <TouchableOpacity style={styles.btnChange} onPress={() => this.navigateToBillingShippingAddresslist()}>
                      <Text style={styles.btnChangeText}>Change</Text>
                    </TouchableOpacity>
                    <Text style={styles.smallText}>Delivery Address</Text>
                    <Text style={styles.DateText}>{addresses[0].FirstName} {addresses[0].LastName}</Text>
                    <Text style={styles.smallText}>{addresses[0].Address1}, {addresses[0].Address2}, {addresses[0].City},{addresses[0].Company},
                      {addresses[0].CountryName},{addresses[0].ZipPostalCode}</Text>
                  </View>
                }


                <View style={[styles.textBoxArea, styles.borderZero]}>
                  <Text style={styles.smallText}>Message to be Conveyed (optional)</Text>
                  <TextInput
                    multiline={true}
                    numberOfLines={4}
                    style={styles.textAreaBox}
                  />
                </View>
              </View>
            </View>
          </ScrollView>
        </ImageBackground>
        <View style={styles.CartBottompage}>
          {/* <View style={styles.bottomPriceBox}>
            <Text style={styles.bottomPriceBoxTitle}>Total:</Text>
            <Text style={styles.bottomPriceBoxPrice}>Rs. 168.00</Text>
          </View> */}
          <TouchableOpacity style={[styles.btn, styles.btnContinue]} onPress={() => this.navigateToOrderSummary(selectedAddressId)}>
            <Text style={styles.btnContinueText}>Continue</Text>
          </TouchableOpacity>

        </View>
      </View>
    );
  }

}
export default BillingShippingView;
