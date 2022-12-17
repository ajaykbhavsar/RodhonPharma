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
import { fetch } from 'app/api/methods/callapi'
 

class CartPageView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex:0,    
      selectedItems:'',   
      isModalVisible:false, 
      cartDetails:[],
      cartTotal :{}
    } 
  }

  async componentDidMount() {
    setTimeout(() => {
      SplashScreen.hide();
    }, 2000)
    this.loadCartDetails();
}

loadCartDetails = async ()=>{
  let customerId = this.props.loginUserId;
    var result = await fetch(ApiConstants.CARTDETAILS + "?customerId=" + customerId, null, "post");

    if (result.Message == "Success") {
      this.setState({ cartDetails: result.data.Data });   
      var cartTotalResult = await fetch(ApiConstants.CARTTOTAL + "?customerId=" + customerId, null, "get");  
      if(cartTotalResult.Message == "Success"){
          this.setState({cartTotal : cartTotalResult.data});
      }
    }
}
  toggleModal = () => {
    this.setState({
      isModalVisible:!this.state.isModalVisible,
    })
 
};

navigateToBookAppointment=()=>{
  navigationActions.navigateToBookAppointment();
 
}

navigateToBillingShipping=()=>{
  navigationActions.navigateToBillingShipping();
 
}

removeItem = async (id) =>{
  console.log("call delete");
  let customerId = this.props.loginUserId;
    var result = await fetch(ApiConstants.DELETECARTITEM + "?customerId="+customerId+"&cartItemId=" + id+"&wishlistItem=falses",null, "get")
    if(result.Message == "Success"){
      this.loadCartDetails();
    }
}


  render() {
    const { loading} = this.props; 
    const {cartDetails,cartTotal} = this.state;

    let cartData = [];
    if(cartDetails?.length > 0){
      cartData= this.state.cartDetails;
    }

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
                        {
                          cartData.map((item, index) => {
                           // let productImgPath = "https://"+product.ProductImageUrl;
                            return (
                              <View style={styles.Cartbox} key={index}>
                              <TouchableOpacity style={styles.btnClosecart} onPress={()=>this.removeItem(item.Id)}>
                                  <Image source={require('../../assets/images/btn_cartdelete.png')} resizeMode='contain' style={styles.btnClosecartImage}/>
                              </TouchableOpacity>
                                <View style={styles.cartImageBox}>
                                  <Image source={require('../../assets/images/medicine.jpg')} resizeMode='contain' style={styles.cartImage}/>
                                </View>
                                <View style={styles.productDesc}>
                                  <Text style={styles.titleTwo}>{item.ProductName}</Text>
                                  <Text style={styles.ParaText}>{item.ProductTypeLabelHint}</Text>
                                      <View>
                                        <Text style={styles.cartPrice}>{item.Total}</Text>
                                      </View>
                                </View>
                                <View style={styles.qtyCartbox}>
                                  <Text style={styles.qtyTtl}>Qty.</Text>
                                  <Text style={styles.qtyTtl}>{item.Quantity}</Text>
                                </View>
                            </View>

                            )
                          })
                        }
                           
                            
                        </View>                          
                      </View>
                  </ScrollView>
              </ImageBackground>          
            <View style={styles.CartBottompage}>
              <View style={styles.bottomPriceBox}>
                  <Text  style={styles.bottomPriceBoxTitle}>Total:</Text>
                  <Text  style={styles.bottomPriceBoxPrice}>Rs. {cartTotal.OrderTotal}</Text>
              </View>
              <TouchableOpacity  style={[styles.btn, styles.btnContinue]} onPress={()=>this.navigateToBillingShipping()}>
                <Text style={styles.btnContinueText}>Continue</Text>
              </TouchableOpacity>
                
            </View>
        </View>
      );
  }

} 
export default CartPageView;
