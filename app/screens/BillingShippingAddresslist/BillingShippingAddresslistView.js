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
import { ListItem, Radio, Icon } from "native-base";
import ApiConstants from '../../api/ApiConstants';
import SearchableDropdown from 'react-native-searchable-dropdown';
import * as navigationActions from '../../actions/navigationActions';
import Modal from "react-native-modal";
import { TextInput } from 'react-native-gesture-handler';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import { CheckBox } from 'react-native-elements';
import { fetch } from 'app/api/methods/callapi'

class BillingShippingAddresslistView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      selectedItems: '',
      isModalVisible: false,
      page: '',
      addresses: []
    }
  }

  componentDidMount = async () => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 2000)

    let customerId = this.props.loginUserId;
    var result = await fetch(ApiConstants.BILLINGADDRESS + "?customerId=" + customerId, null, "get");
    console.log('result');
    console.log(result);
    if (result.Message == "success") {
      this.setState({ addresses: result.data.ExistingAddresses });
    }
  }

  toggleModal = () => {
    this.setState({
      isModalVisible: !this.state.isModalVisible,
    })

  };

  navigateToBookAppointment = () => {
    navigationActions.navigateToBookAppointment();

  }
  navigateToAddAddress = () => {
    navigationActions.navigateToAddAddress();

  }

  navigateToPayment = (page) => {
    navigationActions.navigateToPayment(page);

  }

  navigateToBillingShipping = async (id) => {
    var result = await fetch(ApiConstants.SELECTSHIPPINGADDRESS + "?customerId=" + this.props.loginUserId + "&addressId="+id, null, "get");
    if (result.Message == "Success") {
      navigationActions.navigateToBillingShipping({addressId:id});
    }
  }

  


  render() {
    const { loading, defaultBillingAddress } = this.props;
    const { addresses } = this.state;

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
                {/* <TouchableOpacity style={styles.btnChange} onPress={()=>this.navigateToAddAddress()}>
                                <Text style={styles.btnChangeText}>Add New Address</Text>
                            </TouchableOpacity>   
                                                   */}
                {
                  addresses.map((address, index) => {
                    return (
                      <View style={styles.textBoxArea} key={index}>
                        <TouchableOpacity onPress={() => this.navigateToBillingShipping(address.Id)}>
                         <Text style={styles.smallText}>{address.Address1}, {address.Address2}, {address.City},{address.Company},
                            {address.CountryName},{address.ZipPostalCode}</Text>
                        </TouchableOpacity>
                      </View>
                    )
                  })
                }
              </View>
            </View>
          </ScrollView>
        </ImageBackground>

      </View>
    );
  }

}
export default BillingShippingAddresslistView;
